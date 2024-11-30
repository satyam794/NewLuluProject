import CustomerCreateAdvanceSearch from "../pageelements/CustomerCreateAdvanceSearch.js";
import CCHomePage from "../../pageobjects/pageelements/CCHomePage"
import SearchVerifyCustomer from "../../pageobjects/pageelements/SearchVerifyCustomer"


require("../../support/commands.js")

export default class CustomerCreateAdvanceActions
{
    constructor(){

        globalThis.ccaa = new CustomerCreateAdvanceSearch();
        globalThis.cchp = new CCHomePage()
        globalThis.vrc = new SearchVerifyCustomer();
    }

    createCustomerfromAdvanceSearch(enterprise,createcustomerfname,createcustomerlname,createcustomeremail,createcustomerphone)
    {
        ccaa.GoToHomePage().click();
        ccaa.clickOnAdvanceSearch().click()
        
        ccaa.clickOnGuestProfile().click()
       
        ccaa.clickEnterprise().click()
        ccaa.selectEnterprise().contains(enterprise).click()
        cchp.EnterGivenName().type(createcustomerfname)
        cchp.EnterSurName().type(createcustomerlname)
        cchp.EnterEmail().type(createcustomeremail)
        cchp.EnterPhoneNumber().type(createcustomerphone)
        cchp.ClickCreateProfile().contains('Create profile').click()
       
        cchp.VerifyGuestProfile().should('contain.text', createcustomeremail)
    }
}