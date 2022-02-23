const { expect } = require('chai');
const LoginPage = require('../../page-object/login/login-page.js');
const DashboardPage = require('../../page-object/dashboard/dashboard-page.js');

describe('My Login application', () => {
    it.skip('user should ', async () => {
        // log in using test account creds
        await LoginPage.login();
        await DashboardPage.navigareToAllStarsTopMenu('Video');

    });
    it('user should find team Chicago bulls ', async () => {
        // log in using test account creds
        await LoginPage.login();
        // navigate to teams 
        await DashboardPage.navigateToTeamsSect();
        // verify chicago bulls team
        const name =  await DashboardPage.chicagoBullsTitle.getText()
        expect(name).to.equal('Chicago Bulls\nProfile\nStats\nSchedule\nTickets');
        
    });
})