/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')


describe("Checkbox class",() => {
  it("Check one", () =>{
      cy.visit('https://rodrigovillanueva.com.mx/form/example-accessibility-advanced')
      cy.get('[type="checkbox"]').check()
      cy.wait(3000)
      cy.get('[type="checkbox"]').uncheck()
  })

  it.only("Check by selection", () => {
    cy.visit('https://rodrigovillanueva.com.mx/form/example-accessibility-advanced')
    cy.title().should('eq','Example: Accessibility Advanced | RodrigoVillanueva.com.mx')
    cy.wait(2000)

    cy.get('#edit-webform-checkboxes-other-checkboxes-three').check().should('be.checked')
    cy.xpath('//*[@id="edit-webform-tableselect-sort-one-checkbox"]').check().should('be.checked')
  })

})//describe closes
