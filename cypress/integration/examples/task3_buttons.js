describe('Checks routes on third task', function () {
  it('Gains over 10 points and wins badge', function () {
    cy.visit('/third-case-task');
    cy.contains('!!').click();
    cy.contains('?').click();
    cy.contains('01').click();
    cy.url().should('contain', '/badge', { timeout: 310000 });
    cy.contains('Thief Buster');
    cy.contains('Accept').click();
    cy.url().should('contain', '/cases');
    cy.contains('Next Case').click();
    cy.url().should('contain', '/third-case-intro');
  });

  // it('Clicks ignore button on second task, retries on fail, decrements 1 point', function () {
  //   cy.visit('/second-case-task');
  //   cy.contains('2 Points');
  //   cy.contains('better to ignore it').click();
  //   cy.url().should('contain', '/try-again');
  //   cy.contains(`ignoring these messages means they can come back again!`);
  //   cy.contains('TRY AGAIN').click();
  //   cy.url().should('contain', '/second-case-task');
  //   cy.contains('1 Points');
  // });

  // it('Clicks incorrect button on second task, try again, game over', function () {
  //   cy.visit('/second-case-task');
  //   cy.contains('2 Points');
  //   cy.contains('this is from Netflix').click();
  //   cy.url().should('contain', '/try-again');
  //   cy.contains(`It’s very easy to steal a logo`);
  //   cy.contains('TRY AGAIN').click();
  //   cy.url().should('contain', '/game-over');
  //   cy.contains('TRY AGAIN').click();
  //   cy.url().should('contain', '/');
  //   cy.contains('CLICK HERE TO BUILD YOUR PROFILE');
  // });
});
