import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import MSLoginPageAction from "../pageobjects/pageactions/MSLoginActions"

describe('Login Page', () => {

    const msloginpage = new MSLoginPageAction()
    const callcenterloginpage = new CallCenterActions()

    before(() => {

        msloginpage.NavigateToURL()

    })
 


        
    it('Login to Call Centre', () => {

        cy.fixture('loginData').then((data) => {
            msloginpage.EnterEmailandClick(data.username)
            msloginpage.EnterPasswordandClick(data.password)
          //  msloginpage.ClickYesButton()
          //  msloginpage.VerifySuccessfulLogintoMicrosoft()
            
           // callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
            callcenterloginpage.GotoHomePage();
        });
    });
});