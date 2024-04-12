describe('Category Navigation', () => {
    it('should navigate to the "Fish" category page when clicked', () => {
        cy.visit('http://localhost:5173/recipe');

        // Wait for the categories to be rendered
        // cy.wait(5000); 

        // Click on the "Fish" category
        cy.contains('.grid .rounded', 'Fish').click();

        // Verify the URL
        cy.url().should('include', '/recipe/category/Fish');
    });
});


describe('Category Navigation', () => {
    it('should navigate to the "Meat" category page when clicked', () => {
        cy.visit('http://localhost:5173/recipe');

        // Wait for the categories to be rendered
        // cy.wait(5000); 

        // Click on the "Fish" category
        cy.contains('.grid .rounded', 'Meat').click();

        // Verify the URL
        cy.url().should('include', '/recipe/category/Meat');
    });
});
