import { KomensSelectors } from './Selectors';
import { Page } from 'puppeteer';

export default (page: Page) =>
    page.$$eval(KomensSelectors.messageListItem, (els) => els.length);
