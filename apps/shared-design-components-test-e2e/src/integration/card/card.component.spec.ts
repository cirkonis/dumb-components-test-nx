describe('shared-design-components-test', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary&args=title;'));
  it('should render the component', () => {
    cy.get('dumb-components-test-card').should('exist');
  });
});