import {test} from '@playwright/test';

test('Test', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/');
    // await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('.login-wrapper-footer-text').click();
    await page.locator('xpath=//*[@id="firstName"]').fill('ayushi')
});

test('test', async ({ page }) => {
  await page.goto('http://10.82.180.36/Common/Login.aspx');
  await page.locator('#body_txtUserID').fill('donhere');
  await page.locator('#body_txtPassword').fill('don@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Open New Account' }).click();
  
  // Selecting the Savings Account option by value
  // await page.locator('#body_cph_MyAccount_ddlAccountType').selectOption('1');
  // Selecting the Savings Account option by label
  await page.locator('#body_cph_MyAccount_ddlAccountType').selectOption({ label: 'Savings Account' });
  await page.close();
});

// test.only('Lex Test', async({page}) => {

// });