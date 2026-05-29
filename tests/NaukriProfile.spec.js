const { test, expect } = require('@playwright/test');

const profileHeadLine = "Experienced QA Professional | 12+ Yrs in Manual & Automation Testing | Selenium (C#), Playwright, SpecFlow, Cucumber, API (RestSharp), Appium, Mobile Automation | BDD Frameworks | Immediate Joiner";
const profileHeadlineharmeet = "Reporting & MIS Analyst | Advanced Excel, Power Query, KPI Dashboards | Power BI | SQL (Learning) | Salesforce Reporting | Fraud & Operations Analytics | Ex-Capgemini, American Express, Genpact. | Immediate Joiner";




test('naukri login lucky', async ({ page }) => {
    await page.goto("https://www.naukri.com/");
    const landingPageTitle = await page.title();
    expect(landingPageTitle).toBe("Jobs - Recruitment - Job Search - Employment - Job Vacancies - Naukri.com");
    await page.getByTitle("Jobseeker Login").click();
    await page.getByPlaceholder("Enter your active Email ID / Username").fill("lucky8463@gmail.com");
    await page.getByPlaceholder("Enter your password").fill("gethigh@84");
    await page.locator("button[type='submit']").click();
    // await page.pause();

    const chatBotMessageContainer = await page.locator("chatbot_MessageContainer");
    // await chatBotMessageContainer.waitFor();
    const closeButton = await page.locator(".crossIcon.chatBot.chatBot-ic-cross");
    await chatBotMessageContainer.waitFor({ state: "visible", timeout: 5000 }).catch(() => { });
    await closeButton.waitFor({ state: "visible", timeout: 5000 }).catch(() => { });
    //await page.pause();
    if (await chatBotMessageContainer.isVisible() || await closeButton.isVisible()) {


        await closeButton.click();
        await console.log("Chatbot Clicked");

    }
    else {
        await console.log("No Chatbot Appeared");
    }
    await page.locator("div[class='view-profile-wrapper'] a").click();

    const editHeadline = await page.locator(".widgetHead").first();
    await editHeadline.locator(".edit.icon").click();
    const resumeHeadlineEditBox = await page.locator("#resumeHeadlineTxt");
    resumeHeadlineEditBox.clear();
    resumeHeadlineEditBox.fill(profileHeadLine);
    await page.locator('button.btn-dark-ot[type="submit"]').click();
    //await page.locator("input[value='Update resume']").click();
    const fileInput = page.locator('input[type="file"]');


    await fileInput.nth(0).setInputFiles('resumes/Lucky_Singh_Sansowa_Resume.docx');
    //await page.pause();
    //expect(await page.locator("#attachCVMsgBox")).toContainText("Resume has been successfully uploaded.")

    //    // await fileInputs.nth(1).setInputFiles('D:/Lucky Resume/Lucky Singh.docx');
    //     // await fileInput.setInputFiles('D:/Lucky Resume/Lucky Singh.docx');
    await page.waitForTimeout(5000);

});




test('naukri login harmeet', async ({ page }) => {
    await page.goto("https://www.naukri.com/");
    const landingPageTitle = await page.title();
    expect(landingPageTitle).toBe("Jobs - Recruitment - Job Search - Employment - Job Vacancies - Naukri.com");
    await page.getByTitle("Jobseeker Login").click();
    await page.getByPlaceholder("Enter your active Email ID / Username").fill("Harmeet.sansova@gmail.com");
    await page.getByPlaceholder("Enter your password").fill("Nivu@0709$");
    await page.locator("button[type='submit']").click();
    // await page.pause();

    const chatBotMessageContainer = await page.locator("chatbot_MessageContainer");
    // await chatBotMessageContainer.waitFor();
    const closeButton = await page.locator(".crossIcon.chatBot.chatBot-ic-cross");
    await chatBotMessageContainer.waitFor({ state: "visible", timeout: 5000 }).catch(() => { });
    await closeButton.waitFor({ state: "visible", timeout: 5000 }).catch(() => { });
    //await page.pause();
    if (await chatBotMessageContainer.isVisible() || await closeButton.isVisible()) {


        await closeButton.click();
        await console.log("Chatbot Clicked");

    }
    else {
        await console.log("No Chatbot Appeared");
    }
    await page.locator("div[class='view-profile-wrapper'] a").click();

    const editHeadline = await page.locator(".widgetHead").first();
    await editHeadline.locator(".edit.icon").click();
    const resumeHeadlineEditBox = await page.locator("#resumeHeadlineTxt");
    resumeHeadlineEditBox.clear();
    resumeHeadlineEditBox.fill(profileHeadlineharmeet);
    await page.locator('button.btn-dark-ot[type="submit"]').click();
    //await page.locator("input[value='Update resume']").click();
    const fileInput = page.locator('input[type="file"]');


    await fileInput.nth(0).setInputFiles('resumes/Harmeet_Sansova_Data_Analyst_MIS_Reporting.pdf');
    //await page.pause();
    //expect(await page.locator("#attachCVMsgBox")).toContainText("Resume has been successfully uploaded.")

    //    // await fileInputs.nth(1).setInputFiles('D:/Lucky Resume/Lucky Singh.docx');
    //     // await fileInput.setInputFiles('D:/Lucky Resume/Lucky Singh.docx');
    // await page.waitForTimeout(5000);

});




