//Make sure User is active (out of the waitlist)
const login = () => {
  cy.visit('http://localhost:3000/')
  cy.contains('Connect Wallet').click();
  cy.contains('MetaMask').click(); 
  cy.switchToMetamaskWindow();
  cy.acceptMetamaskAccess().should("be.true");
  cy.confirmMetamaskSignatureRequest();
  cy.switchToCypressWindow();

}
describe('Create Contribution', () => {
    // it('Active user logs in', () => {
    //     cy.visit('http://localhost:3000/')
    //     cy.contains('Connect Wallet').click();
    //     cy.contains('MetaMask').click(); 
    //     cy.switchToMetamaskWindow();
    //     cy.acceptMetamaskAccess().should("be.true");
    //     cy.confirmMetamaskSignatureRequest();
    //     cy.switchToCypressWindow();
    //   })
    before(()=>{
      login()
    });
       
    it ('Report your first Contribution', () => {
        
        cy.contains('My Contributions').click()
        
        cy.contains('Report a Contribution').click()
        
        cy.get('input[name="name"]')
          .type('Govrn Protocol Pull Request')
          .should('have.value', 'Govrn Protocol Pull Request')

          
        cy.contains('Select an activity type or add a new one').click({ force: true })
        cy.get('#react-select-3-listbox')
          .should('contain', 'Pull Request')
          .type('Pull Request{enter}')
          

        cy.get('[name="details"]').click() //css-2613qy-menu
          .type('I added a section to our onboarding documentation that provides an overview of our Discord channels.')       
       
       
        cy.get('[name="proof"]') 
            .type('https://github.com/Govrn-HQ/airtable_migration.')   
            
        cy.contains('Select a DAO to associate this Contribution with')  //All DAOs
           

        cy.contains('Add Contribution').click({ force: true }).click({ force: true })  
        cy.visit('http://localhost:3000/#/contributions')   

     })
 
})
