/// <reference types="cypress" />
describe('Suggeste Element', () => { 
    
    it('Test Case 1', ()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
    
        cy.get('#search_query_top').type('dress')
        cy.get(".ac_results").contains('Blouse').click()
        cy.get('h1').should('be.visible')
        cy.get('h1').should('have.text', 'Blouse')
    })
    
    
   
     })