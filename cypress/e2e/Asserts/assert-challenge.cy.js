/// <reference types="Cypress" /> 

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath


describe("Asserts challenge",() => {
  it("Assert new article", () => {
      cy.visit('https://www.automationexercise.com/')
      cy.title().should('eq','Automation Exercise')
      cy.wait(1000)

      cy.get('.product-image-wrapper').find('.choose').eq('1').click()
      
      cy.get('.product-information > :nth-child(7)').then((c) =>{
        cy.log(c.text())  //2
        let condition = c.text()        // declare a variable to saver the value of c.text() to print it usin log
        cy.log(condition)
        if(condition=='Condition: New'){
            cy.log('The Article is new')
        }
      })

      cy.get(':nth-child(5) > span').then((p) =>{
        cy.log(p.text())
        let price = p.text()
        price = price.slice(4,6)  //1
        cy.log(price) //print just to double check
        if(price>=50){
            cy.log('It is expensive')
        }else{
            cy.log('You can buy it')
            cy.get(':nth-child(5) > .btn').click()
        }

      })


  })
//NOTES:
// 1: //slice is a JS Function to take the spaces you want (quit the "RS. " and get just the price)
// 2: JQuery function paramete.text() => i.e "c.text()" shows you what the element has = Condition: text for example
})

//El ejercicio es: Seleccionar un artículo, si este articulo tiene la condicion de "Nuevo" 
//entonces imprimir en la consola que el artículo es nuevo
//También se debe validar el precio. Si el vestido Cuesta igual o mas de 50, mostrar "no se puede comoprar"
// Sino enotnces se puede comprar y agregar al carrito