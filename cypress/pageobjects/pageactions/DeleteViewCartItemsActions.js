/// <reference types="cypress" />
const loc = require("../../locators.json")
import DeleteViewCartItems from "../../pageobjects/pageelements/DeleteViewCartItems"

export default class DeleteViewCartItemsActions
{
    constructor(){

        globalThis.deleteitem = new DeleteViewCartItems();
    }

    ClickOnCreateOrderLink(enterprise, existingcustomer)
    {
        deleteitem.clickOnCreateOrderLinkonHomePage().contains('Create order').click()
        deleteitem.ChangeEnterprise().click()
        deleteitem.SelectEnterprise().contains(enterprise).click()
        deleteitem.ClickOkOnEnterprise().contains('OK').click()
       
        deleteitem.SearchExistingCustomer().type(existingcustomer).type('{enter}')
        deleteitem.SelectExistingCustomer().contains(existingcustomer).click()
       
        deleteitem.AsserttheSelectedCustomer().should('contain.text',existingcustomer)
       
    }

    AddShippingAddress(addresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
        deleteitem.PresenseofShippingAddress().then(($element) => {
            if($element.find(loc.createorder.displayshipping).length > 0)
            {
                $element.find(loc.createorder.displayshipping).click()
            } 
            else
            {
                deleteitem.ClickEditIconShippingAddress().click()
               
                deleteitem.AddAddressType().type(addresstype)
                deleteitem.FirstName().type(fname)
                deleteitem.LastName().type(lname)
                deleteitem.PhoneNumber().type(phone)
                deleteitem.EmailID().type(emailid)
                deleteitem.addAddress1().type(address1)
                deleteitem.addAddress2().type(address2)
                deleteitem.addCity().type(city)
                deleteitem.addPostalCode().type(zipcode)
                deleteitem.enterCountry().type(country)
                deleteitem.selectCountry().each(($getallcountries) => {
                    if($getallcountries.text() == country)
                        {
                            cy.wrap($getallcountries).click()
                        }
                })
                
                deleteitem.enterState().type(state)
                deleteitem.selectState().should('have.text', state).click()
                deleteitem.SaveShippingAddress().click()
              
            }
        })
      
    }
    AddBillingAddress(billingaddresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
        deleteitem.PresenseofBillingAddress().then(($element) => {
            if($element.find(loc.createorder.displaybilling).length > 0)
            {
                $element.find(loc.createorder.displaybilling).click()
                deleteitem.ClickCreateOrderNext().click()
            } 
            else
            {
                deleteitem.ClickEditIconBillingAddress().click()
       
        deleteitem.AddAddressType().type(billingaddresstype)
        deleteitem.FirstName().type(fname)
        deleteitem.LastName().type(lname)
        deleteitem.PhoneNumber().type(phone)
        deleteitem.EmailID().type(emailid)
        deleteitem.addAddress1().type(address1)
        deleteitem.addAddress2().type(address2)
        deleteitem.addCity().type(city)
        deleteitem.addPostalCode().type(zipcode)
        deleteitem.enterCountry().type(country)
        deleteitem.selectCountry().each(($getallcountries) => {
            if($getallcountries.text() == country)
                {
                    cy.wrap($getallcountries).click()
                }
        }) 
       
        deleteitem.enterState().type(state)
        deleteitem.selectState().should('have.text', state).click()
        
        deleteitem.SavebillingAddress().contains('Save').click()
       
        deleteitem.ClickCreateOrderNext().click()
        }
    })
}

    AddProductstoCart(productIds, quantity)
    {
        for(let i =0 ; i<productIds.length ; i++)
        {
            if(i>0)
            {
                deleteitem.SearchProduct().clear()
            }
            deleteitem.SearchProduct().type(productIds[i]).type('{enter}')
            
            deleteitem.ChangeQuantity().clear().type(quantity)
          
            deleteitem.ClickAddtoCart().click()
            cy.wait(5000)
        }
    }


    ViewMiniCartandDeleteItems()
    {
        deleteitem.ClickMiniCartIcon().click()
        deleteitem.SelectProducts().check({force:true})
       
        deleteitem.ClickOnRemoveLineItem().click()
      
        deleteitem.ClickOnYesButton().contains(' Yes ').click()
        
        deleteitem.VeriryNoResultFound().should('have.text', 'No results found') 
    } 
}