const {page}=require('@playwright/test')

class APLandingPage
{
    constructor(page)
    {
        this.page=page;
        this.brand = page.locator("a[href='/brand_products/Madame']");
        this.Product= page.locator("ul[class='nav nav-pills nav-justified']");
    }

    async SelectProductFromList()
    {    
    await this.brand.click();
    await this.Product.last().click();
    }
    
}

module.exports = {APLandingPage};