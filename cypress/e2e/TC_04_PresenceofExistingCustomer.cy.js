    import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
    import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
    import PresenceofExistingCustomerActions from "../pageobjects/pageactions/PresenceofExistingCustomerActions";

    describe('Home Page', () => {

    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const presenceofcustomer = new PresenceofExistingCustomerActions()

    before(() => {
        msloginpage.NavigateToURL()
    })

    it.only('Search Existing Guest Using Email', ()=>{

        cy.fixture('loginData').then((data) => {
        msloginpage.EnterEmailandClick(data.username)
        msloginpage.EnterPasswordandClick(data.password)
       // msloginpage.ClickYesButton()
      //  msloginpage.VerifySuccessfulLogintoMicrosoft()
        
       // callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
        callcenterloginpage.GotoHomePage();
        
        presenceofcustomer.PresenceExistingCustomerFromAdvanceSearchByEmail(data.enterprise,data.createcustomeremail)
       
                                })
                        });
        });
