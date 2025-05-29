const {test,expect} = require('@playwright/test');

test('calender Functionality',async({page})=>
{
    const year = "2025";
    const month = "7";
    const date = "25";
    const expectedList = [month,date,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    
    await page.locator(".react-calendar__navigation__label").dblclick();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months button").nth(Number(month-1)).click();
    await page.locator("abbr:has-text('"+date+"')").click();
    const inputs = await page.locator(".react-date-picker__inputGroup input");
    for (let index = 0;index < inputs.length; index++)
    {
       
       const value= await inputs[index].getAttribute("value");
      await  console.log(value);
       expect(value).toEqual(expectedList[index]);
    }

    


})