Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

//https://www.unipro.io/
it('load Home page',() => {
    cy.visit('https://www.unipro.io/', {timeout: 40000});
})
