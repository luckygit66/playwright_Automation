const { page, expect } = require('@playwright/test')

class APProductDetailsPage {
    constructor(page) {
        this.page = page;
        this.brand = page.locator("div[class='product-details'] p");
        this.productName = "Madame";
        this.reviewNameBox = page.locator("#name");
        this.reviewEmailBox = page.locator("#email");
        this.reviewMessageBox = page.locator("#review");
        this.submitButton = page.locator("#button-review");
        this.reviewSubmitMessageBox = page.locator("div[class='alert-success alert'] span");
        this.quantityTextBox = page.locator("#quantity");
        this.AddToCartButton = page.locator("button[type='button']");
        this.popUpViewCartLink = page.locator(".modal-content").locator("//u[normalize-space()='View Cart']");

    }


    async WriteAndSaveReview() {
        const brandName = await this.brand.nth(3).textContent();
        console.log("Brand Name is :: " + brandName);
        if (brandName.includes(this.productName)) {
            await this.reviewNameBox.fill("Test");
            await this.reviewEmailBox.fill("Test@gmail.com");
            await this.reviewMessageBox.fill("Its an Awesome product");
            await this.submitButton.click();
            expect(await this.reviewSubmitMessageBox).toBeVisible();
            console.log(await this.reviewSubmitMessageBox.textContent());
        }


    }

    async UpdateQuantityAndAddToCart() {

        await this.quantityTextBox.waitFor({ state: 'visible' });
        await this.quantityTextBox.clear();       
        await this.quantityTextBox.fill("2");
        await this.AddToCartButton.click();
        await this.popUpViewCartLink.click();
    }
}

module.exports = { APProductDetailsPage };