const {APLoginPage}=require('./APLoginPage');
const {APSignUpPage}=require('./APSignUpPage');
const {APLandingPage}=require('./APLandingPage');
const{APProductDetailsPage}=require('./APProductDetailsPage');
const{APCartPage}= require('./APCartPage');


class APPomManager {
        constructor(page) {
            this.page = page;
            this.apLoginPage = new APLoginPage(this.page);
            this.apSignupPage = new APSignUpPage(this.page);
            this.apLandingPage =new APLandingPage(this.page);
            this.apProductDetailsPage= new APProductDetailsPage(this.page)
            this.apCartPage= new APCartPage(this.page)

        }


    getApLoginPage() {
        return this.apLoginPage;
    }


    getApSignupPage() {
        return this.apSignupPage;
    }

    getApLandinPage()
    {
        return this.apLandingPage;
    }

    getApProductDetailsPage()
    {
        return this.apProductDetailsPage;
    }
    getApCartPage()
    {
       return this.apCartPage
    }

}

module.exports={APPomManager}