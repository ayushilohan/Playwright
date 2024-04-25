const {test, expect} = require('@playwright/test');

test('Browser Context Playwright test', async ({browser})=> // fixture- kind of global variable of project
{
    // chrome - plugin/cookie
    const context = await browser.newContext(); // new browser instance
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");
    await page.goto('https:rahulshettyacademy.com/loginpagePractise/');
    // css
    await userName.fill("rahulshetty"); // locate an element on page
    await page.locator("[type='password']").fill("learning");
    await signIn.click();

    console.log(await page.locator("[style*='block']").textContent());

    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();

    console.log(await cardTitles.nth(0).textContent())
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

})

test('Page Playwright test', async({page})=>{ // run this test only
    await page.goto('https://www.youtube.com/')
    // get Title - assertion
    console.log(await page.title())
    await expect(page).toHaveTitle("Youtube") 
    await page.goto('https://www.facebook.com/')
})

