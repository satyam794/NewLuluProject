/// <reference types="cypress" />
const loc = require("../../locators.json")
import OrderSearchHomePage from "../pageelements/OrderSearchHomePage"

export default class OrderSearchHomePageActions
{
    constructor(){

        globalThis.searchorder = new OrderSearchHomePage();
    }

    SearchValidOrder(orderno)
    {
        searchorder.ClickHomePageIcon().click()
        searchorder.ChangeEnterprise().click()
        searchorder.SelectEnterprise().contains('lululemon United States').click()
        searchorder.SearchOrder().type(orderno).type('{enter}')
        cy.wait(15000)
        searchorder.VerifyCustomerSection().then((ordersearchsection) => {

            if (ordersearchsection.find(loc.searchorder.orderlabel).length > 0) 
            {
                searchorder.VerifyCustomerSection().find(loc.searchorder.orderlabel).then((orderno) => {
                    cy.log(orderno.text())
                })
            
            } 
            else 
            {
                searchorder.OrderNotFound().then((noorder) => {
                    cy.log(noorder.text())
                 })
            }
    })
}
}