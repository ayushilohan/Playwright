const {test, expect} = require('@playwright/test');

test('UI Controls', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult"); // selecting an option from the drop down list
    await page.locator(".radiotextsty").nth(1).click(); // selecting radio button by clicking on it
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked(); // assertion to check if last radio button is checked or not

    await page.locator("#terms").click();
    await expect( page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect( await page.locator("#terms").isChecked()).toBeFalsy(); // there is no method for uncheck so we will be using ischecked 
    // toBeTruthy() for true

})

test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
