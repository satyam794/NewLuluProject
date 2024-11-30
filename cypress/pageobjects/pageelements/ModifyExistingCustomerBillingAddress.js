/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class ModifyExistingCustomerBillingAddress
{
    ChangeEnterprise()
    {
        return cy.getIframe().find(loc.searchverifycustomer.changeenterprise)
    }

    SelectEnterprise()
    {
        return cy.getIframe().find(loc.searchverifycustomer.selectenterprise)
    }

    SearhCustomer()
    {
        return cy.getIframe().find(loc.searchverifycustomer.searchcustomer)
    }

    ClickEditIconBillingAddress()
    {
        return cy.getIframe().find(loc.modifyshipping.editicon)
    }

    ClickEditIconShippingAddress()
    {
        return cy.getIframe().find(loc.modifyshipping.editicon)
    }

    AddNewAddress()
    {
        return cy.getIframe().find(loc.modifyshipping.addnewaddress)
    }

    ClickDefaultBillingAddress()
    {
        return cy.getIframe().find(loc.modifyshipping.defaultbilling)
    }

    ClickCustomerProfileAddress()
    {
        return cy.getIframe().find(loc.modifyshipping.customerprofile)
    }

    AddAddressType()
    {
        return cy.getIframe().find(loc.contact.addresstype)
    }

    FirstName()
    {
        return cy.getIframe().find(loc.contact.firstname)
    }

    LastName()
    {
        return cy.getIframe().find(loc.contact.lastname)
    }

    PhoneNumber()
    {
        return cy.getIframe().find(loc.contact.phone)
    }

    EmailID()
    {
        return cy.getIframe().find(loc.contact.emailid)
    }

    addAddress1()
    {
        return cy.getIframe().find(loc.shippingaddress.address1)
    }

    addAddress2()
    {
        return cy.getIframe().find(loc.shippingaddress.address2)
    }

    addCity()
    {
        return cy.getIframe().find(loc.shippingaddress.city)
    }

    addPostalCode()
    {
        return cy.getIframe().find(loc.shippingaddress.postalcode)
    }

    enterCountry()
    {
        return cy.getIframe().find(loc.shippingaddress.entercountry)
    }

    selectCountry()
    {
        return cy.getIframe().find(loc.shippingaddress.selectcountry)
    }


    enterState()
    {
        return cy.getIframe().find(loc.shippingaddress.enterstate)
    }

    selectState()
    {
        return cy.getIframe().find(loc.shippingaddress.selectstate)
    }

    CheckDefaultCheckbox()
    {
        return cy.getIframe().find(loc.modifyshipping.defaultshipbillcheckbox)
    }

    SaveShippingAddress()
    {
        return cy.getIframe().find(loc.shippingaddress.saveshippingaddress)
    }
}
