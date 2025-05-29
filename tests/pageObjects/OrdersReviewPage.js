const { expect } = require("@playwright/test");

class OrdersReviewPage {
    constructor(page) {
        this.page = page;
        this.country = page.locator("[placeholder*='Country']");
        this.countryDropDown = page.locator(".ta-results");
        this.expiryDate = page.locator(".form__cc select").last();
        this.cvvDetails = page.locator(".form__cc input").nth(1);
        this.submit = page.locator("a:has-text('Place Order')");
        this.orderConfirmationText = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
        this.checkout = page.locator("text=Checkout");

    }


    async searchCountryAndSelect(countryCode,countryName) {
        await this.page.locator("[placeholder*='Country']").pressSequentially(countryCode);
        //await this.countryDropDown.waitFor();
         //const CountryDropDown = await page.locator(".ta-results");
    await this.countryDropDown.waitFor();
    const dropDownValueCount = await this.countryDropDown.locator("button").count();
    for (let i = 0; i < dropDownValueCount; ++i) {
        const text = await this.countryDropDown.locator("button").nth(i).textContent();
         
        if (await text.trim()=== countryName) {
            
             await this.countryDropDown.locator("button").nth(i).click();
             break;
        }
    }
        await this.expiryDate.selectOption("30");
        await this.cvvDetails.fill("666");

    }

    async SubmitAndGetOrderId() {
        await this.submit.click();
        await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
        return await this.orderId.textContent();

    }
    async Checkout()
    {
        await this.checkout.click();
    }

}
module.exports = { OrdersReviewPage };