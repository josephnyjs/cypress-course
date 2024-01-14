describe("1st Section - Validate user",() => {
  it("Validating the title", () =>{
      cy.visit("https://rodrigovillanueva.com.mx/")
      cy.title().should('eq','Home Page | RodrigoVillanueva.com.mx') //'Sholud' function - 'eq' text equal

      cy.log("Ok, that fuction is working")
  })
})
