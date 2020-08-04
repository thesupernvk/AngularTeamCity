context('My Cypress Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/')
    })
  
    it('find New Component Button', () => {
      cy.contains('New Component').click();
    });

    it('should change text', () => {
        cy.contains('ng generate component xyz');
    });
});