import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import CreateOrderFromClosetActions from "../pageobjects/pageactions/CreateOrderFromClosetActions";


describe.skip('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const createorder = new CreateOrderFromClosetActions()

    before(() => {
        msloginpage.NavigateToURL()
    })

    
it('Create Guest Profile', ()=>{

    cy.fixture('loginData').then((data) => {
        msloginpage.EnterEmailandClick(data.username)
        msloginpage.EnterPasswordandClick(data.password)
       // msloginpage.ClickYesButton()
        msloginpage.VerifySuccessfulLogintoMicrosoft()
        callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
        callcenterloginpage.GotoHomePage();

        createorder.GoToCustomerPage(data.enterprise, data.createcustomeremail)
        cy.wait(15000)
        createorder.GoToClosetTab()
    })
})
})