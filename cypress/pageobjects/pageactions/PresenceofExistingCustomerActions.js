/// <reference types="cypress" />
const loc = require("../../locators.json")
import PresenceofExistingCustomer from "../pageelements/PresenceofExistingCustomer";

export default class PresenceofExistingCustomerActions
{
    constructor(){

        globalThis.checkexistingcustomer = new PresenceofExistingCustomer();
    }

    PresenceExistingCustomerFromAdvanceSearchByEmail(enterprise,existingcustomeremail)
    {
        checkexistingcustomer.clickOnAdvanceSearch().eq(1).click()
        checkexistingcustomer.ChangeEnterprise().click()
        checkexistingcustomer.SelectEnterprise().contains(enterprise).click()
        checkexistingcustomer.EnterEmail().type(existingcustomeremail)
        checkexistingcustomer.ClickSearch().click();

        checkexistingcustomer.VerifyCustomerSection().then((emailsearchsection) => {

        if (emailsearchsection.find(loc.presenceOfExistingCustomer.validcustomer).length > 0) {

            checkexistingcustomer.VerifyCustomerSection().find(loc.presenceOfExistingCustomer.validcustomer).contains( existingcustomeremail )
           
        } 
        else 
        {
             checkexistingcustomer.VerifyInvalidCustomer().then((nocustomer) => {
                cy.log(nocustomer.text())
             })
        }

});
        
    }
}