/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction


describe("Selectors update",() => { 
  it("SU", () =>{
      cy.visit("https://demoqa.com/automation-practice-form")
      cy.title().should('eq','DEMOQA')
      cy.wait(3000)

      cy.get("input#firstName").type("Josu")

  })
})
