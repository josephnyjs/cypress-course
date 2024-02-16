/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath


describe("    ",() => {
    it.only("have_contain text + then", () => {
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
    
        //DOUBLE VALIDATION
        cy.get('#edit-name').should('be.visible').and('have.class','form-text').then(()=>{
            cy.log('It contains the class')
        })
        
    })
})//describe closes
