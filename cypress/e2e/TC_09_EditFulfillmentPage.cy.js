import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import EditfulfillPmentPageActions from "../pageobjects/pageactions/EditFulfillmentPageActions";

describe('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const editffpage = new EditfulfillPmentPageActions()
    
    before(() => {
        msloginpage.NavigateToURL()
    })

    
it('Edit Fulfillmet Page', ()=>{

    cy.fixture('loginData').then((data) => {
        msloginpage.EnterEmailandClick(data.username)
        msloginpage.EnterPasswordandClick(data.password)
       // msloginpage.ClickYesButton()
      //  msloginpage.VerifySuccessfulLogintoMicrosoft()
       // callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
        callcenterloginpage.GotoHomePage();

        editffpage.ClickOnCreateOrderLink(data.enterprise, data.createcustomeremail);
        editffpage.AddShippingAddress(data.addresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
        editffpage.AddBillingAddress(data.billingaddresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
        editffpage.AddProductstoCart(data.productIds, data.qty)
        cy.wait(5000)
        editffpage.GotoFulfillmentShippingSection();

        editffpage.UpdateShippingDetails(data.addresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
        editffpage.AddNewAddress(data.ffaddresstype, data.fffname, data.fflname, data.ffphone, data.ffemailid, data.ffaddress1, data.ffaddress2, data.ffcity, data.ffzipcode, data.ffcountry, data.ffstate)
        editffpage.GoToNotesTab()
        cy.wait(15000)
        editffpage.DeleteLineItems(data.skuid)
        
                  })
            });
        });
