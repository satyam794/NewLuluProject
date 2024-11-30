/// <reference types="cypress" />
require("../../support/commands.js")
const loc = require("../../locators.json")
import ModifyExistingCustomerBillingAddress from "../../pageobjects/pageelements/ModifyExistingCustomerBillingAddress"


export default class SearchVerifyCustomerAction
{

    constructor(){

        globalThis.modifybilling = new ModifyExistingCustomerBillingAddress();
        
    }

    SearchtheCustomer(enterprise,editcustomeraddressemail)
    {
        modifybilling.ChangeEnterprise().click()
        modifybilling.SelectEnterprise().contains(enterprise).click()
        modifybilling.SearhCustomer().type(editcustomeraddressemail).type('{enter}')
    }

   AddNewBillingAddress(addresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
            modifybilling.ClickEditIconShippingAddress().click()
           
            modifybilling.AddNewAddress().click()
            modifybilling.AddAddressType().type(addresstype)
            modifybilling.FirstName().type(fname)
            modifybilling.LastName().type(lname)
            modifybilling.PhoneNumber().type(phone)
           // modifyshipping.EmailID().type(emailid)
           modifybilling.addAddress1().type(address1)
           modifybilling.addAddress2().type(address2)
           modifybilling.addCity().clear().type(city)
           modifybilling.addPostalCode().type(zipcode)
           modifybilling.enterCountry().type(country)
           modifybilling.selectCountry().each(($getallcountries) => {
                    if($getallcountries.text() == country) { cy.wrap($getallcountries).click({force:true}) }
                })
                
                modifybilling.enterState().type(state)
                modifybilling.selectState().should('have.text', state).click()
                  modifybilling.CheckDefaultCheckbox().contains('Default billing address').click()
            modifybilling.SaveShippingAddress().click()
           
       
    }

    EditNewBillingAddress(addresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
        modifybilling.ClickEditIconShippingAddress().click()
        cy.getIframe().find(loc.modifybilling.defaultbilling).last().click();
           
            modifybilling.AddAddressType().clear().type(addresstype)
            modifybilling.FirstName().clear().type(fname)
            modifybilling.LastName().type(lname)
            modifybilling.PhoneNumber().clear().type(phone)
           // modifyshipping.EmailID().type(emailid)
           modifybilling.addAddress1().clear().type(address1)
           modifybilling.addAddress2().clear().type(address2)
           modifybilling.addCity().clear().type(city)
           modifybilling.addPostalCode().clear().type(zipcode)
            modifybilling.CheckDefaultCheckbox().contains('Default billing address').click()
            modifybilling.SaveShippingAddress().click()
           
       
    }

}