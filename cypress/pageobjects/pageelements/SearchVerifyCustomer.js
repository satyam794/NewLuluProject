/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class SeachVerifyCustomer
{
    GoToHomePage()
    {
        return cy.get(loc.homepage.homepageicon)
    }

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

    VerifyGuestCustomer()
    {
        return cy.getIframe().find(loc.guestprofile.verifyguestprofile)
    }

    verifyCustomer(customer)
    {
      //  cy.get("#omsi-iframe").its("0.contentDocument").its("body").find("table > tbody > tr").its('length').then((elelength) => {
        //    cy.log(elelength)
        //})
       return cy.getIframe().find("table").contains(customer).parent().within(() => {
            cy.get('td').eq(2).then((element) => {
                cy.log(element.text())
            })
        })
  
    }

    VerifyInvalidCustomer()
    {
       return cy.getIframe().find(loc.searchverifycustomer.invalidcustomer)
    }
}