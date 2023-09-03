/// <reference types="cypress" />
context('My Second Test', () => { 
    
    beforeEach('Her Testten Once Calisacak', ()=> {
    cy.visit('/')
    })
it('URL Test', ()=>{
cy.url().should('include', 'google')
cy.url().should('eq', 'https://www.google.com/')

})
it('Title Test', ()=>{
cy.title().should('include', 'Google')
cy.title().should('eq', 'Google')

})

it('Search Test', ()=>{
   // cy.get('#APjFqb').type('Cypress.io{enter}')
    //get: locate aliyoruz
    //type: sendkey yapiyoruz
    cy.get('textarea[name="q"]').type('Cypress.io{enter}');

})

it('Search Test', ()=>{
    cy.get('#APjFqb', {timeout:3000}).type('Cypress.io{enter}')
    
})


 })