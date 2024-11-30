import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import CreateOrderMultipleGiftCardsActions from "../pageobjects/pageactions/CreateOrderMultipleGiftCardsActions";

describe('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const giftcardcheckout = new CreateOrderMultipleGiftCardsActions()

    before(() => {
        msloginpage.NavigateToURL()
    })

it('Create Order Using Multiple Gift Cards', ()=>{

    cy.fixture('loginData').then((data) => {
        msloginpage.EnterEmailandClick(data.username)
        msloginpage.EnterPasswordandClick(data.password)
       // msloginpage.ClickYesButton()
      //  msloginpage.VerifySuccessfulLogintoMicrosoft()
       // callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
        callcenterloginpage.GotoHomePage();
        
        giftcardcheckout.ClickOnCreateOrderLink(data.enterprise, data.createcustomeremail);
        giftcardcheckout.AddShippingAddress(data.addresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
        giftcardcheckout.AddBillingAddress(data.billingaddresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
        giftcardcheckout.AddProductstoCart(data.productIds, data.qty)
        giftcardcheckout.GiftCardCheckout(data.productIds, data.priorityshipping, data.giftcardnumbers, data.giftcardmode, data.giftcardpin)
                 })
            });
        });
