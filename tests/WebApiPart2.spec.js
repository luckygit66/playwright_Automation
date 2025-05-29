const { test, expect } = require('@playwright/test');
let webContext;

test.beforeAll(async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("lucky8463@gmail.com");
    await page.locator("#userPassword").fill("GetHigh@8463");
    await page.locator("#login").click();
    console.log(await page.title());
    await page.waitForLoadState('networkidle');
    await context.storageState({path : 'state.json'});//It will capture all the data in storage and then save it in json
    webContext= await browser.newContext({storageState:'state.json'});
})

test('Browser Context - validate Error Login', async () => {

    const productName = "ADIDAS ORIGINAL";
    const page = await webContext.newPage()
    await page.goto("https://rahulshettyacademy.com/client/");
    const products = await page.locator(".card-body");
   
    
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const ProductCount = await products.count()
    for (let i = 0; i < ProductCount; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*=cart]").click();
    await page.locator("div li").first().waitFor();
    const productIsVisible = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(productIsVisible).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind");


    const CountryDropDown = await page.locator(".ta-results");
    await CountryDropDown.waitFor();
    const dropDownValueCount = await CountryDropDown.locator("button").count();
    for (let i = 0; i < dropDownValueCount; ++i) {
        const text = await CountryDropDown.locator("button").nth(i).textContent();
        if (text === " India") {
            await CountryDropDown.locator("button").nth(i).click();
            break;
        }
    }

    await page.locator(".form__cc select").last().selectOption("30");
    await page.locator(".form__cc input").nth(1).fill("666");
    await page.locator("a:has-text('Place Order')").click();
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    //await page.pause();
    await page.locator("[routerlink*='myorders']").first().click();
    await page.locator("tbody").waitFor({ state: "visible" });
    const rows = await page.locator("tbody tr");
    const orderIdRowCount = await page.locator("tbody tr").count();
    console.log(` Number of order rows: ${orderIdRowCount}`);
    
    for (let i = 0; i < orderIdRowCount; ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();

        if (orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            await console.log("Clicked Order Details");
            //await page.pause();
            break;
        }

    }







})