/// <reference types="Cypress" />  

describe("Type PageUP",() => {

  // When you have so much tests running and you only want one test
  //you can use the 'only' function

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

  it("Practicign the PageUp", () =>{
    cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
    cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
    cy.log(2000)
    cy.get("#edit-contact-postal-code").type('{pageup}')
    cy.wait(2000)
  })

  it("Practicign the PageUp", () =>{
    cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
    cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
    cy.log(2000)
    cy.get("#edit-contact-postal-code").type('{pageup}')
    cy.wait(2000)
  })

  it("Practicign the PageUp", () =>{
    cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
    cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
    cy.log(2000)
    cy.get("#edit-contact-postal-code").type('{pageup}')
    cy.wait(2000)
  })

  it("Practicign the PageUp", () =>{
    cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
    cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
    cy.log(2000)
    cy.get("#edit-contact-postal-code").type('{pageup}')
    cy.wait(2000)
  })

  it.only("Practicign the PageUp", () =>{
    cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
    cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
    cy.log(2000)
    cy.get("#edit-contact-postal-code").type('{pageup}')
    cy.wait(2000)
  })
})
