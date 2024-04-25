import {test} from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';

test.only('Amazon Test', async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const pagePromise = context.waitForEvent('page');
    const mobile = '8595108380';
    const passWord = 'Ayushi123$';

    const loginPage = new LoginPage(page);

    //await page.goto('https://www.amazon.in/');
    loginPage.goTo();

    //await page.getByRole('link', {name: 'Hello, sign in Account & Lists'}).click();
    //await page.locator('#ap_email').fill(mobile);
    // await page.getByLabel('Continue').click();
    // await page.locator('#ap_password').fill(password);
    loginPage.validLogin(mobile, passWord);
    
    await page.locator('#signInSubmit').click();
    await page.locator('#twotabsearchtextbox').fill('iphone 13');
    await page.locator('#nav-search-submit-button').click();
    await page.locator('.s-image').nth(0).click();
    const page2 = await pagePromise;
    await page2.waitForLoadState();

    await page2.getByRole('button', {name: 'Add to Cart'}).click();
    await page2.getByLabel('Proceed to checkout (1 item)').click();

})