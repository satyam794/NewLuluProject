import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import CreateOrderColoradoShippingActions from "../pageobjects/pageactions/CreateOrderColoradoShippingActions";


describe('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const createorder = new CreateOrderColoradoShippingActions()

    before(() => {
        msloginpage.NavigateToURL()
    })

it('Create Guest Profile', ()=>{

    cy.fixture('loginData').then((data) => {
        msloginpage.EnterEmailandClick(data.username)
        msloginpage.EnterPasswordandClick(data.password)
       // msloginpage.ClickYesButton()
       // msloginpage.VerifySuccessfulLogintoMicrosoft()
        //callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
        callcenterloginpage.GotoHomePage();

        createorder.ClickOnCreateOrderLink(data.enterprise, data.createcustomeremail);
        createorder.AddShippingAddress(data.coladdresstype, data.colfname, data.collname, data.colphone, data.colemailid, data.coladdress1, data.coladdress2, data.colcity, data.colzipcode, data.colcountry, data.colstate)
        createorder.AddBillingAddress(data.billingaddresstype, data.colfname, data.collname, data.colphone, data.colemailid, data.coladdress1, data.coladdress2, data.colcity, data.colzipcode, data.colcountry, data.colstate)
        createorder.AddProductstoCart(data.productIds, data.qty)
        createorder.Checkout(data.productIds, data.shipping, data.paymentmode,data.cardtype, data.cardname, data.cardnumber, data.last4digit, data.expmonth, data.expyear)
                 })
            });
        });
