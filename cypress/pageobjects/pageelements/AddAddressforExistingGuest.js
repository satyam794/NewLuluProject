/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class AddAddressforExistingGuest
{
    ChangeEnterprise()
    {
        return cy.getIframe().find(loc.modifyshipping.changeenterprise)
    }

    SelectEnterprise()
    {
        return cy.getIframe().find(loc.modifyshipping.selectenterprise)
    }

    SearhCustomer()
    {
        return cy.getIframe().find(loc.modifyshipping.searchcustomer)
    }

    ClickEditIconShippingAddress()
    {
        return cy.getIframe().find(loc.modifyshipping.editicon)
    }

    ClickAddNewAddress()
    {
        return cy.getIframe().find(loc.modifyshipping.addnewaddress)
    }

    AddAddressType()
    {
        return cy.getIframe().find(loc.modifyshipping.addresstype)
    }

    FirstName()
    {
        return cy.getIframe().find(loc.modifyshipping.firstname)
    }

    LastName()
    {
        return cy.getIframe().find(loc.modifyshipping.lastname)
    }

    PhoneNumber()
    {
        return cy.getIframe().find(loc.modifyshipping.phone)
    }

    EmailID()
    {
        return cy.getIframe().find(loc.modifyshipping.emailid)
    }

    addAddress1()
    {
        return cy.getIframe().find(loc.modifyshipping.address1)
    }

    addAddress2()
    {
        return cy.getIframe().find(loc.modifyshipping.address2)
    }

    addCity()
    {
        return cy.getIframe().find(loc.modifyshipping.city)
    }

    addPostalCode()
    {
        return cy.getIframe().find(loc.modifyshipping.postalcode)
    }

    enterCountry()
    {
        return cy.getIframe().find(loc.modifyshipping.entercountry)
    }

    selectCountry()
    {
        return cy.getIframe().find(loc.modifyshipping.selectcountry)
    }

    enterState()
    {
        return cy.getIframe().find(loc.modifyshipping.enterstate)
    }

    selectState()
    {
        return cy.getIframe().find(loc.modifyshipping.selectstate)
    }

    CheckDefaultCheckbox()
    {
        return cy.getIframe().find(loc.modifyshipping.defaultshipbillcheckbox)
    }

    SaveShippingAddress()
    {
        return cy.getIframe().find(loc.modifyshipping.saveshippingaddress)
    }
}
