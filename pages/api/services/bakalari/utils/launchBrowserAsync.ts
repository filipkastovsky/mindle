import puppeteer from 'puppeteer';

export default async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        defaultViewport: { width: 1280, height: 720 },
    });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(60000);
    return { browser, page };
};
