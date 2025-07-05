const {test,expect} = require('@playwright/test');

test('validations check',async({page})=>
{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//   await page.goto("https://www.google.com/");
//   await page.goBack();//command to go back to previous website in same tab
//   await page.goForward();//command to go back to previous website in same tab after clicking goback

  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();
  //await page.pause();
  page.on('dialog',dialog => dialog.accept());
  await page.locator("#alertbtn").click();  
  const framePage = await page.frameLocator("#courses-iframe");
  await framePage.locator("a[href='lifetime-access']:visible").click();//you can add :visible ahead of your xpath in case there are more than one one element with same xpath but only one is visible and you want to select the visible one.
  await page.pause();
})

test('ScreenShot & visual Comparison',async({page})=>
{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator('#displayed-text').screenshot({path:'PartialScreenshot.png'});
  await page.locator("#hide-textbox").click();
  await page.screenshot({path:'screenshot.png'});//the path will create the screen shot of WHOLE PAGE and store the screenshot in you project
  await expect(page.locator("#displayed-text")).toBeHidden();

})

// test.only('Visual Test' ,async({page})=>
// {
//   await page.goto("https://www.cheapoair.com/");
//   expect(await page.screenshot()).toMatchSnapshot('landing.png');
// });



