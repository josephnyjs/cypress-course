/// <reference types="Cypress" />  

describe(" type functions   ",() => {
  it(" type -- > enter lesson", () =>{ //cuando se presiona enter 
      cy.visit("https://www.google.com/")
      cy.title().should('eq','Google')
      cy.wait(3000)
      cy.get("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc").type("Cypress io {enter}")
      cy.wait(2000)
      cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click() //For id use #, for class use . 
      

  })
})
