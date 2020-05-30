import bakalari from '../../../../pages/api/services/bakalari';
import createMockServer from '../../../../mocks/createMockServer';
import axios from 'axios';

describe('api/services/bakalari', () => {
    it('should respond 403 to an invalid POST', async () => {
        const { server, url } = await createMockServer(bakalari);

        await axios
            .post(url)
            .catch((err) => expect(err.response.data.statusCode).toBe(403));

        server.close();
    });

    it('should respond 403 on Validation Error', async () => {
        const { server, url } = await createMockServer(bakalari);

        await axios
            .post(url, {
                username: 'test',
                password: 'test',
                url: 'https://bakalar.hladnov.cz/',
            })
            .catch((err) => expect(err.response.data.statusCode).toBe(403));

        await axios
            .post(url, {
                username: 'test',
                password: 'test',
                url: 'http://bakalar.hladnov.cz',
            })
            .catch((err) => expect(err.response.data.statusCode).toBe(403));

        server.close();
    });
});
