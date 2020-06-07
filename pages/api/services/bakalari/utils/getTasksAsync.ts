import ITask from '../../../../../interfaces/ITask';
import { Page } from 'puppeteer';
import { KomensSelectors } from './Selectors';
import Services from '../../../../../utils/Services';

export default async (nOfMessages: number, page: Page) => {
    const tasks: ITask[] = [];

    for (let i = 1; i <= nOfMessages; i++) {
        // .forEach doesn't support async
        await page.click(`${KomensSelectors.messageListItem}:nth-child(${i})`); //! nth-child starts from 1

        await page.waitFor(600); // View rerender can take up to 14s at this point

        const sender = await page.$eval(
            KomensSelectors.senderDiv,
            (el) => el.textContent,
        );

        const date = await page.$eval(KomensSelectors.dateTd, (el) => {
            const convertBakalariDateToNum = (bakalariDate: string | null) => {
                if (!bakalariDate) return null;
                const [date, time] = bakalariDate.split(' ');
                const [day, month, year] = date.split('.');
                const [hours, minutes] = time.split(':');

                return new Date(
                    +year,
                    +month - 1,
                    +day,
                    +hours,
                    +minutes,
                ).getTime();
            };

            return convertBakalariDateToNum(el.textContent);
        });

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
