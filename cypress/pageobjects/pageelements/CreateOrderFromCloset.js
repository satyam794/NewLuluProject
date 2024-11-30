/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class CreateOrderFromCloset
{

GoToHomePage()
{
    return cy.get(loc.createordercloset.homepageicon)
}

ChangeEnterprise()
{
    return cy.getIframe().find(loc.createordercloset.changeenterprise)
}

SelectEnterprise()
{
    return cy.getIframe().find(loc.createordercloset.selectenterprise)
}

SearchCustomer()
{
    return cy.getIframe().find(loc.createordercloset.searchcustomer)
}

ClickOnClosetTab()
{
    return cy.getIframe().find(loc.createordercloset.closettab)
}

ClickOnBuyAgainButton()
{
    return cy.getIframe().find(loc.createordercloset.buyagain)
}

   

}