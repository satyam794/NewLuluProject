/// <reference types="cypress" />

import SearchVerifyCustomer from "../../pageobjects/pageelements/SearchVerifyCustomer"


export default class SearchVerifyCustomerAction
{

    constructor(){

        globalThis.vrc = new SearchVerifyCustomer();
        
    }

    SearchtheCustomer(enterprise,seacrhguestcustomer)
    {
        vrc.GoToHomePage().click()
        vrc.ChangeEnterprise().click()
        vrc.SelectEnterprise().contains(enterprise).click()
        vrc.SearhCustomer().type(seacrhguestcustomer).type('{enter}')
    }

    verifyCustomerbyEmail(seacrhguestcustomer)
    {
        vrc.VerifyGuestCustomer().contains(seacrhguestcustomer)
    }

    VerifytheInvalidCustomer()
    {
        vrc.VerifyInvalidCustomer().contains('No results found')
    }
}