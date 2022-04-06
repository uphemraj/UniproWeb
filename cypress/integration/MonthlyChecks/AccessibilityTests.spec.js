Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// /<reference types="cypress" />
//homepage
describe('Home Page accessibility tests', () => {
    beforeEach(() => {
      cy.visit('https://www.unipro.io/');
      cy.injectAxe();
    });
    
    it('Should have no accessibility violations',() => {
      cy.checkA11y();
    });
  });
  
  //services page
  describe('Services Page accessibility tests', () => {
    beforeEach(() => {
      cy.visit('https://www.unipro.io/services');
      cy.injectAxe();
    });
    
    it('Should have no accessibility violations',() => {
      cy.checkA11y();
    });
  });

    //How we work page
    describe('How we work Page accessibility tests', () => {
        beforeEach(() => {
          cy.visit('https://www.unipro.io/how-we-work');
          cy.injectAxe();
        });
        
        it('Should have no accessibility violations',() => {
          cy.checkA11y();
        });
      });

          //Our work page
    describe('Our work Page accessibility tests', () => {
        beforeEach(() => {
          cy.visit('https://www.unipro.io/our-work');
          cy.injectAxe();
        });
        
        it('Should have no accessibility violations',() => {
          cy.checkA11y();
        });
      });

                //Insight page
    describe('Insights Page accessibility tests', () => {
        beforeEach(() => {
          cy.visit('https://insight.unipro.io/');
          cy.injectAxe();
        });
        
        it('Should have no accessibility violations',() => {
          cy.checkA11y();
        });
      });


                      //About page
    describe('About Page accessibility tests', () => {
        beforeEach(() => {
          cy.visit('https://www.unipro.io/about');
          cy.injectAxe();
        });
        
        it('Should have no accessibility violations',() => {
          cy.checkA11y();
        });
      });


      
                      //Contact page
    describe('Contact Page accessibility tests', () => {
        beforeEach(() => {
          cy.visit('https://www.unipro.io/contact/');
          cy.injectAxe();
        });
        
        it('Should have no accessibility violations',() => {
          cy.checkA11y();
        });
      });