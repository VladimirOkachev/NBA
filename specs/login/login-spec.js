const LoginPage = require('../../page-object/login/login-page.js');
const DashboardPage = require('../../page-object/dashboard/dashboard-page.js');

describe('My Login application', () => {
    it('user should login with valid credentials', async () => {
        // log in using test account creds
        await LoginPage.login();
    });

    it('user should log out ', async () => {
        // log out
        await DashboardPage.logOut()
    });

    it('user should not be able to log in without email addres and password', async () => {
        // navigate to Login page 
       await LoginPage.singInBtn.click();
       await LoginPage.singInBtn2.click();
        // click SignIn without any input
       await LoginPage.btnSubmit.click();
        // verify red frame around the input BOX
       await LoginPage.loginErrorIndicator.waitForDisplayed();
});
})

