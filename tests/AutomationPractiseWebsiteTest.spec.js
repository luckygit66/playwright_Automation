const { test, expect } = require('@playwright/test');
const { APPomManager } = require('./automationPractisePageObjects/APPomManager');
const pageTitle = 'Automation Exercise';
const signUpName = 'Tester';
const signUpEmail = 'Luckytest7@gmail.com';


test('Register User', async ({ page }) => {

    
    await page.goto('https://automationexercise.com/');
    const appomManager = new APPomManager(page);
    expect(await page.title()).toContain(pageTitle);
    await page.locator("a[href='/login']").click();
    const apLoginPage = appomManager.getApLoginPage();
    await apLoginPage.fillupSignUpForm();
    console.log(await page.title());
    const apsignupPage = appomManager.getApSignupPage();
    apsignupPage.fillSignUpDetailsForm();
    await page.locator(".btn.btn-primary").click();
    await expect(page.locator("li:nth-child(10) a:nth-child(1)")).toContainText("Tester");
    await page.locator("a[href='/delete_account']").click();
    console.log(await page.title());
});

test('Verify All Products and product detail page', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    expect(await page.title()).toContain(pageTitle);
    await page.locator("a[href='/products']").click();
    var productsList = await page.locator("div.single-products");
    const productCount = await productsList.count();
    for (let i = 0; i < productCount; i++) {
        await expect(productsList.nth(i)).toBeVisible();
    };
    await page.locator("a:has-text('View Product')").first().click();

}
);

test('Download Invoice after purchase order', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    expect(await page.title()).toContain(pageTitle);
    await page.locator("a:has-text('Add to cart')").first().click();
    const modalPopup = page.locator(".modal-content");
    await modalPopup.waitFor({ state: 'visible' });
    await modalPopup.locator("a:has-text('View Cart')").click();
    await page.keyboard.press('PageDown');
});


test('Write Review For Madame Product', async ({ page }) => {
   
  await page.goto('https://automationexercise.com/');
  expect(await page.title()).toContain(pageTitle);
  await page.pause()
    const appomManager = new APPomManager(page);
   const apLandingPage = appomManager.getApLandinPage()
  await apLandingPage.SelectProductFromList();
   const apProductDetailsPage =  appomManager.getApProductDetailsPage();
   await apProductDetailsPage.WriteAndSaveReview();    
});


test('Update the quantity and Add To Cart', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    expect(await page.title()).toContain(pageTitle);


    await page.locator("a[href='/brand_products/Madame']").click();
    await page.locator("ul[class='nav nav-pills nav-justified']").last().click();
    console.log(await page.title());
    await page.locator("#quantity").clear();
    await page.locator("#quantity").fill("2");
    await page.locator("button[type='button']").click();
    await page.locator(".modal-content").locator("//u[normalize-space()='View Cart']").click();
    console.log(await page.title());
    await expect(page.locator(".disabled")).toHaveText("2");
});

test.only('Update the quantity ', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    expect(await page.title()).toContain(pageTitle);
    
    const appomManager = new APPomManager(page);
    const apLandingPage = appomManager.getApLandinPage()
    await apLandingPage.SelectProductFromList();
    //await page.pause();
    const apProductDetailsPage = appomManager.getApProductDetailsPage();
    await apProductDetailsPage.UpdateQuantityAndAddToCart();
    const apCartPage = appomManager.getApCartPage()
    
    await apCartPage.getProductQuantity();
});


