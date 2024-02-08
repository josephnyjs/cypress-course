/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath


describe("Selects section",() => {

  it("Select v1", () => {
      cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
      cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
      
      cy.xpath('//*[@id="edit-contact-name"]').should('be.visible').type('Josy Jiménez')
      cy.xpath('//*[@id="edit-contact-email"]').should('be.visible').type('josephny12@gmail.com')
      cy.xpath('//*[@id="edit-contact-phone"]').should('be.visible').type('+57 350 3980044')
      cy.xpath('//*[@id="edit-contact-address"]').should('be.visible').type('Cra 46C #80 sur 155')
      cy.xpath('//*[@id="edit-contact-address-2"]').should('be.visible').type('Unidad res. Amonte')
      cy.xpath('//*[@id="edit-contact-city"]').should('be.visible').type('Sabaneta')
      cy.wait(2000)
      //Select
      cy.get('#edit-contact-state-province').should('be.visible').select('Arkansas')

      cy.get('#edit-contact-postal-code').type('540450')
      //Select
      cy.get('#edit-contact-country').should('be.visible').select('Colombia').should('have.value','Colombia') //confirming that it is the same value (validating the field)
  })



  /*it('select autocomplete', () => {
      cy.visit('https://www.google.com/?hl=es')
      cy.title('eq','Google')
      cy.xpath('//*[@id="APjFqb"]').should('be.visible').type('Dog').type('{enter}')
  })*/

})//describe closes
