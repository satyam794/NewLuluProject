/// <reference types="cypress" />
const loc = require("../../locators.json")
import CreateOrder from "../../pageobjects/pageelements/CreateOrder"

export default class CreateOrderActions
{
    constructor(){

        globalThis.order = new CreateOrder();
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
           
        }
    }

    MiniCart(productIds)
    {
        order.ClickMiniCartIcon().click()
       
        for(let i =0 ;i<productIds.length ;i ++)
        {
            order.VerifyMiniCartDetails().eq(i).find('td').eq(2).find('div > div > div > div > span > span').contains(productIds[i])
        }
        order.ClickCheckoutButton().click()
        order.ClickNext().contains('Next').click()
       
        order.ClickNext().contains('Next').click()
        
    } 

    Checkout(productIds, shipping, paymentmode,cardtype, cardname, cardnumber, last4digit, expmonth, expyear)
    {

      /*  for(let i =0 ;i<productIds.length ;i ++)
        {
            order.VerifyOrderDetails().find('td').eq(3).find('span').contains(productIds[i])
        } */
       
        order.ChooseShippingMethod().click()
        order.SelectShippingMethod().contains(shipping).click()
       
        order.ClickOnPromoCodeField().type('HOLIDAY1')
        order.ClickOnApplyButton().click()
        
        order.VerifyPromotion().contains('HOLIDAY1')
        
        order.ClickNext().contains('Next').click()
        
        order.AddPaymentMethod().click()
        order.ChoosePaymentType().click()
        order.SelectPaymentType().contains(paymentmode).click()
        order.ChooseCardType().click()
        order.SelectCardType().contains(cardtype).click()
        order.EnterCardName().type(cardname)
        order.EnterCardoken().type(cardnumber)
        order.EnterCardLast4Digit().type(last4digit)
        order.ChooseExpMonth().click()
        order.SelectExpMonth().contains(expmonth).click({force: true})
        order.ChooseExpYear().click()
        order.SelectExpYear().contains(expyear).click({force: true})
        order.SavePaymentMethod().click()
        cy.wait(10000)
        order.PlaceOrder().click()
        order.VerifyOrderPlaced().should('exist').then((ordernumber) => {

            //cy.find('span').eq(1).contains('Order')
            cy.log(ordernumber.text())

        })  
    }
}