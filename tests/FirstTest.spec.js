const { test, expect } = require('@playwright/test');


test('First Playwright test', async ({ page }) => {
  //   const context = await browser.newContext();
  //   const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("[type='password']").fill("learning");
  await page.locator("#signInBtn").click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');
  const username = page.locator("#username");
  const password = page.locator("[type='password']");
  const signIn = page.locator("#signInBtn");
  await username.fill("");
  await username.fill("rahulshettyacademy");
  await signIn.click();
  const cardTitles = page.locator(".card-body a");
  console.log(await cardTitles.nth(0).textContent());
  console.log(await page.title());
  console.log(await cardTitles.allTextContents());
});

