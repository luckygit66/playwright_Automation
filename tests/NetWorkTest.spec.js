const {test, expect, request} = require('@playwright/test');
const {APiUtils} = require('../tests/utils/APiUtils');
const loginPayLoad = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};
const fakePayloadOrders = {data : [],message:"No Product in Cart"};
 
let response;
test.beforeAll( async()=>
{
   const apiContext = await request.newContext();
   const apiUtils = new APiUtils(apiContext,loginPayLoad);
   response =  await apiUtils.createOrder(orderPayLoad);
 
})
 
 
//create order is success
test('@API Place the order', async ({page})=>
{ 
    page.addInitScript(value => {
 
        window.localStorage.setItem('token',value);
    }, response.token );

    await page.waitForTimeout(3000);
await page.goto("https://rahulshettyacademy.com/client");
 await page.route("https://rahulshettyacademy.com/api/ecom/user/get-cart-count/*",
    async route=>
    {
        //hete we will intercept the response - Api Gives Response -{Fake Response}-we send it to Browser->using response browser will render data on frontend
     const response = await page.request.fetch(route.request());
     let body = JSON.stringify(fakePayloadOrders);
     route.fulfill(
        {
            response,
            body,
        });
     
    });
 
 await page.locator("button[routerlink*='myorders']").click();
 await page.pause();
 //await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/user/get-cart-count/*");
 await page.locator(".mt-4").textContent();
 

});
 
