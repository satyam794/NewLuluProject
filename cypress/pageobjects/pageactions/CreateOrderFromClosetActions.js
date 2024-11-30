/// <reference types="cypress" />

import CreateOrderFromCloset from "../pageelements/CreateOrderFromCloset";

export default class CreateOrderFromClosetActions
{
    constructor(){

        globalThis.createorder = new CreateOrderFromCloset();
    }

    GoToCustomerPage(enterprise, seacrhguestcustomer)
    {
        createorder.GoToHomePage().click()
        createorder.ChangeEnterprise().click()
        createorder.SelectEnterprise().contains(enterprise).click()
        createorder.SearchCustomer().type(seacrhguestcustomer).type('{enter}')
        cy.wait(20000)
    }

    GoToClosetTab()
    {
        createorder.ClickOnClosetTab().contains(' Closet ').click()
        cy.wait(10000)
        createorder.ClickOnBuyAgainButton().each((ele, index, list) => {
            cy.wrap(ele).within(() => {
                cy.get('td').eq(10).find('div > ibm-icon-add').click()
                cy.wait(10000)
                    })
                })
            }
    }