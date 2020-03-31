import { NextApiRequest, NextApiResponse } from 'next';
import getTasksAsync from './utils/getTasksAsync';
import { Urls } from './utils/Urls';
import launchBrowser from './utils/launchBrowserAsync';
import login from './utils/loginAsync';
import getNOfMessagesAsync from './utils/getNOfMessagesAsync';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { browser, page } = await launchBrowser();
        await page.goto(Urls.root);
        await login('', '', page);

        await page.goto(Urls.komens);
        const nOfMessages = await getNOfMessagesAsync(page);
        const tasks = await getTasksAsync(nOfMessages, page);

        await browser.close();

        res.status(200).json({ statusCode: 200, data: { tasks } });
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};
