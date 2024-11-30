import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import ModifyExistingCustomerShippngAddressActions from "../pageobjects/pageactions/ModifyExistingCustomerShippingAddressActions";

describe('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const modifyshippingaddress = new ModifyExistingCustomerShippngAddressActions()

    before(() => {
        msloginpage.NavigateToURL()
    })

it('Modify Existing Guest Customer Shipping Address', ()=>{

   cy.fixture('loginData').then((data) => {
    msloginpage.EnterEmailandClick(data.username)
    msloginpage.EnterPasswordandClick(data.password)
   // msloginpage.ClickYesButton()
  //  msloginpage.VerifySuccessfulLogintoMicrosoft()
    
   // callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
   cy.wait(5000)
    callcenterloginpage.GotoHomePage();
    
    modifyshippingaddress.SearchtheCustomer(data.enterprise, data.createcustomeremail);
    modifyshippingaddress.AddNewShippingAddress(data.modifyaddresstype, data.modifyfname, data.modifylname, data.modifyphone, data.modifyemailid, data.modifyaddress1, data.modifyaddress2, data.modifycity, data.modifyzipcode, data.modifycountry, data.modifystate)
    modifyshippingaddress.EditNewShippingAddress(data.modifyaddresstype, data.modifyfname, data.modifylname, data.modifyphone, data.modifyemailid, data.modifyaddress1, data.modifyaddress2, data.modifycity, data.modifyzipcode, data.modifycountry, data.modifystate)
   
         })
    });
})
