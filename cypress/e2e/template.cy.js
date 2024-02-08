/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath


describe("    ",() => {
  it("   ", () => {
      cy.visit('')
      cy.title().should('eq','')
      cy.xpath('')
      cy.wait(1000)

  })
})//describe closes
