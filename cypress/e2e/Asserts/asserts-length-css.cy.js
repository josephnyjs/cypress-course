/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath


describe("Asserts lessons - length",() => {
  it("Length - css", () => {
      cy.visit('http://demo.seleniumeasy.com/table-pagination-demo.html')
      cy.title().should('eq','Selenium Easy - Table with Pagination Demo')

      cy.get('#myTable >tr >td').should('have.length',91).and('have.css','font-weight', '600') //validate the css

  })
  //NOTE: tr=>Rows, td=>fields of the table

  it.only("Length - css", () => {
    let time = 1500

    cy.visit('http://demo.seleniumeasy.com/basic-first-form-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
    cy.wait(time)

    cy.get('.form-group > #user-message').should('be.visible').type('Course content')
    cy.contains('[type="button"]','Show Message').should('be.visible').click()

})

})//describe closes



