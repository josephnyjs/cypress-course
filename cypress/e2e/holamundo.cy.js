describe('Mi primer test',()=>{
    it("Este es mi primer hola mundo en cypress", ()=>{
        cy.log("Bienvenido a cypress")
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get("#wsf-1-label-21").type("Josephny")
        cy.wait(1000)
        cy.get("#wsf-1-label-22").type("Jimenez")
        cy.wait(1000)
        cy.get("#wsf-1-label-23").type("josephny12@gmail.com")
        cy.wait(1000)
        cy.get("#wsf-1-label-24").type("3503980044")
        cy.wait(1000)
        cy.get("#wsf-1-label-28").type("Cra 46C #80 sur 155 Sabaneta")
        cy.wait(1000)
        cy.get("#wsf-1-field-27").click()
        cy.wait(2000)

    })
})