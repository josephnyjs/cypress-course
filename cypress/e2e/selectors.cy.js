/// <reference types="Cypress" /> 

require('cypress-xpath')

describe("Selectors ID",() => {
  it("Selectors", () =>{
      cy.visit("https://www.demoblaze.com/index.html")
      cy.title().should('eq','STORE')
      cy.wait(1000)

      cy.get("#navbarExample > ul > li:nth-child(2) > a").should("be.visible").click()
      cy.get('#recipient-email').should("be.visible").click().wait(1000).type("josephny12@gmail.com")
      cy.get('#recipient-name').should("be.visible").click().wait(1000).type("Josephny")
  })
})
