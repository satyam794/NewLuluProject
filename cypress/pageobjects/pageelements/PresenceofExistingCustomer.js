/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class PresenceofExistingCustomer
{
    clickOnAdvanceSearch()
    {
        return cy.getIframe().find(loc.presenceOfExistingCustomer.clickonadvancesearch)
    } 

    ChangeEnterprise()
    {
        return cy.getIframe().find(loc.presenceOfExistingCustomer.changeenterprise)
    }

    SelectEnterprise()
    {
        return cy.getIframe().find(loc.presenceOfExistingCustomer.selectenterprise)
    }

    EnterFirstName()
    {
        return cy.getIframe().find(loc.presenceOfExistingCustomer.firstname)
    }

    EnterEmail()
    {
        return cy.getIframe().find(loc.presenceOfExistingCustomer.email)
    }

    ClickSearch()
    {
        return cy.getIframe().find(loc.presenceOfExistingCustomer.clicksearch)
    }

    VerifyCustomerSection()
    {
        return cy.getIframe().find(loc.presenceOfExistingCustomer.verifycustomersection)
    }

    VerifyInvalidCustomer()
    {
       return cy.getIframe().find(loc.presenceOfExistingCustomer.invalidcustomer)
    }

}