const { test, expect } = require('@playwright/test');
const {APPomManager}=require('./automationPractisePageObjects/APPomManager');
const pageTitle = 'Automation Exercise';
const signUpName = 'Tester';
const signUpEmail = 'Luckytest7@gmail.com'

test('Register User', async ({ page }) => {

 const appomManager= new APPomManager(page);
    await page.goto('https://automationexercise.com/');

    expect(await page.title()).toContain(pageTitle);
    await page.locator("a[href='/login']").click();
    const apLoginPage = appomManager.getApLoginPage();
    await apLoginPage.fillupSignUpForm();

    console.log(await page.title());

    const apsignupPage= appomManager.getApSignupPage();
    apsignupPage.fillSignUpDetailsForm();

  

    await page.locator(".btn.btn-primary").click();
    await expect(page.locator("li:nth-child(10) a:nth-child(1)")).toContainText("Tester");
    await page.locator("a[href='/delete_account']").click();
    console.log(await page.title());
    



   


});

test('Verify All Products and product detail page',async({page})=>
{
    await page.goto('https://automationexercise.com/');
    expect(await page.title()).toContain(pageTitle);
    await page.locator("a[href='/products']").click();
    var productsList = await page.locator("div.single-products");
    
    const productCount = await productsList.count();
    for(let i=0;i<productCount;i++)
    {
        await expect(productsList.nth(i)).toBeVisible();
       
    };
    
    await page.locator("a:has-text('View Product')").first().click();
    
}
);

test('Download Invoice after purchase order',async({page})=>
    {
    await page.goto('https://automationexercise.com/');
    expect(await page.title()).toContain(pageTitle);
    await page.locator("a:has-text('Add to cart')").first().click();
    const modalPopup = page.locator(".modal-content");
    await modalPopup.waitFor({state:'visible'});
    await modalPopup.locator("a:has-text('View Cart')").click();
    
    await page.keyboard.press('PageDown');
    

    }

);