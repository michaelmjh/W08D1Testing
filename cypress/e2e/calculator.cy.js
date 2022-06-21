describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it('should update the display of the running total when numbers clicked', () => {
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('#number7').click();
    cy.get('#number9').click();
    cy.get('.display').should('contain', '2579');
  });

  it('should update the display with the result of arithmetical operations', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7');
  });

  it('should chain multiple operations', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2');
  });

  it('should update the display with the result of arithmetical operations', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7');
  });

  it('should update the display with the result of arithmetical operations - large numbers', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1234543210');
  });
  
  it('should update the display with the result of arithmetical operations - negative', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3');
  });

  it('should update the display with the result of arithmetical operations - decimal', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5');
  });

  it('should update the display with error when dividing by 0', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error');
  });
})