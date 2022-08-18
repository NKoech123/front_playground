// describe('Test User Login', () => {
//     it('Connects with Metamask', () => {
//         cy.visit('http://localhost:3000/')
//         cy.contains('Connect Wallet').click();
//         cy.contains('MetaMask').click(); 
//         cy.switchToMetamaskWindow();
//         cy.acceptMetamaskAccess().should("be.true");
//         cy.confirmMetamaskSignatureRequest();
//         cy.switchToCypressWindow();
//     });
//     it('Join the waitlist', () => {
       
//         cy.contains('Create My Profile').should('be.visible').click();
     
//         cy.get('[name="username"]') 
//            .type('TestUsername')
//         cy.get('[name="email"]') 
//           .type('testemail@gmail.com')

//         cy.contains('Join Waitlist').click()
//     })})