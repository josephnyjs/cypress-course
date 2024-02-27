/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath
require('@4tw/cypress-drag-drop') //for using drag and drop plugin


describe("Mouse events",() => {
  it("Drag and drop event", () => {
    let time = 1000
      cy.visit('https://www.globalsqa.com/demo-site/draganddrop/')
      // cy.title().should('eq','Drag And Drop - GlobalSQA')
      cy.wait(time)
      //install plugin for 'cypress drag and drop' 
      

  })
})//describe closes */ 