const { chromium } = require("playwright");
const path = require("path");
let browser;
let page;

async function loginLinkedIn(email, password) {
  browser = await chromium.launch({
    headless: false,
  });

  const context = await browser.newContext();

  page = await context.newPage();

  await page.goto("https://www.linkedin.com/login");

  await page.fill("#username", email);
  await page.fill("#password", password);

  await page.click("button[type='submit']");

  // User manually completes login if needed
  await page.waitForTimeout(15000);
  await context.storageState({
    path: path.join(__dirname, "../data/linkedin-session.json"),
  });
  return {
    success: true,
    message: "LinkedIn Login Successful",
  };
}

async function searchJobs() {
  if (!page) {
    throw new Error("Please login first.");
  }

  const keywords = [
    "Java Developer C2C",
    "Business Analyst C2C",
    "Project Manager C2C",
    "Data Analyst C2C"
  ];

  const results = [];

  for (const keyword of keywords) {
   console.log("Searching:", keyword); 

    await page.goto(
      `https://www.linkedin.com/search/results/content/?keywords=${encodeURIComponent(keyword)}`,
      {
        waitUntil: "domcontentloaded",
      },
    );

    
    await page.waitForTimeout(5000);

    console.log("Current URL:", await page.url());

    results.push({
      keyword,
      url: await page.url(),
      status: "Completed",
    });
  }

  return {
    success: true,
    totalSearches: results.length,
    searches: results,
  };
}

module.exports = {
  loginLinkedIn,
  searchJobs,
};
