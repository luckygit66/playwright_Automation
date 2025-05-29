const { When, Then, Given } = require("@cucumber/cucumber")
const { expect } = require('@playwright/test');
const playwright=require('@playwright/test');
const { POmanager } = require('../../tests/pageObjects/POmanager');


Given('A login to Ecommerce application with {string} and {string}',{timeout : 100*1000}, async function (username, password) {
    // const browser = await playwright.chromium.launch({headless:false});
    // const context = await browser.newContext();
    // const page = await context.newPage();
    // this. pomManager = new POmanager(page);
    const loginPage = this.pomManager.getLoginPage();
    await loginPage.gotoUrl();
    await loginPage.validLogin(username, password);
});



When('Add {string} to cart', async function (productName) {
    this.dashboardPage = this.pomManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName);
    await this.dashboardPage.navigateToCart();
});



Then('Verify {string} is displayed in the Cart', async function (productName) {
    const cartPage = this.pomManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});



When('Enter valid details and place the Order', async function () {
    const orderReviewPage = this.pomManager.getOrdersReviewPage();
    await orderReviewPage.searchCountryAndSelect("Ind", "India");
    this.orderId = await orderReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});



Then('Verify order is present in the Orderhistory', async function () {
    await this.dashboardPage.navigateToOrders();
    const ordersHistoryPage = this.pomManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});

 Given('A login to Ecommerce2 application with {string} and {string}',{timeout : 100*1000}, async function (username, password) {
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     await this.page.locator("#username").fill(username);
  await this.page.locator("[type='password']").fill(password);
  await this.page.locator("#signInBtn").click();
  
});


Then('Verify error Message is displayed', async function () {
       console.log(await this.page.locator("[style*='block']").textContent());
  await expect(this.page.locator("[style*='block']")).toContainText('Incorrect');    
           
});