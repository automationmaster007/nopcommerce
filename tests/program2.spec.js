import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { TIMEOUT } from 'dns';

let page;


async function clickElement(selector) {
  await page.click(selector);
}
async function sendKey(selector, value) {
  await page.fill(selector, value);
}
async function wait(milliseconds) {
  await page.waitForTimeout(milliseconds);
}
async function hover(selector) {
  await page.hover(selector);
}
async function selectDropdown(selector, value) {
  await page.selectOption(selector, { value: value });
}
async function selectWard(wardName) {
  await page.click("#ContentPlaceHolder1_TabContainer1_TabPanel2_ddl_ward_Input");
  await page.fill("#ContentPlaceHolder1_TabContainer1_TabPanel2_ddl_ward_Input", wardName);
}

async function captureAlert() {
  return new Promise(resolve => {
    page.once('dialog', async dialog => {
      const message = dialog.message();
      console.log("Alert text:", message);
      await dialog.accept();
      resolve(message);
    });
  });
}
async function moveToElement(selector) {
  await page.waitForSelector(selector, { state: 'visible' });
  await page.hover(selector);
}
async function focusOnMainWindow(context, mainTitlePart) {
  const pages = context.pages();
  let mainPage;
  if (mainTitlePart) {
    for (const p of pages) {
      const title = await p.title();
      if (title.includes(mainTitlePart)) {
        mainPage = p;
        break;
      }
    }
  } else {
    mainPage = pages[0];
  }
  if (!mainPage) {
    throw new Error('Main window not found!');
  }
  await mainPage.bringToFront();
  console.log(`Focused on main window: ${await mainPage.title()}`);
  return mainPage;
}
async function launchBrowser(browser){
    await page.goto(browser)
}


test('Patient Acknowledge', async({page:testPage})=>{
page = testPage;
await launchBrowser("https://demo.prestashop.com/#/en/front");

})