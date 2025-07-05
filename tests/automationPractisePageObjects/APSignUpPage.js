const{expect} = require('@playwright/test')

class APSignUpPage {
    constructor(page) {
        this.page = page;
        this.accountInformationlabel = page.locator("div.login-form h2:has-text('Enter Account Information')");
        this.createPasswordField = page.locator("#password");
        this.daysField = page.locator("#days");
        this.monthField = page.locator("#months");
        this.yearsField = page.locator("#years");
        this.newsletterCheckBox = page.locator("#newsletter");
        this.optionCheckBox = page.locator("#optin");
        this.firstNametxtBox = page.locator("#first_name");
        this.lastNameTextBox = page.locator("#last_name");
        this.companyTextBox = page.locator("#company");
        this.address1TextBox = page.locator("#address1");
        this.address2TextBox = page.locator("#address2");
        this.countryDropDown = page.locator("#country");
        this.stateTextBox = page.locator("#state");
        this.citytextBox = page.locator("#city");
        this.zipcodetextBox = page.locator("#zipcode");
        this.mobileTextBox = page.locator("#mobile_number");
        this.createAccountButton = page.locator("button[data-qa='create-account']");
    }


    async fillSignUpDetailsForm() {
         //await expect(page.locator("div.login-form h2:has-text('Enter Account Information')")).toContainText("Enter Account Information");
        await expect(this.accountInformationlabel).toContainText("Enter Account Information");
        await this.createPasswordField.fill("getHigh@5454");
        await this.daysField.selectOption("12");
        await this.monthField.selectOption("June");
        await this.yearsField.selectOption("1984");
        await this.newsletterCheckBox.check();
        await this.optionCheckBox.check();
        await expect(this.newsletterCheckBox).toBeChecked();
        await this.firstNametxtBox.fill("Lucky");
        await this.lastNameTextBox.fill("Sansova");
        await this.companyTextBox.fill("ABCL");
        await this.address1TextBox.fill("6656 GF");
        await this.address2TextBox.fill("6656 GF");
        await this.countryDropDown.selectOption("India");
        await this.stateTextBox.fill("Haryana");
        await this.citytextBox.fill("Faridabad");
        await this.zipcodetextBox.fill("121001");
        await this.mobileTextBox.fill("9911892292");
        await this.createAccountButton.click();
    }
}

module.exports={APSignUpPage};