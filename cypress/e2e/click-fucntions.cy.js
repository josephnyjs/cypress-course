/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction


describe("Click functions",() => {
  it("Simple click", () =>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM')
      cy.wait(3000)

      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.get(".oxd-button").should("be.visible").click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
      cy.wait(2000)
      cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').should("be.visible").click()
      cy.get('.oxd-dropdown-menu > :nth-child(1)').should("be.visible").click()
  })
// This is the force true section - If we want to verificate something is failing
// And you think there's something between and you want yo force the click to be sure the feature is failing
// Use the "click force true"

  it.only("Click force true", () =>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRM')
    cy.wait(3000)

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.get(".oxd-button").should("be.visible").click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
    cy.wait(2000)
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').should("be.visible").click({force: true})
    cy.get('.oxd-dropdown-menu > :nth-child(1)').should("be.visible").click()
})


})
