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

          
        cy.contains('Select an activity type or add a new one').click({ force: true })
       

        cy.get('[name="details"]').click() //css-2613qy-menu
          .type('I added a section to our onboarding documentation that provides an overview of our Discord channels.')       
       
       
        cy.get('[name="proof"]') 
            .type('https://github.com/Govrn-HQ/airtable_migration.')           
           

        cy.contains('Add Contribution').click();
          

    })
  })
