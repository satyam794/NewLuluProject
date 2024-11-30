import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import CreateOrderInternationalShippingActions from "../pageobjects/pageactions/CreateOrderInternationalShippingActions";


describe('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const createorder = new CreateOrderInternationalShippingActions()

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

        createorder.ClickOnCreateOrderLink(data.enterprise, data.createcustomeremail);
        createorder.AddShippingAddress(data.intaddresstype, data.intfname, data.intlname, data.intphone, data.intemailid, data.intaddress1, data.intaddress2, data.intcity, data.intzipcode, data.intcountry, data.intstate)
        createorder.AddBillingAddress(data.intbillingaddresstype, data.intfname, data.intlname, data.intphone, data.intemailid, data.intaddress1, data.intaddress2, data.intcity, data.intzipcode, data.intcountry, data.intstate)
        createorder.AddProductstoCart(data.productIds, data.qty)
        createorder.Checkout(data.productIds, data.shipping, data.paymentmode,data.cardtype, data.cardname, data.cardnumber, data.last4digit, data.expmonth, data.expyear)
                 })
            });
        });
