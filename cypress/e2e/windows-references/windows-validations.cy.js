/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath



describe("windows references",() => {
    it("1st windows charset property", () => {
        cy.visit('https://testsheepnz.github.io/random-number.html')
        cy.title().should('eq','The Number Game') //windows validation reference
        cy.wait(1000)
  
        cy.document().should('have.property','charset').and('eq','UTF-8') //windows validation reference
  
    })

    it("URL Validation", () => {
        cy.visit('https://testsheepnz.github.io/random-number.html')
        cy.title().should('eq','The Number Game') //windows validation reference
        cy.wait(1000)
  
        cy.url().should('include','random-number.html') //URL includes that fragment on it
        cy.url().should('eq','https://testsheepnz.github.io/random-number.html') //validates the entire URL
  
    })
  })
  
  