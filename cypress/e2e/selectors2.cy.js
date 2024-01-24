/// <reference types="Cypress" /> 

require('cypress-xpath')

describe("Selectors ID",() => {
  it("Selectors by attribute", () =>{
      cy.visit("https://www.saucedemo.com/v1/")
      cy.title().should('eq','Swag Labs')
      cy.wait(1000)

      cy.get("[placeholder='Username']").should("be.visible").type("standard_user")
      cy.get('[placeholder="Password"]').should("be.visible").type("secret_sauce")
      cy.get("#login-button").should("be.visible").click()
  })

  it("Selectors by XPath", () =>{
    cy.visit("https://www.saucedemo.com/v1/")
    cy.title().should('eq','Swag Labs')
    cy.wait(1000)

    cy.xpath('//*[@id="user-name"]').type("standard_user")
    cy.get('[placeholder="Password"]').should("be.visible").type("secret_sauce")
    cy.get("#login-button").should("be.visible").click()
})

})
