describe('Checks all buttons on first task', function () {
  it('Clicks correct button on first task', function () {
    cy.visit('/first-case-task');
    cy.contains("Check it's true or fake").click();
    cy.url().should('contain', '/badge');
    cy.contains('Troll Hunter');
  });

  it('Clicks ignore button on first task', function () {
    cy.visit('/first-case-task');
    cy.contains('Ignore the video').click();
    cy.url().should('contain', '/try-again');
    cy.contains(
      `Try again – even though Sam is your friend, they might still spread Fake News. It’s important to check.`
    );
  });

  it('Clicks incorrect button on first task', function () {
    cy.visit('/first-case-task');
    cy.contains('Share the video').click();
    cy.url().should('contain', '/try-again');
    cy.contains(
      `Try again – even though Sam is your friend, they might still spread Fake News. It’s important to check.`
    );
  });
});
