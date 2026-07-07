const { chromium } = require("playwright");

let browser;
let page;

async function loginLinkedIn(email, password) {

    browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();

    page = await context.newPage();

    await page.goto("https://www.linkedin.com/login");

    await page.fill("#username", email);
    await page.fill("#password", password);

    await page.click("button[type='submit']");

    // User manually completes login if needed
    await page.waitForTimeout(15000);

    return {
        success: true,
        message: "LinkedIn Login Successful"
    };
}

async function searchJobs(keyword) {

    if (!page) {
        throw new Error("Please login first.");
    }

    await page.goto(
        `https://www.linkedin.com/search/results/content/?keywords=${encodeURIComponent(keyword)}`,
        {
            waitUntil: "domcontentloaded"
        }
    );

    return {
        success: true,
        message: "Search Completed"
    };
}

module.exports = {
    loginLinkedIn,
    searchJobs
};
