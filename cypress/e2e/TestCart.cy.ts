describe('add item to cart', () => {
    it('should add an item to the cart', () => {
        cy.visit('http://localhost:5173/recipe/specificRecipe/66150f975d2cfae26cf6083e');
        cy.wait(4000)
        cy.get('[data-cy=addButtonToCart]').click({force:true})
    });
});
