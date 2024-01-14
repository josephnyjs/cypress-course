/// <reference types="Cypress" />  

require('cypress-plugin-tab')

describe("Type Tab Example",() => {
  it("Type Tab", () =>{
      cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
      cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
      cy.wait(3000)
      cy.get('#edit-contact-name').type("Josy").tab().type("Jimenez").tab().type("josephny12@gmail.com")
    
  })

})
