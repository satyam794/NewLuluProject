/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class CustomerCreateAdvanceSearch
{
    GoToHomePage()
    {
        return cy.get(loc.homepage.homepageicon).click();
    }

    clickOnAdvanceSearch()
    {
        return cy.getIframe().find(loc.createcustomeradvancesearch.clickonadvancesearch).eq(1).find('a')
    }

    clickOnGuestProfile()
    {
        return cy.getIframe().contains('Create guest profile')
    }

    clickEnterprise()
{
    return cy.getIframe().find(loc.createcustomeradvancesearch.changeenterprise)
           
}

selectEnterprise()
{
    return cy.getIframe().find(loc.createcustomeradvancesearch.selectenterprise).invoke('show')
        
}

}