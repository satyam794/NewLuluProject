
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })

  Cypress.Commands.add('clickLink', (label) => {
    cy.get('button').contains(label).click();
})

Cypress.Commands.add('getIframe',() => {
  return cy.get('#omsi-iframe').its('0.contentDocument.body').then(cy.wrap)
})


  