/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath


describe("Asserts lessons",() => {
  it("assert have_contain text", () => {
      cy.visit('https://rodrigovillanueva.com.mx/form/contact')
      cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')

      cy.get('#edit-name').should('be.visible').type('Josephny')
      cy.get('#edit-email').should('be.visible').type('josephny12@gmail.com')
      cy.get('#edit-container > .js-form-type-textfield > .js-form-required').should('have.text','Your Name') //works completely
      cy.get('#edit-container > .js-form-type-textfield > .js-form-required').should('contain.text','Name') //Funciona con un pedacito


  })


  it.only("have_contain text + then", () => {
    cy.visit('https://rodrigovillanueva.com.mx/form/contact')
    cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')

    cy.get('#edit-name').should('be.visible').type('Josephny')
    cy.get('#edit-name').should('contain.value','Joseph').then(() => { //Value cause it runs after populate the input 
        cy.log('It contains the text')
    })
    //DOUBLE VALIDATION
    cy.get('#edit-name').should('be.visible').should('have.class','form-text').then(()=>{
        cy.log('It contains the class')
    })
    
})

})//describe closes
