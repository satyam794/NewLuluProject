/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class EditFulfillmentPage
{
    clickOnCreateOrderLinkonHomePage()
    {
        return cy.getIframe().find(loc.createorder.createordersection).find(loc.createorder.createorderlink)
    }

    ChangeEnterprise()
    {
        return cy.getIframe().find(loc.createorder.changeenterprise)
    }

    SelectEnterprise()
    {
        return cy.getIframe().find(loc.createorder.selectenterprise)
    }

    ClickOkOnEnterprise()
    {
        return cy.getIframe().find(loc.createorder.clickokenterprise)
    }

    ClickNext()
    {
        return cy.getIframe().find(loc.createorder.clickNextbutton)
    }

    SearchExistingCustomer()
    {
        return cy.getIframe().find(loc.createorder.enterCustomer)
    }

    SelectExistingCustomer()
    {
        return cy.getIframe().find(loc.createorder.selectcustomer)
    }

    AsserttheSelectedCustomer()
    {
        return cy.getIframe().find(loc.createorder.verifyselectedcustomer)
    }

    ClickEditIconShippingAddress()
    {
        return cy.getIframe().find(loc.shippingaddress.clickedit)
    }

    FullfillmentEditShippingIcon()
    {
        return cy.getIframe().find(loc.shippingaddress.ffshippingediticon)
    }

    AddAddressType()
    {
        return cy.getIframe().find(loc.contact.addresstype)
    }

    FirstName()
    {
        return cy.getIframe().find(loc.contact.firstname)
    }

    LastName()
    {
        return cy.getIframe().find(loc.contact.lastname)
    }

    PhoneNumber()
    {
        return cy.getIframe().find(loc.contact.phone)
    }

    EmailID()
    {
        return cy.getIframe().find(loc.contact.emailid)
    }

    addAddress1()
    {
        return cy.getIframe().find(loc.shippingaddress.address1)
    }

    addAddress2()
    {
        return cy.getIframe().find(loc.shippingaddress.address2)
    }

    addCity()
    {
        return cy.getIframe().find(loc.shippingaddress.city)
    }

    addPostalCode()
    {
        return cy.getIframe().find(loc.shippingaddress.postalcode)
    }

    enterCountry()
    {
        return cy.getIframe().find(loc.shippingaddress.entercountry)
    }

    selectCountry()
    {
        return cy.getIframe().find(loc.shippingaddress.selectcountry)
    }


    enterState()
    {
        return cy.getIframe().find(loc.shippingaddress.enterstate)
    }

    selectState()
    {
        return cy.getIframe().find(loc.shippingaddress.selectstate)
    }

    SaveShippingAddress()
    {
        return cy.getIframe().find(loc.shippingaddress.saveshippingaddress)
    }

    ClickEditIconBillingAddress()
    {
        return cy.getIframe().find(loc.billingaddress.clickedit)
    }

    SavebillingAddress()
    {
        return cy.getIframe().find(loc.billingaddress.savebillingaddress)
    }

    ClickCreateOrderNext()
    {
        return cy.getIframe().find(loc.billingaddress.createnext)
    }

    SearchProduct()
    {
        return cy.getIframe().find(loc.productpage.searchproduct)
    }

    ProductSKU()
    {
        return cy.getIframe().find(loc.productpage.getskuid)
    }

    ChangeQuantity()
    {
        return cy.getIframe().find(loc.productpage.addquantity)
    }

    ClickAddtoCart()
    {
        return cy.getIframe().find(loc.productpage.addtocart)
    }

    ClickMiniCartIcon()
    {
        return cy.getIframe().find(loc.viewminicart.minicarticon)
    }

    ClickCheckoutButton()
    {
        return cy.getIframe().find(loc.viewminicart.checkoutbtn)
    }

    ExpandShippingSection()
    {
        return cy.getIframe().find(loc.editfullfillment.shippingsection)
    }

    EditFulfillmentShippingIcon()
    {
        return cy.getIframe().find(loc.editfullfillment.editshippingicon)
    }

    SelectProducts()
    {
        return cy.getIframe().find(loc.editfullfillment.selectproduct)
    }

    ClickOnRemoveLineItem()
    {
        return cy.getIframe().find(loc.editfullfillment.removebutton)
    }

    ClickOnYesButton()
    {
        return cy.getIframe().find(loc.editfullfillment.clickonyesbutton)
    }

    ClickOnNotesTab()
    {
        return cy.getIframe().find(loc.editfullfillment.clicknotes)
    }

    ClickOnAddNotes()
    {
        return cy.getIframe().find(loc.editfullfillment.addnote)
    }

    EnterNoteType()
    {
        return cy.getIframe().find(loc.editfullfillment.enternotetype).parent().find(loc.editfullfillment.selectnotetype)
    }

    EnterContactType()
    {
        return cy.getIframe().find(loc.editfullfillment.entercontacttype).parent().find(loc.editfullfillment.selectcotacttype)
    }

    EnterContactReference()
    {
        return cy.getIframe().find(loc.editfullfillment.entercontactreference).parent().find(loc.editfullfillment.selecrcontactreference)
    }

    EnterNotes()
    {
        return cy.getIframe().find(loc.editfullfillment.enternotes)
    }

    SaveNotes()
    {
        return cy.getIframe().find(loc.editfullfillment.savenotes)
    }

    VerifyNotes()
    {
        return cy.getIframe().find(loc.editfullfillment.verifynotes)
    }
}