/* global describe, it, cy */

describe("Filigram", function() {
  it("para ver si la app funciona", function() {
    cy.visit("/")
  })

  it("navegamos a una categoría y vemos fotos", function() {
    cy.visit("/pet/1")
    cy.get("article")
  })

  it("si podemos navegar con la navbar al home", function() {
    {
      cy.visit("/pet/1");
      cy.get("nav a").first().click();
      cy.url().should("include", "/")
    }
  });

  it("los usuarios no registrados ven el formulario de registo e inicio de sesión al ir a favs", function() {
    cy.visit("/favs");
    cy.get("form").should("have.length", 2);
  });
})