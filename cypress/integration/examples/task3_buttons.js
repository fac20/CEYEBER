//Remove 'skip' from each test to run them

describe('Checks routes on third task', function () {
  it('Gains over 10 points and wins badge', function () {
    cy.visit('/third-case-task');
    cy.contains('2 Points');
    cy.contains('!!').click();
    cy.contains('?').click();
    cy.contains('01').click();
    cy.wait(30000).then(() => {
      cy.url().should('contain', '/badge');
    });
    cy.contains('Password Challenge');
    cy.contains('Accept').click();
    cy.url().should('contain', '/cases');
  });

  //Fails: try again on password challenge will not let you
  it('Gains 0-9 points and tries again', function () {
    cy.visit('/third-case-task');
    cy.contains('2 Points');
    cy.wait(30000).then(() => {
      cy.url().should('contain', '/try-again');
    });
    cy.contains('TRY AGAIN').click();
    cy.url().should('contain', '/third-case-task');
  });

  it('Gets 0 points with time to spare, remains on page', function () {
    cy.visit('/third-case-task');
    cy.contains('2 Points');
    cy.contains('BrownFox').click();
    cy.contains('0 Points');
    cy.wait(5000).then(() => {
      cy.url().should('contain', '/third-case-task');
    });
  });

  it('Gets 0 points and runs down timer, game over', function () {
    cy.visit('/third-case-task');
    cy.contains('2 Points');
    cy.contains('BrownFox').click();
    cy.contains('0 Points');
    cy.wait(30000).then(() => {
      cy.url().should('contain', '/game-over');
    });
    cy.contains('TRY AGAIN').click();
    cy.contains('CLICK HERE TO BUILD YOUR PROFILE');
  });
});
