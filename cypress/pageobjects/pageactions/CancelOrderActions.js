/// <reference types="cypress" />
const loc = require("../../locators.json")
import CancelOrder from "../pageelements/CancelOrder";

export default class CancelOrderActions
{
    constructor(){

        globalThis.cancel = new CancelOrder();
    }

    ClickOnCreateOrderLink(enterprise, existingcustomer)
    {
        cancel.clickOnCreateOrderLinkonHomePage().contains('Create order').click()
        cancel.ChangeEnterprise().click()
        cancel.SelectEnterprise().contains(enterprise).click()
        cancel.ClickOkOnEnterprise().contains('OK').click()
        cancel.SearchExistingCustomer().type(existingcustomer).type('{enter}')
        
        cancel.SelectExistingCustomer().contains(existingcustomer).click()
       
        cancel.AsserttheSelectedCustomer().should('contain.text',existingcustomer)
       
    }

    AddShippingAddress(addresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
            cancel.PresenseofShippingAddress().then(($element) => {
            if($element.find(loc.createorder.displayshipping).length > 0)
            {
                $element.find(loc.createorder.displayshipping).click()
            } 
            else
            {
                cancel.ClickEditIconShippingAddress().click()
                cy.wait(2000)
                cancel.AddAddressType().type(addresstype)
                cancel.FirstName().type(fname)
                cancel.LastName().type(lname)
                cancel.PhoneNumber().type(phone)
                cancel.EmailID().type(emailid)
                cancel.addAddress1().type(address1)
                cancel.addAddress2().type(address2)
                cancel.addCity().type(city)
                cancel.addPostalCode().type(zipcode)
                cancel.enterCountry().type(country)
                cancel.selectCountry().each(($getallcountries) => {
                    if($getallcountries.text() == country)
                        {
                            cy.wrap($getallcountries).click()
                        }
                })
               
                cancel.enterState().type(state)
                cancel.selectState().should('have.text', state).click()
               
                cancel.SaveShippingAddress().click()
                
            }
        })
      
    }
    AddBillingAddress(billingaddresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
        cancel.PresenseofBillingAddress().then(($element) => {
            if($element.find(loc.createorder.displaybilling).length > 0)
            {
                $element.find(loc.createorder.displaybilling).click()
                cancel.ClickCreateOrderNext().click()
            } 
            else
            {
        cancel.ClickEditIconBillingAddress().click()
      
        cancel.AddAddressType().type(billingaddresstype)
        cancel.FirstName().type(fname)
        cancel.LastName().type(lname)
        cancel.PhoneNumber().type(phone)
        cancel.EmailID().type(emailid)
        cancel.addAddress1().type(address1)
        cancel.addAddress2().type(address2)
        cancel.addCity().type(city)
        cancel.addPostalCode().type(zipcode)
        cancel.enterCountry().type(country)
        cancel.selectCountry().each(($getallcountries) => {
            if($getallcountries.text() == country)
                {
                    cy.wrap($getallcountries).click()
                }
        }) 
       
        cancel.enterState().type(state)
        cancel.selectState().should('have.text', state).click()
        
        cancel.SavebillingAddress().contains('Save').click()
       
        cancel.ClickCreateOrderNext().click()
        }
    })
}

    AddProductstoCart(productIds, quantity)
    {
        for(let i =0 ; i<productIds.length ; i++)
        {
            if(i>0)
            {
                cancel.SearchProduct().clear()
            }
            cancel.SearchProduct().type(productIds[i]).type('{enter}')
           
            cancel.ChangeQuantity().clear().type(quantity)
            cancel.ClickAddtoCart().click()
            cy.wait(5000)
            cancel.ClickNext().contains('Next').click()
            
        }
    }

    Checkout(productIds, shipping, paymentmode,cardtype, cardname, cardnumber, last4digit, expmonth, expyear)
    {

      /*  for(let i =0 ;i<productIds.length ;i ++)
        {
            cancel.VerifyOrderDetails().find('td').eq(3).find('span').contains(productIds[i])
        } */
       
        cancel.ChooseShippingMethod().click()
        cancel.SelectShippingMethod().contains(shipping).click()
        
        cancel.ClickNext().contains('Next').click()
       
        cancel.AddPaymentMethod().click()
        cancel.ChoosePaymentType().click()
        cancel.SelectPaymentType().contains(paymentmode).click()
        cancel.ChooseCardType().click()
        cancel.SelectCardType().contains(cardtype).click()
        cancel.EnterCardName().type(cardname)
        cancel.EnterCardoken().type(cardnumber)
        cancel.EnterCardLast4Digit().type(last4digit)
        cancel.ChooseExpMonth().click()
        cancel.SelectExpMonth().contains(expmonth).click({force: true})
        cancel.ChooseExpYear().click()
        cancel.SelectExpYear().contains(expyear).click({force: true})
        cancel.SavePaymentMethod().click()
        cy.wait(5000)
        cancel.PlaceOrder().click()
        
        cancel.VerifyOrderPlaced().should('exist').then((ordernumber) => {

            //cy.find('span').eq(1).contains('Order')
            cy.log(ordernumber.text())
            cy.wait(3000)
        })  
    }

    CancelOrder()
    {
        cancel.SelectProducts().check({force:true})
        cancel.ClickOnCancelButton().click()
        cancel.TypeReason().type('Duplicate Order').type('{enter}')
        cancel.SelectReason().each((reasons) => {
            if(reasons.text() == 'Duplicate order')
            {
                cy.wrap(reasons).click()
            }
        })
        cancel.AddComment().type('Received the duplicate order')
        cancel.ClickCancelOrderNext().click()
        cy.wait(2000)
        cancel.ConfirmCancel().click()
        cy.wait(6000)
        cancel.SubmitRefund().click()
        cy.wait(5000)
        cancel.VerifyOrderCancelStatus().then((cancelstatus)=> {
            cy.log(cancelstatus.text())
        })
    }
}