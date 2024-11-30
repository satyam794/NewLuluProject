/// <reference types="cypress" />
const loc = require("../../locators.json")
import CreateOrderMultipleGiftCards from "../../pageobjects/pageelements/CreateOrderMultipleGiftCards"

export default class CreateOrderMultipleGiftCardsActions
{
    constructor(){

        globalThis.order = new CreateOrderMultipleGiftCards();
        
    }

    ClickOnCreateOrderLink(enterprise, existingcustomer)
    {
        order.clickOnCreateOrderLinkonHomePage().contains('Create order').click()
        order.ChangeEnterprise().click()
        order.SelectEnterprise().contains(enterprise).click()
        order.ClickOkOnEnterprise().contains('OK').click()
       
        order.SearchExistingCustomer().type(existingcustomer).type('{enter}')
        order.SelectExistingCustomer().contains(existingcustomer).click()
      
        order.AsserttheSelectedCustomer().should('contain.text',existingcustomer)
       
    }

    AddShippingAddress(addresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
            order.PresenseofShippingAddress().then(($element) => {
            if($element.find(loc.createorder.displayshipping).length > 0)
            {
                $element.find(loc.createorder.displayshipping).click()
            } 
            else
            {
                order.ClickEditIconShippingAddress().click()
               
                order.AddAddressType().type(addresstype)
                order.FirstName().type(fname)
                order.LastName().type(lname)
                order.PhoneNumber().type(phone)
                order.EmailID().type(emailid)
                order.addAddress1().type(address1)
                order.addAddress2().type(address2)
                order.addCity().type(city)
                order.addPostalCode().type(zipcode)
                order.enterCountry().type(country)
                order.selectCountry().each(($getallcountries) => {
                    if($getallcountries.text() == country)
                        {
                            cy.wrap($getallcountries).click()
                        }
                })
               
                order.enterState().type(state)
                order.selectState().should('have.text', state).click()
                order.SaveShippingAddress().click()
                
            }
        })
      
    }
    AddBillingAddress(billingaddresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
        order.PresenseofBillingAddress().then(($element) => {
            if($element.find(loc.createorder.displaybilling).length > 0)
            {
                $element.find(loc.createorder.displaybilling).click()
                order.ClickCreateOrderNext().click()
            } 
            else
            {
        order.ClickEditIconBillingAddress().click()
      
        order.AddAddressType().type(billingaddresstype)
        order.FirstName().type(fname)
        order.LastName().type(lname)
        order.PhoneNumber().type(phone)
        order.EmailID().type(emailid)
        order.addAddress1().type(address1)
        order.addAddress2().type(address2)
        order.addCity().type(city)
        order.addPostalCode().type(zipcode)
        order.enterCountry().type(country)
        order.selectCountry().each(($getallcountries) => {
            if($getallcountries.text() == country)
                {
                    cy.wrap($getallcountries).click()
                }
        }) 
        
        order.enterState().type(state)
        order.selectState().should('have.text', state).click()
       
        order.SavebillingAddress().contains('Save').click()
       
        order.ClickCreateOrderNext().click()
        }
    })
}

AddProductstoCart(productIds, quantity)
{
    for(let i =0 ; i<productIds.length ; i++)
    {
        if(i>0)
        {
            order.SearchProduct().clear()
        }
        order.SearchProduct().type(productIds[i]).type('{enter}')
       
        order.ChangeQuantity().clear().type(quantity)
       
        order.ClickAddtoCart().click()
       cy.wait(5000)
        order.ClickNext().contains('Next').click()
       
    }
}

    GiftCardCheckout(productIds, priorityshipping,giftcardnumbers,giftcardmode, giftcardpin)
    {
        /*  for(let i =0 ;i<productIds.length ;i ++)
        {
            order.VerifyOrderDetails().find('td').eq(3).find('span').contains(productIds[i])
        } */
       
        order.ChooseShippingMethod().click()
        order.SelectShippingMethod().contains(priorityshipping).click()
        
        order.ClickNext().contains('Next').click()
        
        order.ClickNext().contains('Next').click()
       
        
       // let giftcardnumbers = ["60514399466100000708", "60514341529100000714", "60514345271100000722"]
        
        for(let i= 0; i< giftcardnumbers.length ; i++)
        {
            order.AddPaymentMethod().click()
            order.ChoosePaymentType().click()
            order.SelectPaymentType().contains(giftcardmode).click()
            order.EnterGiftCardoken().type(giftcardnumbers[i])
            order.EnterGiftCardPin().type(giftcardpin)
            order.SavePaymentMethod().click()
           
        }

        order.PlaceOrder().click()
       
        order.PlaceOrder().click()
       
        order.VerifyOrderPlaced().should('exist').then((ordernumber) => {

            cy.find('span').eq(1).contains('Order')
            cy.log(ordernumber.text())

        })  

    }
}