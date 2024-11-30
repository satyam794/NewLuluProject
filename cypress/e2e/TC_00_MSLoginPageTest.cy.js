import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";

describe('Login Page', () => {

    const msloginpage = new MSLoginActions()

    before(() => {

        msloginpage.NavigateToURL()

    })
 
        
    it('Login to Microsoft Site', () => {

        cy.fixture('loginData').then((data) => {
            msloginpage.EnterEmailandClick(data.username)
            msloginpage.EnterPasswordandClick(data.password)
           // msloginpage.ClickYesButton()
            msloginpage.VerifySuccessfulLogintoMicrosoft()
        });
    });
});