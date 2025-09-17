const { page,expect } = require('@playwright/test');
class APCartPage {
    constructor(page) {
        this.page = page
       
        this.cartQuantity = page.locator(".disabled");

    }


    async getProductQuantity() {
       
        console.log(await this.page.title());
        await expect( this.cartQuantity).toHaveText("2");

    }
}

module.exports = { APCartPage }