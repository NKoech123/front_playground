describe('Test User Login', () => {
    it('Connects with Metamask', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Connect Wallet').click();
        cy.contains('MetaMask').click(); 
        cy.switchToMetamaskWindow();
        cy.acceptMetamaskAccess().should("be.true");
        cy.confirmMetamaskSignatureRequest();
        cy.switchToCypressWindow();
        cy.contains('Create My Profile').should('be.visible');
        // cy.wait(10000)  //because the page will show 'Create My Profile' before loading to 'My Contributions'
        //cy.contains('Create My Profile').click()


        //create Contribution
        cy.visit('http://localhost:3000/#/contributions')
        cy.contains('Report a Contribution').click()
        //cy.contains('Name of Contribution').should('be.visible');
        
        cy.get('input[name="name"]')
          .type('Contribution Name')
          .should('have.value', 'Contribution Name')

          
        cy.get('input[id="react-select-11-input"]').click()
        
        
        
        cy.get('textarea[name="details"]')   //css-2613qy-menu
          .type('I added a section to our onboarding documentation that provides an overview of our Discord channels.')       
        //   .should('have.value','Pull Request')

       
        // cy.get('input[name="proof"]') 
        //     .type('Please add a URL to a proof of your contribution.')           
        //     .should('have.value', 'Please add a URL to a proof of your contribution.')

        cy.contains('Add Contribution').click();
          

    })
  })
