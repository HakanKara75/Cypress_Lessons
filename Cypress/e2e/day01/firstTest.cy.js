//describe ile test tanimlanir. Mocha dan gelir.
describe('First Tests', ()=> {
 //
   it('Test Case 1', ()=> {
    cy.visit('https://www.google.com/')

    cy.url().should('include', 'google')
    cy.url().should('eq', 'https://www.google.com/')
 })
    
 it('Test Case 2', ()=> {
    cy.visit('https://www.amazon.com/')
    cy.title().should('include', 'Amazon')
    cy.title().should('eq', 'Amazon.com. Spend less. Smile more.')
 })
    
 
})