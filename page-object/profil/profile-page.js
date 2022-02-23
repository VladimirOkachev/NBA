const faker = require('faker');
const { expect } = require('chai');

class ProfilePage
//extends CommonPage
{
    get profileFirstNameTxt() { return $('body > div.fade.modal.show > div > div > div.modal-body > div.personal-edit-container > div:nth-child(1) > input[type=text]') };
    get profileLastNameTxt() { return $('body > div.fade.modal.show > div > div > div.modal-body > div.personal-edit-container > div:nth-child(2) > input[type=text]') };
    get nbaMenuMyAccountBtn() { return $('[id="nbaMenuMyAccount"]') };
    get ukProfileLocation() { return $('[value="en_GB"]') };
    get profileSaveChangesBtn() { return $('[class="update-btn btn btn-primary"]') };
    get userMenuIcon() { return $('[id="nbaMenuButton"]') };
    get editProfilBtn() { return $('//*[@id="iptvaccount_section_profile"]/div/div/div[1]/div[1]/a') };

    // helper method that changes profile Info to the given parameters
    async changeProfileInfo(firstName, lastName) {
        // change first name, last mane.
        await this.profileFirstNameTxt.setValue(firstName);
        await this.profileLastNameTxt.setValue(lastName);
        // save changes
        await this.profileSaveChangesBtn.click();
    }

    // helper method that verifies that the current Info match the given ones
    async verifyProfileInfo(firstName, lastName) {
        // ensure that you are on the General Info page
        await this.editProfilBtn.click()
        await this.profileFirstNameTxt.waitForDisplayed();
        // verify first name, last name
        expect(await this.profileFirstNameTxt.getAttribute('value')).to.equal(firstName);
        expect(await this.profileLastNameTxt.getAttribute('value')).to.equal(lastName);
    }

    // helper method that swaps the General profile Info
    async swapProfileInfo() {
        // setting up a new username that at least 8 symbols long. This step is necessary to avoid username duplication with another accounts
        let tempUserName = "testUsername" + faker.datatype.number();
        // check if the current Info are equal to one of the options and if not, apply them
        if (await this.profileFirstNameTxt.getAttribute('value') != 'Rick') {
            await this.changeProfileInfo('Rick', 'Test', tempUserName.toLowerCase());
            await this.verifyProfileInfo('Rick', 'Test', tempUserName.toLowerCase());
        }
        // if the current Info are equal the first option, apply the other one
        else {
            await this.changeProfileInfo('Test', 'Doe', tempUserName.toLowerCase());
            await this.verifyProfileInfo('Test', 'Doe', tempUserName.toLowerCase());
        }
    }

}

module.exports = new ProfilePage();