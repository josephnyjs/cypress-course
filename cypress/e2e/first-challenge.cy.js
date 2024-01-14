/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction


describe("This is the first challenge",() => {
  it("First challenge", () =>{
      cy.visit("https://rodrigovillanueva.com.mx/form/contact")
      cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
      cy.wait(1000)

      cy.get('#edit-name').should("be.visible").type("Josy")
      cy.wait(1000)
      cy.get('#edit-name').should("be.visible").clear()


      //Second part of the challenge
      cy.wait(2000)
      cy.get('#edit-name').should("be.visible").type("Josephny Jimenez")
      cy.get('#edit-email').should("be.visible").type("josephny12@gmail.com")
      cy.get('#edit-subject').should("be.visible").type("this is the subject").tab().type("And this is the final message")
      cy.get('#edit-actions-submit').should("be.enabled").click()

  })
})
