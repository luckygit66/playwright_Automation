const { test, expect } = require('@playwright/test');

const profileHeadLine = "Experienced Testing Professional with over 10 Years in Manual & Automation Testing | Proficient in Playwright, Selenium, C#, JavaScript, SpecFlow, Cucumber, BDD, API Testing (RestSharp), Appium, Mobile Automation, Playwright | Immediate Joiner";

test('naukri login', async ({ page }) => {
    await page.goto("https://www.naukri.com/");
    const landingPageTitle = await page.title();
    expect(landingPageTitle).toBe("Jobs - Recruitment - Job Search - Employment - Job Vacancies - Naukri.com");
    await page.getByTitle("Jobseeker Login").click();
    await page.getByPlaceholder("Enter your active Email ID / Username").fill("lucky8463@gmail.com");
    await page.getByPlaceholder("Enter your password").fill("gethigh@84");
    await page.locator("button[type='submit']").click();

    const closeButton = await page.locator(".crossIcon.chatBot.chatBot-ic-cross");
    if (await closeButton.isVisible()) {
        await closeButton.click();
    }
    else
    {
       console.log("No Chatbot Appeared");
    }    
    await page.locator(".nI-gNb-drawer__icon").click();
    await page.locator(".nI-gNb-info__sub-link").click();    
    const editHeadline =await page.locator(".widgetHead").first();
    await editHeadline.locator(".edit.icon").click();
    const resumeHeadlineEditBox =await page.locator("#resumeHeadlineTxt");
    resumeHeadlineEditBox.clear();
    resumeHeadlineEditBox.fill(profileHeadLine);
    await page.locator('button.btn-dark-ot[type="submit"]').click();
    // await page.waitForTimeout(5000);


    





}



);


