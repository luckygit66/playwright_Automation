const {APLoginPage}=require('./APLoginPage');
const {APSignUpPage}=require('./APSignUpPage');


class APPomManager {
        constructor(page) {
            this.page = page;
            this.apLoginPage = new APLoginPage(this.page)
            this.apsignupPage = new APSignUpPage(this.page);
        }


    getApLoginPage() {
        return this.apLoginPage;

    }


    getApSignupPage() {
        return this.apsignupPage;
    }
}

module.exports={APPomManager}