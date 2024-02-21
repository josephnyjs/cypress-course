/// <reference types="Cypress" /> 
import 'cypress-file-upload'

require('cypress-plugin-tab') //for using tab fuction
require('cypress-xpath')  //for using xpath


describe("Uploading images",() => {
  it("Images upload", () => {
      cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html')
      cy.title().should('eq','File Upload Test')
      cy.wait(1000)

      const route = 'IMG_1.jpg' //this image is located y "fixtures" folder
      cy.get('[type="file"]').attachFile(route)

  })
})//describe closes */ 

