import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import CreateOrderActions from "../pageobjects/pageactions/CreateOrderActions";
import DeleteViewCartItemsActions from "../pageobjects/pageactions/DeleteViewCartItemsActions"

describe('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
   const deletecartitem = new DeleteViewCartItemsActions()

   before(() => {
    msloginpage.NavigateToURL()
})

it('Create Guest Profile', ()=>{

    cy.fixture('loginData').then((data) => {
        msloginpage.EnterEmailandClick(data.username)
        msloginpage.EnterPasswordandClick(data.password)
      //  msloginpage.ClickYesButton()
       // msloginpage.VerifySuccessfulLogintoMicrosoft()
        
       // callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
        callcenterloginpage.GotoHomePage();
        
        deletecartitem.ClickOnCreateOrderLink(data.enterprise, data.createcustomeremail);
        deletecartitem.AddShippingAddress(data.addresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
        deletecartitem.AddBillingAddress(data.billingaddresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
        deletecartitem.AddProductstoCart(data.productIds, data.qty)
        deletecartitem.ViewMiniCartandDeleteItems()
                  })
            });
        });
