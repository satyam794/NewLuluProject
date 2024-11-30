/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class OrderSearchHomePage
{

    ClickHomePageIcon()
    {
        return cy.get(loc.homepage.homepageicon)
    }

    ChangeEnterprise()
    {
        return cy.getIframe().find(loc.editguest.changeenterprise)
    }

    SelectEnterprise()
    {
        return cy.getIframe().find(loc.editguest.selectenterprise)
    }

    SearchOrder()
    {
        return cy.getIframe().find(loc.searchorder.typeorderno)
    }

    VerifyCustomerSection()
    {
        return cy.getIframe().find(loc.presenceOfExistingCustomer.verifycustomersection)
    }

    OrderNotFound()
    {
        return cy.getIframe().find('table > tbody > tr > td > buc-empty-state > div[class=empty-state] > p')
    }

    OrderFound()
    {
        return cy.getIframe().find('call-center-order-status > section > buc-accordion > ibm-accordion > ul > buc-accordion-item > button > section[tid="OrderStatusComponent-accordion"] > section > div[tid="OrderStatusComponent-order-label"]')
    }

}