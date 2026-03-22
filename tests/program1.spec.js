const { test, expect } = require("@playwright/test");

test('Program 1 : Simple Page Open', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const LoginPageTitle = "OrangeHRM";
    /*
    https://automationexercise.com/
    https://www.demoblaze.com/
    https://demo.nopcommerce.com/ --
    https://demo.prestashop.com/#/en/front
    */
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect (page).toHaveTitle(LoginPageTitle);
    await expect(page.locator('.oxd-input--active').first()).toBeVisible();
});