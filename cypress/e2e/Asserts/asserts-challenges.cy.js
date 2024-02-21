/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath


describe("    ",() => {
    it("Assert invoke", () => {
        cy.visit('http://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1000)

        let a = 12
        let b = 14
  
        cy.get('#value1').should('be.visible').and('have.class','form-control').type(a)
        cy.get('#value2').should('be.visible').and('have.class','form-control').type(b)
        cy.contains('[type="button"]','Get Total').click()
        cy.wait(2000)

        cy.get('#displayvalue').should('be.visible').invoke('attr','style','color:pink').then((e)=>{
            let r = a+b
            cy.log(e.text())
            let result = e.text()

            if(r==result){
                cy.log("Right result")
            }else{
                cy.log("Wrong result")
            }

            if(result>=24){
                a=a-4
                b=b-2
                cy.get('#value1').invoke('attr','placeholder').should('contain','Enter value').then(()=>{
                    cy.get('#value1').clear().type(a)
                    cy.get('#value1').invoke('attr','style','color:pink')
                })
                cy.get('#value2').should('be.visible').and('have.class','form-control').clear().type(b)
                cy.contains('[type="button"]','Get Total').click()
                cy.wait(1000)
            }else{
                a=a+5
                b=b+5
                cy.get('#value1').should('be.visible').and('have.class','form-control').clear().type(a)
                cy.get('#value2').should('be.visible').and('have.class','form-control').clear().type(b)
                cy.contains('[type="button"]','Get Total').click()
                cy.wait(1000)
        }
        })
    })
})//describe closes
