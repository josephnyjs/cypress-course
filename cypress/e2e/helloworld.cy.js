
describe("Test w cypress", () => {
    it("This is a hellowordl in cypress", () =>{
        cy.log("Enetering to first describe")
        cy.visit("https://testingqarvn.com.es/datos-personales/")

        cy.get("#wsf-1-field-21").type("Josy")
        cy.wait(3000)
        cy.get("#wsf-1-field-22").type("Jimenez")
        cy.wait(3000)
        cy.get("#wsf-1-field-23").type("Josy@yopmail.com")
        cy.wait(3000)
        cy.get("#wsf-1-field-24").type("+3503980044")
        cy.wait(3000)
        cy.get("#wsf-1-field-28").type("Address")
        cy.get("#wsf-1-field-27").click()
        cy.wait(3000)


    })  
})