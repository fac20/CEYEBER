/* password points are not visible on the screen but are set on thirdCasePage
  minus points or lower than 14 means try again
  over 10 points means win badge */

//9 points earned with these buttons
describe('Checks routes on third task', function () {
  it('Gains 9 points and wins badge', function () {
    cy.visit('/third-case-task');
    cy.contains('!!').click();
    cy.contains('?').click();
    cy.contains('01').click();
    cy.contains('Submit Password!').click();
    cy.contains('Hack Attack');
    cy.contains('Accept').click();
    cy.url().should('contain', '/cases');
  });

  //6 points earned with these buttons
  it('Gains 0-8 points and tries again', function () {
    cy.visit('/third-case-task');
    cy.contains('!!').click();
    cy.contains('?').click();
    cy.contains('Submit Password!').click();
    cy.contains('TRY AGAIN').click();
    cy.url().should('contain', '/third-case-task');
  });

  it('Gets 0 points with time to spare, remains on page', function () {
    cy.visit('/third-case-task');
    cy.contains('BrownFox').click();
    cy.wait(5000).then(() => {
      cy.url().should('contain', '/third-case-task');
    });
  });
});
