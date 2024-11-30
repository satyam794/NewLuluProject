import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import CustomerCreateAdvanceActions from "../pageobjects/pageactions/CreateCustomerAdvanceActions";
import CCHomePageActions from "../pageobjects/pageactions/CCHomePageActions";

describe.skip('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const createcustomeradvancesearch = new CustomerCreateAdvanceActions()
    const callcenterhomepage = new CCHomePageActions()
    

    before(() => {
        msloginpage.NavigateToURL()
    })

it('Create Guest Profile from Advance Search', ()=>{

    cy.fixture('loginData').then((data) => {
        msloginpage.EnterEmailandClick(data.username)
        msloginpage.EnterPasswordandClick(data.password)
        msloginpage.ClickYesButton()
        callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
        cy.wait(15000)
        createcustomeradvancesearch.createCustomerfromAdvanceSearch(data.enterprise,data.createcustomerfname,data.createcustomerlname,data.createcustomeremail,data.createcustomerphone)
              
    })
            });
        });
