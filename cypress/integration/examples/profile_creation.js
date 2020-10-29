describe('Attempts to create a profile and begin', function () {
  //Change this username and unskip to sign in
  it.skip('Enters user info with a unique username', function () {
    cy.visit('/');
    cy.get('#agent').type('Jen123');
    cy.get('#age').type(9);
    cy.get('#country').select('United Kingdom');
    cy.contains('CLICK HERE').click();
    cy.url().should('contain', '/profile');
    cy.contains('START YOUR FIRST TASK').click();
    cy.url().should('contain', '/first-case-intro');
    cy.contains('Accept').click();
  });

  it('Enters duplicate user info and recieves alert', function () {
    cy.visit('/');
    cy.get('#agent').type('Dragon');
    cy.get('#age').type(9);
    cy.get('#country').select('United Kingdom');
    cy.contains('CLICK HERE').click();
    cy.contains('Pick another');
  });
});
