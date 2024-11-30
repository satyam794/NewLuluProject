import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import CreateOrderGiftandCreditCardAction from "../pageobjects/pageactions/CreateOrderGiftandCreditCardAction";


describe('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const createordergccc = new CreateOrderGiftandCreditCardAction()

    before(() => {
        msloginpage.NavigateToURL()
    })

it('Create Guest Profile', ()=>{

    cy.fixture('loginData').then((data) => {
        msloginpage.EnterEmailandClick(data.username)
        msloginpage.EnterPasswordandClick(data.password)
       // msloginpage.ClickYesButton()
       // msloginpage.VerifySuccessfulLogintoMicrosoft()
       // callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
        callcenterloginpage.GotoHomePage();

        createordergccc.ClickOnCreateOrderLink(data.enterprise, data.createcustomeremail);
        createordergccc.AddShippingAddress(data.addresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
        createordergccc.AddBillingAddress(data.billingaddresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
        createordergccc.AddProductstoCart(data.productIds, data.qty)
        createordergccc.CheckoutOrder(data.expressshipping)
        createordergccc.AddSecondPaymentMethodGiftCard(data.giftcardmode, data.giftcardnumber, data.giftcardpin)         
        createordergccc.AddFirstPaymentMethodCreditCard(data.paymentmode,data.cardtype, data.cardname, data.cardnumber, data.last4digit, data.expmonth, data.expyear)
    })
            });
        });
