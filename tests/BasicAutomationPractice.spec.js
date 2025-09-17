const { test } = require('@playwright/test');
const { Console } = require('console');


test('Testing Radio Button ', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    if (!(await !page.locator("input[value='radio1']").isChecked())) {
        await page.pause();
        await page.locator("input[value='radio1']").click();
        await page.pause();
    }
});

test('Testing DropDown Selection', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator("#dropdown-class-example").selectOption("Option1");
});

test('Switch To Child Window', async ({ page, context }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");//#openwindow

    const [newPage] = await Promise.all([context.waitForEvent('page'), page.click('#openwindow')]);
    await newPage.waitForLoadState();
    console.log(await newPage.title());

})

test('Handle Multiple Child Windows', async ({ page, context }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#opentab").click();
    await page.waitForTimeout(1500);
    const pages = await context.pages();
    console.log('Total Tabs :: ', pages.length);
    const SecondPage = pages[1];
    console.log(await SecondPage.title());

});

test('accept WindowAlerts', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator("#alertbtn").click();
    await page.on('dialog', dialog => dialog.accept());

})

test('Verify element is Hidden', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator("#displayed-text").isVisible();
    await page.locator("#hide-textbox").click();
    await page.locator("#displayed-text").isHidden();
})

test('work inside a Frame Locator',async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
const framesPage =  page.frameLocator("#courses-iframe");
await page.pause();//used here for testing purspose
await framesPage.locator("li a[href$='lifetime-access']:visible").click();
await page.pause();//used here for testing purspose
})

test.only('MouseHover', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');   
    await page.locator('#mousehover').hover(); 
})
