/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath


describe("Select challenge section",() => {
  it("Select challenge", () => {
      cy.visit('http://demo.seleniumeasy.com/jquery-dual-list-box-demo.html')
      cy.title().should('eq','Selenium Easy - JQuery Dual List Box Demo')
      cy.xpath('//*[@id="pickList"]/div/div[1]/select').select(["Luiza","Manuela","Giovanna"]).then(() => {
          cy.log('Elements were selected')
          cy.get('.pAdd').should('be.visible').click().then(() => {
            cy.wait(1000)
              cy.log('then the elementes were added')
              cy.wait(1000)
              cy.get('.pAddAll').should('be.visible').click().then(() => {
                cy.log('then we added all the elements') 
                cy.wait(1000)
                cy.get('.pRemoveAll').should('be.visible').click()
                cy.log('All the elements were removed')
          })
        })
      })
      cy.wait(1000)

  })
})//describe closes
