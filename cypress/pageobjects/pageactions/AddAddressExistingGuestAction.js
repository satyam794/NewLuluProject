/// <reference types="cypress" />

import AddAddressforExistingGuest from "../../pageobjects/pageelements/AddAddressforExistingGuest"


export default class AddAddressforExistingGuestAction
{

    constructor(){

        globalThis.modifyshipping = new AddAddressforExistingGuest();
        
    }

    SearchtheCustomer(enterprise,editcustomeraddressemail)
    {
        modifyshipping.ChangeEnterprise().click()
        modifyshipping.SelectEnterprise().contains(enterprise).click()
        modifyshipping.SearhCustomer().type(editcustomeraddressemail).type('{enter}')
    }

    AddNewAddressForExistingGuest(addresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
        modifyshipping.ClickEditIconShippingAddress().click()
          modifyshipping.ClickAddNewAddress().click()
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
            modifyshipping.selectCountry().each(($ele)  => {
            if($ele.text() == country)
            {
                cy.wrap($ele).click()
            }
          })
            modifyshipping.enterState().type(state)
            modifyshipping.selectState().should('have.text', state).click()
            modifyshipping.SaveShippingAddress().click()
        } 
    }