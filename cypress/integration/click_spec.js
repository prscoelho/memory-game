describe('Test click functionality', function() {
  it('turns image visible on element click', function() {
    cy.visit('/');

    cy.get('[data-cy=1]').eq(0).click();
    cy.get('[data-cy=1]').eq(0).within(function() {
      cy.get('img').should('be.visible');
    });
  });

  it('turns image visible after clicking a correct pair of elements', function() {
    cy.visit('/');

    cy.get('[data-cy=0]').eq(0).click();
    cy.get('[data-cy=0]').eq(1).click();

    cy.wait(500); // img will be visible for 500 ms before it might become hidden

    cy.get('[data-cy=0]').eq(0).within(function() {
      cy.get('img').should('be.visible');
    });
  });

  it('doesn\'t turn image visible on clicking two different pairs', function() {
    cy.visit('/');

    cy.get('[data-cy=1]').eq(0).click();
    cy.get('[data-cy=2]').eq(1).click();

    cy.wait(500); // img will be visible for 500 ms before it might become hidden

    cy.get('[data-cy=1]').eq(0).within(function() {
      cy.get('img').should('not.be.visible');
    });
  });
});