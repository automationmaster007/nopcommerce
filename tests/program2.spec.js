import { faker } from "@faker-js/faker";
import { test, expect } from "@playwright/test";

test("Program 2 : nopcommerce Navigation and validation", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const MainPageTitle = "Automation Exercise";
    const SignUpLoginTitle = "Automation Exercise - Signup / Login";
    const SignupLoginLink = page.locator("i.fa-lock");
    const NameField = page.locator("//input[@name='name']");
    const EmailField = page.locator("//div[@class='signup-form']//input[@name='email']");
    const RegisterButton = page.locator("div.signup-form button.btn-default");
    const LoginForm = page.locator('.login-form');
    const MaleGender = page.locator('#id_gender1');
    const FemaleGender = page.locator('#id_gender2');
    const Password = page.locator('#password');
    const NewsletterCheckBox = page.locator('#newsletter');
    const OptinCheckBox = page.locator('#optin');

    const Name = faker.person.fullName();
    const Email = faker.internet.email();
    const password = faker.internet.password();

    console.log("Name : " + Name);
    console.log("Email ID : " + Email);
    console.log("Password : " + password);

    await page.goto("https://automationexercise.com/");
    await expect (page).toHaveTitle(MainPageTitle);
    await expect (page.locator(".carousel-inner").first()).toBeVisible();

    await SignupLoginLink.click();
    await expect (page).toHaveTitle(SignUpLoginTitle);
    await NameField.fill(Name);
    await EmailField.fill(Email);
    await RegisterButton.click();

    //await page.waitForLoadState('networkidle');
    expect (await LoginForm.isVisible());
    await MaleGender.isChecked();
    //await expect(page.locator('#name').toHaveText(Name));
    //await expect(page.locator('#email')).toHaveText(Email);
    console.log("Name on signin page : " + await page.locator('#name').textContent());
    await Password.fill(password);
    await page.locator('#days').selectOption("3");
    await page.locator('#months').selectOption("8");
    await page.locator('#years').first().selectOption({ label: '1998' });
    await NewsletterCheckBox.check();
    await OptinCheckBox.check();

});