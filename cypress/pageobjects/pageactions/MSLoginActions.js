/// <reference types="cypress" />

import MSLoginPage from "../../pageobjects/pageelements/MSLoginPage"

export default class MSLoginActions
{
    constructor(){

        globalThis.mslogin = new MSLoginPage();
    }

    NavigateToURL()
    {
            cy.origin('https://login.microsoftonline.com', () => {
                cy.visit('https://gec1.qa.lululemon.app/call-center/login')
            })
            
    }

    EnterEmailandClick(email)
    {
        mslogin.EnterEmail().type(email)
        mslogin.ClickNext().click()
        cy.wait(2000)
    }

    EnterPasswordandClick(password)
    {
        mslogin.EnterPassword().type(password)
        mslogin.ClickNext().click()
        cy.wait(2000)
    }

   /* ClickYesButton()
    {
        mslogin.ClickNext().click()
        cy.wait(3000)
    } */

    VerifySuccessfulLogintoMicrosoft()
    {
        mslogin.VerifySuccessfullLogin().should('have.text', 'Log in to IBM Sterling Call Center')
    }
}