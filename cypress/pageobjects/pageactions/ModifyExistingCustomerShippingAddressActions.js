/// <reference types="cypress" />
require("../../support/commands.js")
const loc = require("../../locators.json")

import ModifyExistingCustomerShippingAddress from "../../pageobjects/pageelements/ModifyExistingCustomerShippingAddress"

export default class ModifyExistingCustomerShippingAddressActions
{
    
    constructor(){
        globalThis.modifyshipping = new ModifyExistingCustomerShippingAddress();
    }


    SearchtheCustomer(enterprise,editcustomeraddressemail)
    {
        modifyshipping.ChangeEnterprise().click()
        modifyshipping.SelectEnterprise().contains(enterprise).click()
        modifyshipping.SearhCustomer().type(editcustomeraddressemail).type('{enter}')
    }

    AddNewShippingAddress(addresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
                modifyshipping.ClickEditIconShippingAddress().click()
               
                modifyshipping.AddNewAddress().click()
                
                modifyshipping.AddAddressType().type(addresstype)
                modifyshipping.FirstName().type(fname)
                modifyshipping.LastName().type(lname)
                modifyshipping.PhoneNumber().type(phone)
                modifyshipping.EmailID().type(emailid)
                modifyshipping.addAddress1().type(address1)
                modifyshipping.addAddress2().type(address2)
                modifyshipping.addCity().type(city)
                modifyshipping.addPostalCode().type(zipcode)
                modifyshipping.enterCountry().type(country)
                modifyshipping.selectCountry().each(($getallcountries) => {
                    if($getallcountries.text() == country) { cy.wrap($getallcountries).click({force:true}) }
                })
               
                modifyshipping.enterState().type(state)
                modifyshipping.selectState().should('have.text', state).click()
                modifyshipping.SaveShippingAddress().click()
              
                modifyshipping.SelectMatchedAddress().click()
                
                modifyshipping.CheckDefaultCheckbox().contains('Default shipping address').click()
               
                modifyshipping.SaveShippingAddress().click()
               
            } 

            EditNewShippingAddress(addresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
            {
                        modifyshipping.ClickEditIconShippingAddress().click()
                       
                        cy.getIframe().find(loc.modifyshipping.defaultshipping).eq(0).click();
                        modifyshipping.AddAddressType().clear().type(addresstype)
                        modifyshipping.FirstName().clear().type(fname)
                        modifyshipping.LastName().type(lname)
                        modifyshipping.PhoneNumber().clear().type(phone)
                        modifyshipping.EmailID().type(emailid)
                        modifyshipping.addAddress1().clear().type(address1)
                        modifyshipping.addAddress2().clear().type(address2)
                        modifyshipping.addCity().clear().type(city)
                        modifyshipping.addPostalCode().clear().type(zipcode)
                        modifyshipping.SaveShippingAddress().click()
                     
                        modifyshipping.SelectMatchedAddress().click()
                       
                        modifyshipping.SaveShippingAddress().click()
                       
                        
                    } 
        
    
    }
