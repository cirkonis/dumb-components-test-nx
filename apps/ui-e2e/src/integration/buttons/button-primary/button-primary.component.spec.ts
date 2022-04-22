describe('shared-design-components-test', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttonprimarycomponent--primary&args=click;'));
  it('should render the component', () => {
    cy.get('dumb-components-test-button-primary').should('exist');
  });
});