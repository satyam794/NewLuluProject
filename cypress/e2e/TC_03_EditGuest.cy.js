import MSLoginActions from "../pageobjects/pageactions/MSLoginActions";
import CallCenterActions from "../pageobjects/pageactions/CallCenterActions";
import EditGuestDetailActions from "../pageobjects/pageactions/EditGuestDetailActions";

describe('Home Page', () => {
    
    const msloginpage = new MSLoginActions()
    const callcenterloginpage = new CallCenterActions()
    const editguest = new EditGuestDetailActions()
   
    before(() => {
        msloginpage.NavigateToURL()
    })

it('Create Guest Profile', ()=>{

    cy.fixture('loginData').then((data) => {
        msloginpage.EnterEmailandClick(data.username)
        msloginpage.EnterPasswordandClick(data.password)
        //msloginpage.ClickYesButton()
      //  msloginpage.VerifySuccessfulLogintoMicrosoft()
       
        //callcenterloginpage.loginToCallCenter(data.ccusername, data.ccpassword);
        callcenterloginpage.GotoHomePage();
      
        editguest.SearchfortheGuest(data.enterprise, data.createcustomeremail)
        editguest.EditSurNameandPhone(data.editsurname, data.editphone)
                 })
            });
        });
