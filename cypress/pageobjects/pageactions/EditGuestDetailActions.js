/// <reference types="cypress" />

import EditGuestDetails from "../pageelements/EditGuestDetails";

export default class EditGuestDetailActions
{
    constructor(){

        globalThis.editguest = new EditGuestDetails();
    }

    SearchfortheGuest(enterprise,seacrhguestcustomer)
    {
        editguest.GoToHomePage().click()
        editguest.ChangeEnterprise().click()
        editguest.SelectEnterprise().contains(enterprise).click()
        editguest.SearhCustomer().type(seacrhguestcustomer).type('{enter}')
       // cy.wait(25000)
    }

    EditSurNameandPhone(editsurname, editphone)
    {
        editguest.ClickonGuestEditIcon().click()
        editguest.EditSurName().clear().type(editsurname)
        editguest.EditPhoneNumber().clear().type(editphone)
        editguest.clickOnSaveButton().contains(' Save ').click();
    }

}