import { faker } from "@faker-js/faker";
import { test, expect } from "@playwright/test";

test.only("Program 2 : nopcommerce Navigation and validation", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const MainPageTitle = "STORE";
    const SignupLink = page.locator("#signin2");
    const SignInLink = page.locator("#login2");
    const SignUpbutton = page.locator("#signInModal button.btn-primary");
    const SignUpUserNameField = page.locator("#sign-username");
    const LoginUsernameField = page.locator("#loginusername");
    const LoginPasswordField = page.locator("#loginpassword");
    const LoginButton = page.locator("#logInModal button.btn-primary");
    const SignUpPasswordField = page.locator('#sign-password');
    const LogOutLink = page.locator("#logout2");
    const WelcomeUserName = page.locator("#nameofuser");
    const LaptopCategoryLink = page.locator("a:has-text('Laptops')");
    const LastLaptopItemCard = page.locator("#tbodyid .card-img-top").last();
    const PreviousButton = page.locator("#prev2");
    const NextButton = page.locator("#next2");
    const ProductName = "MacBook air";
    const ProductCard = page.locator("h4.card-title");
    const ProductCost = page.locator("div.card-block h5");
    const MacBookAirCost = page.locator("#tbodyid h3.price-container");
    const SonyVaioLink = page.locator("//a[contains(text(),'Sony vaio i5')]");
    const MacbookAirLink = page.locator("//a[contains(text(),'MacBook air')]");

    const UserName = "Julie_Weimann68";     //faker.internet.username();
    const Email = "Harry.Smith79@hotmail.com";  //faker.internet.email();
    const password = "UTUPF2EDDW0DRwl";     //faker.internet.password();

    console.log("Name : " + UserName);
    console.log("Email ID : " + Email);
    console.log("Password : " + password);

    await page.goto("https://www.demoblaze.com/");
    await expect (page).toHaveTitle(MainPageTitle);
    await expect (page.locator(".carousel-inner").first()).toBeVisible();

    /*
    await SignupLink.click();
    await expect (page.locator("#signInModal .modal-content")).toBeVisible();
    await SignUpUserNameField.fill(UserName);
    await SignUpPasswordField.fill(password);
    await SignUpbutton.click();
    */

    await SignInLink.click();
    await expect (page.locator("#logInModal .modal-content")).toBeVisible();
    await LoginUsernameField.fill(UserName);
    await LoginPasswordField.fill(password);
    await LoginButton.click();

    await expect (LogOutLink).toBeVisible();
    await expect (WelcomeUserName).toHaveText("Welcome " + UserName);

    await LaptopCategoryLink.click();
    //await page.waitForTimeout(3000);
    await MacbookAirLink.hover();
    await expect (LastLaptopItemCard).toBeVisible();
    await expect (NextButton).toBeVisible();
    //await NextButton.click();

    const count = await ProductCard.count();
    console.log("Total number of products in the page are : " + count);
    for(let i = 0 ; i < (count) ; i++)
    {
        console.log("Pointer1 : " + i);
        if (await ProductCard.nth(i).textContent() === ProductName) 
        {
            console.log("Inside If condition");
            const Cost = await ProductCost.nth(i).innerText();
            console.log("Cost of " + ProductName + " is : " + Cost);
            break;
        }
    }

    //Push Branch Check

    //await LogOutLink.click();
    //await expect (SignInLink).toBeVisible();
    //Code Push Check

});