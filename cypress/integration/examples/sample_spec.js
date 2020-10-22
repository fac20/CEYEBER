describe('My first test', function () {
  it('Loads landing page', function () {
    cy.visit('localhost:3000/');
    cy.contains('CEYEBER');
  });
});
