const { test } = require("@playwright/test");

test("Program for Google" , async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demo.prestashop.com/#/en/front");

});