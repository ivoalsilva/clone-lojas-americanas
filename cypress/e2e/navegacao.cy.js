describe("Navegação", () => {
  it("a home mostra as categorias", () => {
    cy.visit("/");
    cy.contains("Bebidas").should("be.visible");
  });
  it("clicar em bebidas mostra os produtos da categoria" , () => {
    cy.visit("/");
    cy.contains("Bebidas").should("be.visible").click();
    cy.url().should("include" , "/categoria/bebidas");
    cy.contains("Nescau").should("be.visible");
  });
  it("categoria inexistente mostra a pagina 404" , () => {
    cy.visit("/categoria/banana" , {failOnStatusCode: false });
    cy.contains("Página não encontrada").should("be.visible");
  });
  it("clicar em um produto abre a página de detalhe", () => {
    cy.visit("/categoria/bebidas");
    cy.get('a[href^="/produto/"]').first().should("be.visible").click();
    cy.url().should("include", "/produto/");
    cy.contains("Comprar").should("be.visible");
  });
  it("produto inexistente mostra a página 404", () => {
    cy.visit("/produto/9999", {failOnStatusCode: false});
    cy.contains("Página não encontrada").should("be.visible");
  })
});