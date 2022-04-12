describe('shared-design-components-test', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary'));
  it('should render the component', () => {
    cy.get('dumb-components-test-header').should('exist');
  });
});