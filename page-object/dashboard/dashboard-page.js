const { expect } = require('chai');
class DashboardPage {
    get myAccountBtn() { return $('[id="nbaMenuMyAccount"]'); };
    get userMenuIcon() { return $('[class="nba-menu-portrait"]') };
    get logOutBtn() { return $('[data-id="nba:navigation:nba-sign-out:link"]') };
    get signInBtn() { return $('[class="nba-menu-button"]') };
    get editProfilBtn() { return $('//*[@id="iptvaccount_section_profile"]/div/div/div[1]/div[1]/a') };
    get allStarsTopMenuItem() { return $$('[class="SubNavItem_subnavLink__2SIkc"]') };
    get teamsBtn() { return $('span=Teams') }
    get chicagoBullsTitle() { return $('//*[@id="__next"]/div[2]/div[3]/section/div/div[2]/div[2]/div[2]/div[1]') }
    get allStarsBtn() { return $('span=All-Star') }


    // helper method that logs user out
    async logOut() {
        // open user menu
        await this.userMenuIcon.click();
        // click Log Out and verify that user has been taken to a home page
        await this.logOutBtn.waitForClickable();
        await this.logOutBtn.click();
        await this.signInBtn.waitForDisplayed()
        browser.waitUntil(
            () => browser.getUrl() == browser.config.baseUrl + '/'
        )
    };

    async openProfileMyProfileEdit() {
        await this.userMenuIcon.click()
        await this.myAccountBtn.click();
        await this.editProfilBtn.click()
    };

    async navigareToAllStarsTopMenu(menuItemText) {
        await this.allStarsBtn.click()
        const meniItem = {};
        browser.waitUntil(() => {
            return this.allStarsTopMenuItem.map((elem) => elem.isClickable()).length > 3;

        }, 1000, 'bottom menu items were not visible');
        await this.allStarsTopMenuItem.forEach(element => {
            meniItem[element.getText()] = element;
        });
        meniItem[menuItemText].click()

    }
    async navigateToTeamsSect() {
        await this.teamsBtn.waitForClickable()
        await this.teamsBtn.click()
    };
};


module.exports = new DashboardPage();