/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')


describe("Second challenge",() => {
  it("test application", () =>{
      cy.visit("https://computer-database.gatling.io/computers")
      cy.title().should('eq','Computers database')
      cy.wait(1000)

      //searching
      cy.xpath('//INPUT[@id="searchbox"]').should("be.visible").type("ACE") //Using relative xpath
      cy.get('#searchsubmit').should("be.visible").click()  //using id "#"

      //Adding
      cy.xpath("//A[@id='add']").should("be.visible").click()
      cy.get('#name').should('be.visible').type("ABACO")
      cy.get('#introduced').should('be.visible').type('1990-06-09').tab().type('2000-09-04')
      //Combo box select
      cy.get('#company').should('be.visible').select("Nokia").should('have.value','16').wait(1500) //using asserts validations 
      cy.xpath('//INPUT[@type="submit"]').should('be.visible').click()
      //Lets find the element added

      cy.xpath('//INPUT[@id="searchbox"]').should("be.visible").type("ABACO") //Using relative xpath
      cy.get('#searchsubmit').should("be.visible").click()

  })
})


 