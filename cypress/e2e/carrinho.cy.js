describe("carrinho", () => {
    it("adicionar produto reflete no badge", () => {
        cy.visit("/categoria/bebidas");
        cy.get('[aria-label="adicionar ao carrinho"]').first().should("be.visible").click();
        cy.contains("1").should("be.visible");
    });
    it("item aparece na pagina do carrinho", () => {
        cy.visit("/categoria/bebidas");
        cy.get('[aria-label="adicionar ao carrinho"]').first().should("be.visible").click();
        cy.get('a[href="/carrinho"]').click();
        cy.contains("Nescau").should("be.visible");
    });
    it("remover tira o item do carrinho" , () => {
        cy.visit("/categoria/bebidas");
        cy.get('[aria-label="adicionar ao carrinho"]').first().should("be.visible").click();
        cy.get('a[href="/carrinho"]').click();
        cy.get('[aria-label="remover item"]').click();
        cy.contains("Nescau").should("not.exist");
        
    })
});