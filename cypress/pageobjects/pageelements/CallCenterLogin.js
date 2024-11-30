/// <reference types = "cypress" />
const loc = require("../../locators.json")

export default class CallCenterLogin
{
   
    Username()
    {
        return cy.get(loc.callcenterlogin.username)
    }

    Password()
    {
        return cy.get(loc.callcenterlogin.password)
    }

    Login()
    {
        return cy.get(loc.callcenterlogin.login)
    }

    ClickHomePageIcon()
    {
        return cy.get(loc.homepage.homepageicon)
    }

    VerifyHomePage()
    {
        return cy.get(loc.homepage.globalsearch)
    }
}