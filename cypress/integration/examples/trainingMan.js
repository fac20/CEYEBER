describe('Gets to and fronm training manual page', function () {
  it('To and from on first task', function () {
    cy.visit('/first-case-task');
    cy.contains('Training Manual').click();
    cy.contains('Phishing');
    cy.contains('Back to Case').click();
    cy.url().should('contain', '/first-case-task');
  });

  it('To and from on second task', function () {
    cy.visit('/second-case-task');
    cy.contains('Training Manual').click();
    cy.contains('Phishing');
    cy.contains('Back to Case').click();
    cy.url().should('contain', '/second-case-task');
  });

  it('To and from on third task', function () {
    cy.visit('/third-case-task');
    cy.contains('Training Manual').click();
    cy.contains('Phishing');
    cy.contains('Back to Case').click();
    cy.url().should('contain', '/third-case-task');
  });
});
