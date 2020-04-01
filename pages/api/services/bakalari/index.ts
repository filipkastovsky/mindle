import { NextApiResponse } from 'next';
import getTasksAsync from './utils/getTasksAsync';
import { Urls } from './utils/Urls';
import launchBrowser from './utils/launchBrowserAsync';
import login from './utils/loginAsync';
import getNOfMessagesAsync from './utils/getNOfMessagesAsync';
import { ApiError } from 'next/dist/next-server/server/api-utils';
import IApiRequest from '../../../../utils/IApiRequest';
import validateUrl from './utils/validateUrl';

export default async (req: IApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST')
            throw new ApiError(501, 'Unrecognized request method');

        if (!req.body.username || !req.body.password || !req.body.url)
            throw new ApiError(403, 'Invalid request');

        if (!validateUrl(req.body.url))
            throw new ApiError(
                403,
                'URL not conforming to format "https://your.url.com"',
            );

        const { browser, page } = await launchBrowser();
        await page.goto(req.body.url + Urls.root);
        await login(req.body, page);

        await page.goto(req.body.url + Urls.komens);
        const nOfMessages = await getNOfMessagesAsync(page);
        const tasks = await getTasksAsync(nOfMessages, page);

        await browser.close();

        res.status(200).json({ statusCode: 200, data: { tasks } });
    } catch (err) {
        res.status(err?.statusCode || 500).json({
            statusCode: err?.statusCode || 500,
            message: err.message,
        });
    }
};
