import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import CCHomePageActions from "../pageobjects/pageactions/CCHomePageActions";
import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";

describe('Home Page', () => {
    
    const msloginpage = new MSLoginActions() 
    const callcenterloginpage = new CallCenterActions()
    const callcenterhomepage = new CCHomePageActions()
    
    before(() => {
        msloginpage.NavigateToURL()
    })
 

it('Create Guest Profile from Home Page', ()=>{

   cy.fixture('loginData').then((data) => {
    msloginpage.EnterEmailandClick(data.username)
    msloginpage.EnterPasswordandClick(data.password)
   // msloginpage.ClickYesButton()
   // msloginpage.VerifySuccessfulLogintoMicrosoft()
    //callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
    callcenterloginpage.GotoHomePage();
    callcenterhomepage.CreateGuestCustomerProfile(data.enterprise, data.createcustomerfname,data.createcustomerlname,data.createcustomeremail,data.createcustomerphone);
    callcenterhomepage.VerifyGuestProfile(data.createcustomeremail)
            })
        });
    })
