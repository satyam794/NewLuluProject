/// <reference types="cypress" />

import EditFulfillmentPage from "../../pageobjects/pageelements/EditFulfillmentPage"

export default class EditFulfillmentPageActions
{
    constructor(){

        globalThis.editfulfilment = new EditFulfillmentPage();
        
    }

    ClickOnCreateOrderLink(enterprise, existingcustomer)
    {
        editfulfilment.clickOnCreateOrderLinkonHomePage().contains('Create order').click()
        editfulfilment.ChangeEnterprise().click()
        editfulfilment.SelectEnterprise().contains(enterprise).click()
        editfulfilment.ClickOkOnEnterprise().contains('OK').click()
       
        editfulfilment.SearchExistingCustomer().type(existingcustomer).type('{enter}')
        editfulfilment.SelectExistingCustomer().contains(existingcustomer).click()
       
        editfulfilment.AsserttheSelectedCustomer().should('contain.text',existingcustomer)
       
    }

    AddShippingAddress(addresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
        editfulfilment.ClickEditIconShippingAddress().click()
       
        editfulfilment.AddAddressType().type(addresstype)
        editfulfilment.FirstName().type(fname)
        editfulfilment.LastName().type(lname)
        editfulfilment.PhoneNumber().type(phone)
        editfulfilment.EmailID().type(emailid)
        editfulfilment.addAddress1().type(address1)
        editfulfilment.addAddress2().type(address2)
        editfulfilment.addCity().type(city)
        editfulfilment.addPostalCode().type(zipcode)
        editfulfilment.enterCountry().type(country)
        editfulfilment.selectCountry().each(($ele) => {
            if($ele.text() == country)
                {
                    cy.wrap($ele).click()
                }
        })
       
        editfulfilment.enterState().type(state)
        editfulfilment.selectState().should('have.text', state).click()
        editfulfilment.SaveShippingAddress().click()
        
    }

    AddBillingAddress(billingaddresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
        editfulfilment.ClickEditIconBillingAddress().click()
        
        editfulfilment.AddAddressType().type(billingaddresstype)
        editfulfilment.FirstName().type(fname)
        editfulfilment.LastName().type(lname)
        editfulfilment.PhoneNumber().type(phone)
        editfulfilment.EmailID().type(emailid)
        editfulfilment.addAddress1().type(address1)
        editfulfilment.addAddress2().type(address2)
        editfulfilment.addCity().type(city)
        editfulfilment.addPostalCode().type(zipcode)
        editfulfilment.enterCountry().type(country)
        editfulfilment.selectCountry().each(($ele) => {
            if($ele.text() == country)
                {
                    cy.wrap($ele).click()
                }
        }) 
       
        editfulfilment.enterState().type(state)
        editfulfilment.selectState().should('have.text', state).click()
      
        editfulfilment.SavebillingAddress().contains('Save').click()
        
        editfulfilment.ClickCreateOrderNext().click()
    }

    AddProductstoCart(productIds, quantity)
    {
        for(let i =0 ; i<productIds.length ; i++)
        {
            if(i>0)
            {
                order.SearchProduct().clear()
            }
            editfulfilment.SearchProduct().type(productIds[i]).type('{enter}')
           
            editfulfilment.ChangeQuantity().clear().type(quantity)
            
            editfulfilment.ClickAddtoCart().click()
           
            editfulfilment.ClickNext().contains('Next').click()
            
        }
    }

    GotoFulfillmentShippingSection()
    {
        editfulfilment.ExpandShippingSection().click()
        editfulfilment.EditFulfillmentShippingIcon().eq(0).click()
    } 

    UpdateShippingDetails(addresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
        editfulfilment.AddAddressType().type(addresstype)
        editfulfilment.FirstName().type(fname)
        editfulfilment.LastName().type(lname)
        editfulfilment.PhoneNumber().type(phone)
        editfulfilment.EmailID().type(emailid)
        editfulfilment.addAddress1().type(address1)
        editfulfilment.addAddress2().type(address2)
        editfulfilment.addCity().type(city)
        editfulfilment.addPostalCode().type(zipcode)
        editfulfilment.enterCountry().type(country)
        editfulfilment.selectCountry().each(($ele) => {
            if($ele.text() == country)
                {
                    cy.wrap($ele).click()
                }
        })
        
        editfulfilment.enterState().type(state)
        editfulfilment.selectState().should('have.text', state).click()
        editfulfilment.SaveShippingAddress().click()
       
        editfulfilment.FullfillmentEditShippingIcon().click()
       
    }

    AddNewAddress(addresstype, fname, lname, phone, emailid, address1, address2, city, zipcode, country, state)
    {
        editfulfilment.AddAddressType().type(addresstype)
        editfulfilment.FirstName().type(fname)
        editfulfilment.LastName().type(lname)
        editfulfilment.PhoneNumber().type(phone)
        editfulfilment.EmailID().type(emailid)
        editfulfilment.addAddress1().type(address1)
        editfulfilment.addAddress2().type(address2)
        editfulfilment.addCity().type(city)
        editfulfilment.addPostalCode().type(zipcode)
        editfulfilment.enterCountry().type(country)
        editfulfilment.selectCountry().each(($ele) => {
            if($ele.text() == country)
                {
                    cy.wrap($ele).click()
                }
        })
        editfulfilment.enterState().type(state)
        editfulfilment.selectState().should('have.text', state).click()
        editfulfilment.SaveShippingAddress().click()
    }


    DeleteLineItems(sku1)
    {
        editfulfilment.ExpandShippingSection().click()
        editfulfilment.SelectProducts(sku1).check({force:true})
        editfulfilment.ClickOnRemoveLineItem().click()
        editfulfilment.ClickOnYesButton().click()
    }

    GoToNotesTab()
    {
        editfulfilment.ClickOnNotesTab().click();
        editfulfilment.ClickOnAddNotes().contains(' Add note ').click()
        editfulfilment.EnterNoteType().type('Order Cancellation Information').type('{enter}')
        editfulfilment.EnterContactType().type('E-Mail').type('{enter}')
        editfulfilment.EnterContactReference().type('test reference')
        editfulfilment.EnterNotes().type('ENter test notes')
        editfulfilment.SaveNotes().click()
        editfulfilment.VerifyNotes().should('exist')
    }

}