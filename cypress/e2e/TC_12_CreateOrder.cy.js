import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import CreateOrderActions from "../pageobjects/pageactions/CreateOrderActions";


describe('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const createorder = new CreateOrderActions()

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
        createorder.AddShippingAddress(data.addresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
        createorder.AddBillingAddress(data.billingaddresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
        createorder.AddProductstoCart(data.productIds, data.qty)
        createorder.MiniCart(data.productIds)
        createorder.Checkout(data.productIds, data.shipping, data.paymentmode,data.cardtype, data.cardname, data.cardnumber, data.last4digit, data.expmonth, data.expyear)
                 })
            });
        });
