import { LoginSelectors } from './Selectors';
import { Urls } from './Urls';
import { Page } from 'puppeteer';
import { ApiError } from 'next/dist/next-server/server/api-utils';
import IReqBody from '../../../../../utils/IReqBody';

// Side effect: Throws on Autherror
export default async ({ username, password, url }: IReqBody, page: Page) => {
    await page.type(LoginSelectors.username, username);
    await page.type(LoginSelectors.password, password);
    await page.click(LoginSelectors.loginBtn);
    const currentUrl = page.url();
    if (currentUrl !== url + Urls.dashboard)
        throw new ApiError(401, 'Authentication failed');
};
