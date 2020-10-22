describe('My first test', function () {
  it('Loads landing page', function () {
    cy.visit('/');
    cy.contains('CEYEBER');
  });
});
