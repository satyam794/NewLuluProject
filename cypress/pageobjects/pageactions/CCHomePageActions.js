/// <reference types="cypress" />

import CCHomePage from "../../pageobjects/pageelements/CCHomePage"
const loc = require("../../locators.json")
export default class CCHomePageActions
{
    constructor(){

        globalThis.homepagecreateguest = new CCHomePage();
    }

    CreateGuestCustomerProfile(enterprise,createcustomerfname,createcustomerlname,createcustomeremail,createcustomerphone)
    {
        homepagecreateguest.clickCreateGuestProfileLink().contains('Create guest profile').click()
        homepagecreateguest.clickEnterprise().click()
        homepagecreateguest.selectEnterprise().invoke('show').contains(enterprise).click()
        homepagecreateguest.EnterGivenName().type(createcustomerfname)
        homepagecreateguest.EnterSurName().type(createcustomerlname)
        homepagecreateguest.EnterEmail().type(createcustomeremail)
        homepagecreateguest.EnterPhoneNumber().type(createcustomerphone)
        homepagecreateguest.ClickCreateProfile().contains('Create profile').click()
        
    }

    VerifyGuestProfile(createcustomeremail)
    {
        homepagecreateguest.VerifyGuestProfile().should('contain.text', createcustomeremail)
    }
} 