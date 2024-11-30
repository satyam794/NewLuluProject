import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import CCHomePageActions from "../pageobjects/pageactions/CCHomePageActions";
import SearchVerifyCustomerAction from "../pageobjects/pageactions/SearchVerifyCustomerAction";

describe.skip('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const callcenterhomepage = new CCHomePageActions()
    const verifycreatedcustomer = new SearchVerifyCustomerAction()

    before(() => {
        msloginpage.NavigateToURL()
    })

it('Verify Created Valid Customer', ()=>{

   cy.fixture('loginData').then((data) => {
    msloginpage.EnterEmailandClick(data.username)
    msloginpage.EnterPasswordandClick(data.password)
    msloginpage.ClickYesButton()
    callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
    cy.wait(15000)
    callcenterloginpage.GotoHomePage();
    cy.wait(10000)
    verifycreatedcustomer.SearchtheCustomer(data.enterprise,data.seacrhguestcustomer);
    cy.wait(15000)
    verifycreatedcustomer.VerifyTheCustomer(data.createcustomeremail)
   })
    });

        it.only('Verify Invalid Customer', () => {
            cy.fixture('loginData').then((data) => {
            msloginpage.EnterEmailandClick(data.username)
            msloginpage.EnterPasswordandClick(data.password)
            msloginpage.ClickYesButton()
            callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
            cy.wait(15000)
            callcenterloginpage.GotoHomePage();
            cy.wait(10000)
            verifycreatedcustomer.SearchtheCustomer(data.enterprise,data.seacrhguestcustomer);
            cy.wait(30000)
            verifycreatedcustomer.verifyCustomerbyEmail(data.seacrhguestcustomer)
            //verifycreatedcustomer.VerifytheInvalidCustomer()
            })
        }) 
    })
