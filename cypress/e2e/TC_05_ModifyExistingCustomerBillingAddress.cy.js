import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import ModifyExistingCustomerBillingAddressActions from "../pageobjects/pageactions/ModifyExistingCustomerBillingAddressActions";

describe('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const modifybillingaddress = new ModifyExistingCustomerBillingAddressActions()

    before(() => {
        msloginpage.NavigateToURL()
    })

it('Modify Existing Guest Customer Address', ()=>{

   cy.fixture('loginData').then((data) => {
    msloginpage.EnterEmailandClick(data.username)
    msloginpage.EnterPasswordandClick(data.password)
   // msloginpage.ClickYesButton()
   // callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
    cy.wait(5000)
    callcenterloginpage.GotoHomePage();
    cy.wait(10000)
    modifybillingaddress.SearchtheCustomer(data.enterprise, data.createcustomeremail);
    cy.wait(15000)
    modifybillingaddress.AddNewBillingAddress(data.addresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
    modifybillingaddress.EditNewBillingAddress(data.addresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
   
    cy.wait(10000)
     })
    });
})
