describe('Attempts to create a profile', function () {
  it('Enters user info', function () {
    cy.visit('/');
    cy.get('#alias').type('JessDragon');
    cy.get('#age').type(9);
    cy.get('#location').type('The Moon');
    cy.contains('CLICK HERE').click();
    cy.url().should('contain', '/profile');
    cy.get('#Facebook').click();
    cy.get('#Whatsapp').click();
    cy.contains('START YOUR FIRST TASK').click();
    cy.url().should('contain', '/first-case-intro');
  });
});
