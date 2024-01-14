/// <reference types="Cypress" />  

describe("Type PageUP",() => {
  it("Practicign the PageDown", () =>{
      cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
      cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
      cy.log(2000)
      cy.get("#edit-contact-postal-code").type('{pagedown}')
      cy.wait(2000)
  })

  it("Practicign the PageUp", () =>{
    cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
    cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
    cy.log(2000)
    cy.get("#edit-contact-postal-code").type('{pageup}')
    cy.wait(2000)
  })

})
