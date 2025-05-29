const { Before, After, AfterStep, Status } = require("@cucumber/cucumber");
const playwright=require('@playwright/test');
const { POmanager } = require('../../tests/pageObjects/POmanager');
const { Console } = require("console");

Before(async function ()
{
    const browser = await playwright.chromium.launch({headless:false});
        const context = await browser.newContext();
        this.page = await context.newPage();
        this. pomManager = new POmanager(this.page);
})

After(async function ()
{
    console.log("I am the last to execute")
})

AfterStep(async function({result})
{
    if(result.status === Status.FAILED)
    {
        await this.page.screenshot({path:'screenshot1.png'});
    }
})