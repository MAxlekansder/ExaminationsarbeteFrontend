describe('add item to cart', () => {
    it('should add an item to the cart', () => {
        // Handle uncaught exceptions
        cy.on('uncaught:exception', (err) => {
            console.error('Uncaught exception:', err.message);
            return false;
        });

        // Visit the specific recipe page
        cy.visit('http://localhost:5173/recipe/specificRecipe/66150f975d2cfae26cf6083e');

        // Wait for the page to load
        cy.wait(2000);

        // Click the "Add to Cart" button
        cy.get('#addButtonToCart').click();

        cy.wait(3000); // Waiting for the add

        cy.get('#cartOpen').click({ force: true });  // as the button is hidden we need to force it

        cy.wait(3000)  // to display the cart 

        cy.get('#addMoreOfSame').click();

        cy.wait(2000)

        cy.get('#confirmOrder').click();
    });
});



