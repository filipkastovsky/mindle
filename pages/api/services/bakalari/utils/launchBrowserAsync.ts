// * Fallback to chrome-aws-lambda if puppeteer cannot be found (AWS lambda limits package size to ~50MB)
// Side effect: If fallback fails, launchBrowserAsync will throw an error

export default async () => {
    const defaultViewport = { width: 1280, height: 720 };
    let browser;

    try {
        const puppeteer = await require('puppeteer');
        browser = await puppeteer.launch({
            args: ['--no-sandbox'],
            defaultViewport,
        });
    } catch {
        // Fallback for AWS Lambda
        const puppeteer = await require('puppeteer-core');
        const chrome = await require('chrome-aws-lambda');

        browser = await puppeteer.launch({
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
            defaultViewport,
        });
    }

    const page = await browser.newPage();
    return { browser, page };
};
