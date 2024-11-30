/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class HomePage
{

clickCreateGuestProfileLink()
{
    return cy.getIframe().find(loc.homepage.createguestlink)
} 

clickEnterprise()
{
   return cy.getIframe().find(loc.guestprofile.clickenterprise)
           
}

selectEnterprise()
{
    return cy.getIframe().find(loc.guestprofile.selectenterprise)
        
}

EnterGivenName()
{
    return cy.getIframe().find(loc.guestprofile.givenname)
           
}

EnterSurName()
{
    return cy.getIframe().find(loc.guestprofile.surname)
            
}

EnterEmail()
{
    return cy.getIframe().find(loc.guestprofile.email)
            
}

EnterPhoneNumber()
{
    return cy.getIframe().find(loc.guestprofile.phonenumber)
           
}

ClickCreateProfile()
{
    return cy.getIframe().find(loc.guestprofile.createprofilebutton)
            
}

VerifyGuestProfile()
{
    return cy.getIframe().find(loc.guestprofile.verifyguestprofile)
  
}

}