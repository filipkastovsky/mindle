// ! puppeteer is a dev dependency, will not be bundled in production (aws-lambda environment)
// * Fallback to chrome-aws-lambda if puppeteer cannot be found
// Side effect: If fallback fails, launchBrowserAsync will throw an error

export default async () => {
    const defaultViewport = { width: 1280, height: 720 };
    let browser;

    try {
        // Development
        const puppeteer = await require('puppeteer');
        browser = await puppeteer.launch({
            defaultViewport,
        });
    } catch {
        // Production
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
