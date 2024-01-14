/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction


describe("This is the first challenge",() => {
  it("First challenge", () =>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM')
      cy.wait(3000)
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.get(".oxd-button").should("be.visible").click()
      cy.log("Login")
      cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
      //I'm gonna edit some field 
      //cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').should("be.visible").click()
      //cy.get('.oxd-autocomplete-text-input > input').should("be.visible").clear().type("Gaby Eche")
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)').should("be.visible").click()
      cy.get('.oxd-button--label-danger').should("be.visible").click()
      cy.wait(1000)

  
  })
})
