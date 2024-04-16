describe('open website', () => {
  it('Should open the homepage', () => {
    cy.visit('http://localhost:5173/')
  })
})


describe('open add', () => {
  it('Should open /add', () => {
    cy.visit('http://localhost:5173/add')
  })
})


describe('Add Recipe Page', () => {
  beforeEach(() => {
    // Visit the add recipe page before each test
    cy.visit('http://localhost:5173/add');
  });

  it('should add recipe with valid data', () => {
    // Input valid recipe data
    cy.get('#title-input').type('Test Recipe');
    cy.get('#description').type('This is a test recipe description');
    cy.get('#time-in-mins').type('30');
    cy.get('#url-add').type('https://as2.ftcdn.net/v2/jpg/00/49/22/63/1000_F_49226343_zrW0Mlu6hqxzgN2gUBwW8EGaHmD5GZU6.jpg');
    cy.get('#price').type('10');

    // Submit the form
    cy.get('button').contains('Add your recipe').click();

  });
 
});
