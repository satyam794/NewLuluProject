/// <reference types="cypress" />

import CallCenterLogin from "../../pageobjects/pageelements/CallCenterLogin"

export default class CallCenterActions
{
    constructor(){

        globalThis.cclogin = new CallCenterLogin();
    }

   
    loginToCallCenter(email,password)
    {
        cclogin.Username().type(email)
        cclogin.Password().type(password)
        cclogin.Login().contains('Log in').click()
    }

    GotoHomePage()
    {
        cclogin.ClickHomePageIcon().click();
        cclogin.VerifyHomePage().should('be.visible')
    }
}