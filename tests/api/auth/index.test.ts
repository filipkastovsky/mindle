import create from '../../../pages/api/auth/create';
import del from '../../../pages/api/auth/delete';
import login from '../../../pages/api/auth/login';
import logout from '../../../pages/api/auth/logout';
import createMockServer from '../../../mocks/createMockServer';
import axios from 'axios';
import { randomEmail } from '../../utils/randomEmail';

describe('api/auth', () => {
    it('should handle auth', async () => {
        const { server: createServer, url: createUrl } = await createMockServer(
            create,
        );
        const { server: delServer, url: delUrl } = await createMockServer(del);
        const { server: loginServer, url: loginUrl } = await createMockServer(
            login,
        );
        const { server: logoutServer, url: logoutUrl } = await createMockServer(
            logout,
        );
        const email = randomEmail();
        const password = 'testtest';
        let createdUserResponse = {} as any;
        try {
            // Create account
            const createResponse = await axios.post(createUrl, {
                email,
                password,
            });
            createdUserResponse = createResponse;
            expect(createResponse.status).toBe(201);
        } catch (createErr) {
            expect(createErr).toBe(undefined);
        } finally {
            createServer.close();
        }

        try {
            // Login
            const loginResponse = await axios.post(loginUrl, {
                username: email,
                password,
            });

            expect(loginResponse.data.data.access_token).toBeTruthy();
        } catch (loginErr) {
            expect(loginErr).toBe(undefined);
        } finally {
            createServer.close();
        }
        try {
            // Logout
            const logoutResponse = await axios.post(logoutUrl, {
                userId: createdUserResponse.data.data._id,
            });

            expect(logoutResponse.status).toBe(204);
        } catch (logoutErr) {
            expect(logoutErr).toBe(undefined);
        } finally {
            createServer.close();
        }
        try {
            // Delete
            const delResponse = await axios.post(delUrl, {
                userId: createdUserResponse.data.data._id,
            });

            expect(delResponse.status).toBe(204);
        } catch (deleteErr) {
            expect(deleteErr).toBe(undefined);
        } finally {
            createServer.close();
        }
    });
});
