const { test, expect } = require('@playwright/test');
const { POmanager } = require('./pageObjects/POmanager');
const dataset = require('./utils/PlaceorderTestData.json');

test.describe.serial(' Client App Login Tests', () => {
    for (const data of dataset) {
        test(`@web Client App Login for ${data.productName}`, async ({ page }) => {
            const pomManager = new POmanager(page);
            const loginPage = pomManager.getLoginPage();
            await loginPage.gotoUrl();
            await loginPage.validLogin(data.username, data.password);
            const dashboardPage = pomManager.getDashboardPage();
            await dashboardPage.searchProductAddCart(data.productName);
            await dashboardPage.navigateToCart();
            const cartPage = pomManager.getCartPage();
            await cartPage.VerifyProductIsDisplayed(data.productName);
            await cartPage.Checkout();
            const orderReviewPage = pomManager.getOrdersReviewPage();
            await orderReviewPage.searchCountryAndSelect("Ind", "India");
            const orderId = await orderReviewPage.SubmitAndGetOrderId();
            console.log(orderId);
            await dashboardPage.navigateToOrders();
            const ordersHistoryPage = pomManager.getOrdersHistoryPage();
            await ordersHistoryPage.searchOrderAndSelect(orderId);
            expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
        }
    );
    }
});
