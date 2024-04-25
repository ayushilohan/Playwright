const {test} = require('@playwright/test');

test('New Registration', async({page})=>{
    await  page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('.login-wrapper-footer-text').click();
    await page.locator('#firstName').fill("Ayushi")
    await page.locator('#userEmail').fill("ayushiv030@gmail.com")
    await page.locator('#userMobile').fill('8595108380');
    await page.locator('#userPassword').fill("Ayushi123@");
    await page.locator('#confirmPassword').fill("Ayushi123@");
    await page.locator("[value='Register']").click();
})


test('@Web Client App login', async ({ page }) => {
    const email = "anshika@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
  
 })