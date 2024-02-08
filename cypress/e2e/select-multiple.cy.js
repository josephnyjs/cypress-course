/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath


describe("Multiple select lesson",() => {
  it("Multiple select", () => {
      cy.visit('http://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
      cy.title('eq','Selenium Easy Demo - Automate All Scenarios')

      cy.get('#multi-select').should('be.visible').select(["California","New York","Washington"])
  })

  //Then option (promise)
  it.only("Multiple select", () => {
    cy.visit('http://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
    cy.title('eq','Selenium Easy Demo - Automate All Scenarios')

    cy.get('#multi-select').should('be.visible').select(["California","New York","Washington"]).then(() => {
      cy.get('#printMe').should('be.visible').click()
    })   
})


})//describe closes
