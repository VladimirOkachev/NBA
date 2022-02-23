const ProfilePage = require('../../page-object/profil/profile-page.js');
const LoginPage = require('../../page-object/login/login-page.js');
const DashboardPage = require('../../page-object/dashboard/dashboard-page.js');
const { expect } = require('chai');
describe('Profile', () => {
    it('User should be able to add and save basic information (first name, last name)', async () => {
        // log in using test account creds
        await LoginPage.login();
        // Open prifile => my profile
        await DashboardPage.openProfileMyProfileEdit()
        // swap profile settings and verify that they were saved
        await ProfilePage.swapProfileInfo();
    })

})
