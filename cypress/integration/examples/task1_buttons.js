describe('Checks all buttons on first task', function () {
  it('Clicks correct button on first task, gets badge and goes to second', function () {
    cy.visit('/first-case-intro');
    cy.contains('Accept').click();
    cy.contains("Check it's true or fake").click();
    cy.url().should('contain', '/badge');
    cy.contains('Troll Hunter');
    cy.contains('Accept').click();
    cy.url().should('contain', '/cases');
    cy.contains('Next Case').click();
    cy.url().should('contain', '/second-case-intro');
  });

  it('Clicks ignore button on first task, retries on fail, decrements 1 point', function () {
    cy.visit('/first-case-intro');
    cy.contains('Accept').click();
    cy.contains('2 Points');
    cy.contains('Ignore the video').click();
    cy.url().should('contain', '/try-again');
    cy.contains(
      `Try again – even though Sam is your friend, they might still spread Fake News. It’s important to check.`
    );
    cy.contains('TRY AGAIN').click();
    cy.url().should('contain', '/first-case-task');
    cy.contains('1 Point');
  });

  it('Clicks incorrect button on first task, try again, game over', function () {
    cy.visit('/first-case-intro');
    cy.contains('Accept').click();
    cy.contains('2 Points');
    cy.contains('Share the video').click();
    cy.url().should('contain', '/try-again');
    cy.contains(
      `Try again – even though Sam is your friend, they might still spread Fake News. It’s important to check.`
    );
    cy.contains('TRY AGAIN').click();
    cy.url().should('contain', '/game-over');
    cy.contains('TRY AGAIN').click();
    cy.url().should('contain', '/first-case-intro');
  });
});
