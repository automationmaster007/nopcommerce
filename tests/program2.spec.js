const {test, expect} = require ("@playwright/test");

test("Program 2 : nopcommerce Navigation and validation", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const MainPageTitle = "nopCommerce demo store. Home page title";

    await page.goto("https://demo.nopcommerce.com/");
    await expect (page).toHaveTitle(MainPageTitle);
    await expect(page.locator(".slider-img").first()).toBeVisible();
});