/// <reference types = "cypress" />
const loc = require("../../locators.json")
require("../../support/commands.js")

export default class CreateOrderColoradoShipping
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

    VerifySearchedProduct()
    {
        return cy.getIframe().find(loc.productpage.verifysearchsku)
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

    VerifyMiniCartDetails()
    {
        return cy.getIframe().find(loc.viewminicart.minicarttable)
    }

    ClickCheckoutButton()
    {
        return cy.getIframe().find(loc.viewminicart.checkoutbtn)
    }

    ClickOnPromoCodeField()
    {
        return cy.getIframe().find(loc.checkout.promotioncode)
    }

    ClickOnApplyButton()
    {
        return cy.getIframe().find(loc.checkout.applybutton)
    }

    VerifyPromotion()
    {
        return cy.getIframe().find(loc.checkout.verifypromotion)
    }

    ChooseShippingMethod()
    {
        return cy.getIframe().find(loc.checkout.chooseshippingmethod)
    }

    SelectShippingMethod()
    {
        return cy.getIframe().find(loc.checkout.selectshippingmethod)
    }

    VerifyOrderDetails()
    {
        return cy.getIframe().find('table > tbody > tr')
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

    EnterCardoken()
    {
        return cy.getIframe().find(loc.checkout.cardtoken)
    }

    EnterCardLast4Digit()
    {
        return cy.getIframe().find(loc.checkout.card4digit)
    }

    ChooseExpMonth()
    {
        return cy.getIframe().find(loc.checkout.expmonth)
    }

    SelectExpMonth()
    {
        return cy.getIframe().find(loc.checkout.selectexpmonth)
    }

    ChooseExpYear()
    {
        return cy.getIframe().find(loc.checkout.expyear)
    }

    SelectExpYear()
    {
        return cy.getIframe().find(loc.checkout.selectexpyear)
    }

    SavePaymentMethod()
    {
        return cy.getIframe().find(loc.checkout.savepaymentmethod)
    }

    PlaceOrder()
    {
        return cy.getIframe().find(loc.checkout.placeorder)
    }

    VerifyOrderPlaced()
    {
        return cy.getIframe().find(loc.checkout.verifyordernumber)
    }

    SelectMatchedAddress()
    {
        return cy.getIframe().find(loc.checkout.selectmatchedaddress)
    }
}