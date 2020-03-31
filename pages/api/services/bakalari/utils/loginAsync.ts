import { LoginSelectors } from './Selectors';
import { Urls } from './Urls';
import { Page } from 'puppeteer';
import { ApiError } from 'next/dist/next-server/server/api-utils';

// Side effect: Throws on Autherror
export default async (username: string, password: string, page: Page) => {
    await page.type(LoginSelectors.username, username);
    await page.type(LoginSelectors.password, password);
    await page.click(LoginSelectors.loginBtn);
    const url = page.url();
    if (url !== Urls.dashboard)
        throw new ApiError(401, 'Authentication failed');
};
