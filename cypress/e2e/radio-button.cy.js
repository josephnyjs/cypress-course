/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath


describe("    ",() => {
  it("   ", () =>{
      cy.visit('https://rodrigovillanueva.com.mx/form/example-accessibility-advanced')
      cy.title().should('eq','Example: Accessibility Advanced | RodrigoVillanueva.com.mx')
      cy.get('#edit-webform-radios-other-radios-three').click()
      cy.wait(1000)


  })
})//describe closes
