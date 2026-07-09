const { chromium } = require("playwright");
const path = require("path");

let browser;
let page;

async function loginGmail() {

    browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();

    page = await context.newPage();

    await page.goto("https://mail.google.com/");

    console.log("Please login manually...");

    await page.waitForTimeout(30000); // 30 sec

    await context.storageState({
        path: path.join(__dirname, "../data/gmail-session.json")
    });

    return {
        success: true,
        message: "Gmail session saved successfully"
    };
}
async function composeMail() {
  if (!page) {
    throw new Error("Please login first.");
  }

  await page.waitForLoadState("networkidle");

  await page
    .getByRole("button", {
      name: /compose/i,
    })
    .click();

  await page.waitForTimeout(3000);

  return {
    success: true,
    message: "Compose Window Opened",
  };
}

module.exports = {
  loginGmail,
  composeMail,
};
