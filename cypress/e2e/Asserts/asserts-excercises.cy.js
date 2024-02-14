/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath


describe("Asserts",() => {
  it("Assert contains", () => {
      cy.visit('https://www.automationexercise.com/')
      cy.title().should('eq','Automation Exercise')
      cy.wait(1000)

      cy.get('#accordian').contains('Women').click()
  })

  it("Assert find-eq", () => {
      cy.visit('https://www.automationexercise.com/')
      cy.get('.product-image-wrapper').find('.choose').eq(2).click()
  })


})//describe closes
