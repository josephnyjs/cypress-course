/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')


describe("Checkbox class",() => {
  it("Check one", () =>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM')
      cy.wait(1000)

      cy.xpath('//*[@id="app"]//form/div[1]/div/div[2]/input').type('Admin').tab().type('admin123')
      cy.xpath("//BUTTON[@type='submit']").should('be.visible').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click()

    //checkbox
    cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
      

  })
})//describe closes
