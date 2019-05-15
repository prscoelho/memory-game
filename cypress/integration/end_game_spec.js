describe('Test game completion', function() {
  it('should reach finish', function() {
    cy.visit('/');

    for(let i = 0; i < 8; i++){
      const element = `[data-cy=${i}]`;
      cy.get(element).eq(0).click();
      cy.get(element).eq(1).click();
    }
    cy.get('p').contains('Congratulations!');
  });

  it('should not reach finish', function () {
    cy.visit('/');

    cy.get('[data-cy=0]').eq(0).click();
    cy.get('[data-cy=0]').eq(1).click();

    cy.get('p').contains('Select squares and find matching pairs!');
  })
});
