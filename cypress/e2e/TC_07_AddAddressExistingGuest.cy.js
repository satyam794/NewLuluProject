import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import AddAddressforExistingGuestAction from "../pageobjects/pageactions/AddAddressExistingGuestAction";

describe('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const addnewaddress = new AddAddressforExistingGuestAction()

    before(() => {
        msloginpage.NavigateToURL()
    })

it('Modify Existing Guest Customer Address', ()=>{

   cy.fixture('loginData').then((data) => {
    msloginpage.EnterEmailandClick(data.username)
    msloginpage.EnterPasswordandClick(data.password)
   // msloginpage.ClickYesButton()
   // msloginpage.VerifySuccessfulLogintoMicrosoft()
    
    //callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
    callcenterloginpage.GotoHomePage();

    addnewaddress.SearchtheCustomer(data.enterprise, data.createcustomeremail);
    addnewaddress.AddNewAddressForExistingGuest(data.addresstype, data.fname, data.lname, data.phone, data.emailid, data.address1, data.address2, data.city, data.zipcode, data.country, data.state)
     })
    });
})
