import ITask from '../../../../../utils/ITask';
import { Page } from 'puppeteer';
import { KomensSelectors } from './Selectors';
import Services from '../../../../../utils/Services';

export default async (nOfMessages: number, page: Page) => {
    const tasks: ITask[] = [];

    for (let i = 1; i <= nOfMessages; i++) {
        // .forEach doesn't support async
        await page.click(`${KomensSelectors.messageListItem}:nth-child(${i})`); //! nth-child starts from 1

        await page.waitFor(500); // View rerender can take up to 500ms at this point

        const sender = await page.$eval(
            KomensSelectors.senderDiv,
            (el) => el.textContent,
        );

        const date = await page.$eval(
            KomensSelectors.dateTd,
            (el) => el.textContent,
        );

        const body = await page.$eval(
            KomensSelectors.bodyDiv,
            (el) =>
                el.textContent!.replace(/\n|\t/g, '').replace(/\s{2,}/g, '\n'), //TODO: Source breaks line using HTML <br />, implement custom html to text converter
        );

        tasks.push({
            sender,
            date,
            body,
            service: Services.Bakalari,
            starred: false,
            resolved: false,
        });
    }

    return tasks;
};
