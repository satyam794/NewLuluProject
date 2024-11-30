/// <reference types = "cypress" />
const loc = require("../../locators.json")

export default class MSLoginPage
{

    EnterEmail()
    {
        return cy.get(loc.mslogin.email)
    }

    EnterPassword()
    {
        return cy.get(loc.mslogin.password)
    }

    ClickNext()
    {
        return cy.get(loc.mslogin.clickNext)
    }

    VerifySuccessfullLogin()
    {
        return cy.get(loc.mslogin.logincallcentertext)
    }

}
