/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class CreateOrderMultipleGiftCards
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
        return cy.getIframe().find(loc.createorder.clickokenterprise).eq(1)
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

    PresenseofShippingAddress()
    {
        return cy.getIframe().find(loc.createorder.shippingpresent)
    }

    PresenseofBillingAddress()
    {
        return cy.getIframe().find(loc.createorder.billingpresent)
    }

    ClickEditIconShippingAddress()
    {
        return cy.getIframe().find(loc.shippingaddress.clickedit)
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

    VerifyMiniCartDetails()
    {
        return cy.getIframe().find(loc.viewminicart.minicarttable)
    }

    ClickMiniCartIcon()
    {
        return cy.getIframe().find(loc.viewminicart.minicarticon)
    }

    ClickCheckoutButton()
    {
        return cy.getIframe().find(loc.viewminicart.checkoutbtn)
    }

    ChooseShippingMethod()
    {
        return cy.getIframe().find(loc.checkout.chooseshippingmethod)
    }

    SelectShippingMethod()
    {
        return cy.getIframe().find(loc.checkout.selectshippingmethod)
    }

    AddPaymentMethod()
    {
        return cy.getIframe().find(loc.checkout.addpaymentmethod)
    }

    ChoosePaymentType()
    {
        return cy.getIframe().find(loc.checkout.paymenttype)
    }

    SelectPaymentType()
    {
        return cy.getIframe().find(loc.checkout.selectpaymenttype)
    }

    ChooseCardType()
    {
        return cy.getIframe().find(loc.checkout.cardtype)
    }

    SelectCardType()
    {
        return cy.getIframe().find(loc.checkout.selectcardtype)
    }
    
    EnterCardName()
    {
        return cy.getIframe().find(loc.checkout.cardname)
    }

    EnterGiftCardoken()
    {
        return cy.getIframe().find(loc.checkout.giftcardnumber)
    }

    EnterGiftCardPin()
    {
        return cy.getIframe().find(loc.checkout.giftcardpin)
    }

    SavePaymentMethod()
    {
        return cy.getIframe().find(loc.checkout.savepaymentmethod)
    }

    PlaceOrder()
    {
        return cy.getIframe().find(loc.checkout.placeorder)
    }

    VerifyOrderDetails()
    {
        return cy.getIframe().find('table > tbody > tr')
    }

    SelectOrderAddress()
    {
        return cy.getIframe().find(loc.checkout.selectorderaddress)
    }

    VerifyOrderPlaced()
    {
        return cy.getIframe().find(loc.checkout.verifyordernumber)
    }
}