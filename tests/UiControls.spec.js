const { test, expect } = require('@playwright/test');

test('uiControl', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator("#username");
    const password = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const dropDown = page.locator("select.form-control");
    await page.locator("#username").fill("rahulshetty");
    await password.fill("learning");
    await dropDown.selectOption('Consultant');
    await page.locator('.radiotextsty').last().click();
    await page.locator('okayBtn').click();
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    await page.locator("#signInBtn").click();

});

test('Child window handling', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all([context.waitForEvent('page'), documentLink.click()]);
    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);
    const username = page.locator("#username");
    await username.fill(domain);
});

