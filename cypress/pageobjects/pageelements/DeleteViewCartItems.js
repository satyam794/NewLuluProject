/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class DeleteViewCartItems
{
    clickOnCreateOrderLinkonHomePage()
    {
        return cy.getIframe().find(loc.viewminicart.createordersection).find(loc.viewminicart.createorderlink)
    }

    ChangeEnterprise()
    {
        return cy.getIframe().find(loc.viewminicart.changeenterprise)
    }

    SelectEnterprise()
    {
        return cy.getIframe().find(loc.viewminicart.selectenterprise)
    }

    ClickOkOnEnterprise()
    {
        return cy.getIframe().find(loc.viewminicart.clickokenterprise)
    }

    ClickNext()
    {
        return cy.getIframe().find(loc.viewminicart.clickNextbutton)
    }

    SearchExistingCustomer()
    {
        return cy.getIframe().find(loc.viewminicart.enterCustomer)
    }

    SelectExistingCustomer()
    {
        return cy.getIframe().find(loc.viewminicart.selectcustomer)
    }

    AsserttheSelectedCustomer()
    {
        return cy.getIframe().find(loc.viewminicart.verifyselectedcustomer)
    }

    PresenseofShippingAddress()
    {
        return cy.getIframe().find(loc.viewminicart.shippingpresent)
    }

    PresenseofBillingAddress()
    {
        return cy.getIframe().find(loc.viewminicart.billingpresent)
    }

    ClickEditIconShippingAddress()
    {
        return cy.getIframe().find(loc.viewminicart.clickshippingedit)
    }

    AddAddressType()
    {
        return cy.getIframe().find(loc.viewminicart.addresstype)
    }

    FirstName()
    {
        return cy.getIframe().find(loc.viewminicart.firstname)
    }

    LastName()
    {
        return cy.getIframe().find(loc.viewminicart.lastname)
    }

    PhoneNumber()
    {
        return cy.getIframe().find(loc.viewminicart.phone)
    }

    EmailID()
    {
        return cy.getIframe().find(loc.viewminicart.emailid)
    }

    addAddress1()
    {
        return cy.getIframe().find(loc.viewminicart.address1)
    }

    addAddress2()
    {
        return cy.getIframe().find(loc.viewminicart.address2)
    }

    addCity()
    {
        return cy.getIframe().find(loc.viewminicart.city)
    }

    addPostalCode()
    {
        return cy.getIframe().find(loc.viewminicart.postalcode)
    }

    enterCountry()
    {
        return cy.getIframe().find(loc.viewminicart.entercountry)
    }

    selectCountry()
    {
        return cy.getIframe().find(loc.viewminicart.selectcountry)
    }


    enterState()
    {
        return cy.getIframe().find(loc.viewminicart.enterstate)
    }

    selectState()
    {
        return cy.getIframe().find(loc.viewminicart.selectstate)
    }

    SaveShippingAddress()
    {
        return cy.getIframe().find(loc.viewminicart.saveshippingaddress)
    }

    ClickEditIconBillingAddress()
    {
        return cy.getIframe().find(loc.viewminicart.clickbillingedit)
    }

    SavebillingAddress()
    {
        return cy.getIframe().find(loc.viewminicart.savebillingaddress)
    }

    ClickCreateOrderNext()
    {
        return cy.getIframe().find(loc.viewminicart.createnext)
    }

    SearchProduct()
    {
        return cy.getIframe().find(loc.viewminicart.searchproduct)
    }

    ProductSKU()
    {
        return cy.getIframe().find(loc.viewminicart.getskuid)
    }

    ChangeQuantity()
    {
        return cy.getIframe().find(loc.viewminicart.addquantity)
    }

    ClickAddtoCart()
    {
        return cy.getIframe().find(loc.viewminicart.addtocart)
    }

    ClickMiniCartIcon()
    {
        return cy.getIframe().find(loc.viewminicart.minicarticon)
    }

    SelectProducts()
    {
        return cy.getIframe().find(loc.viewminicart.selectproduct)
    }

    ClickOnRemoveLineItem()
    {
        return cy.getIframe().find(loc.viewminicart.removebutton)
    }

    ClickOnYesButton()
    {
        return cy.getIframe().find(loc.viewminicart.clickonyesbutton)
    }

    VeriryNoResultFound()
    {
        return cy.getIframe().find(loc.viewminicart.verifydeleteditems)
    }
}