const { expect } = require("@playwright/test");
class APLoginPage {
    constructor(page) {
        this.page = page;
        this.signupForm = page.locator("div[class='signup-form'] h2");
        this.pageTitle = 'Automation Exercise';
        this.signUpName = 'Tester';
        this.signUpEmail = 'Luckytest11@gmail.com';
        this.nameTextBox = page.locator("input[placeholder='Name']");
        this.emailTextBox = page.locator("input[data-qa='signup-email']");
        this.signUpButton = page.locator("button[data-qa='signup-button']");

    }



    async fillupSignUpForm() {
        await this.page.waitForSelector("div.signup-form h2", { state: 'visible' });
        expect(await this.signupForm).toBeVisible();
        await this.nameTextBox.fill(this.signUpName);
        await this.emailTextBox.fill(this.signUpEmail);
        await this.signUpButton.click();
    }



}

module.exports = { APLoginPage };