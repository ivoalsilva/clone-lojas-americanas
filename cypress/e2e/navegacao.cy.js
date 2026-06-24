describe("Navegação", () => {
  it("a home mostra as categorias", () => {
    cy.visit("/");
    cy.contains("Bebidas").should("be.visible");
  });
  it("clicar em bebidas mostra os produtos da categoria" , () => {
    cy.visit("/");
    cy.contains("Bebidas").click();
    cy.url().should("include" , "/categoria/bebidas");
    cy.contains("Nescau").should("be.visible");
  });
  it("categoria inexistente mostra a pagina 404" , () => {
    cy.visit("/categoria/banana" , {failOnStatusCode: false });
    cy.contains("Página não encontrada").should("be.visible");
  });
});