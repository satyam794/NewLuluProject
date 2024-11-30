/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class EditGuestDetails
{
    GoToHomePage()
    {
        return cy.get(loc.editguest.homepageicon)
    }

    ChangeEnterprise()
    {
        return cy.getIframe().find(loc.editguest.changeenterprise)
    }

    SelectEnterprise()
    {
        return cy.getIframe().find(loc.editguest.selectenterprise)
    }

    SearhCustomer()
    {
        return cy.getIframe().find(loc.editguest.searchcustomer)
    }

    ClickonGuestEditIcon()
    {
        return cy.getIframe().find(loc.editguest.clickediticon).eq(0)
    }

    EditSurName()
    {
        return cy.getIframe().find(loc.editguest.surname)
            
    }

    EditPhoneNumber()
    {
        return cy.getIframe().find(loc.editguest.phonenumber)
    }

    clickOnSaveButton()
    {
         return cy.getIframe().find(loc.editguest.saveEditProfile)
    }

}