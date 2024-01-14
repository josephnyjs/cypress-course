/// <reference types="Cypress" />  
require('cypress-plugin-tab')



describe("Type Tab Example",() => {
    it("Type Tab", () =>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.wait(3000)
        //That field 'should' be visible to continue 
        cy.get("#edit-contact-name").should("be.visible").type("Josy").tab().type("Jimenez")
        //That field shouldn't be visible to continue 
        //cy.get("#edit-contact-email").should("be.not.visible")
        cy.get("#edit-contact-phone").should("be.visible").should("be.enabled").type("3503980044")
    })
  })