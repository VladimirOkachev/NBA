/**
 * sub page containing specific selectors and methods for a specific page
 */
 class LoginPage  {
    /**
     * define selectors using getter methods
     */
    get singInBtn() { return $('[id="nbaMenuButton"]')}
    get singInBtn2() { return $('[data-text="Sign in to My NBA Account"]')}
    get inputUsername() { return $('[name="emailAddress"]'); }
    get inputPassword() { return $('[type="password"]'); }
    get btnSubmit() { return $('[value="SIGN IN"]'); }
    get userMenuIcon() { return $('[class="nba-menu-portrait"]'); }
    get loginErrorIndicator() { return $('[class="nba-login-validation-error-right"]'); }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username='okachev1.gym@gmail.com', password='SuperSecretPassword!') {
        await this.singInBtn.click();
        await this.singInBtn2.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await this.userMenuIcon.waitForDisplayed()
    }
    

    
}

module.exports = new LoginPage();
