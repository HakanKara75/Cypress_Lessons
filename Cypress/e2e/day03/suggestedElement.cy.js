/// <reference types="cypress" />
describe('Suggested Elements', () => { 
    
    it('Test Case 1', ()=>{
        cy.visit('http://www.amazon.com')
        cy.get('#twotabsearchtextbox').type('Yaho')
        cy.wait(3000)
        //1.yol
        cy.get("[aria-label='yaho.com']").contains('yaho.com').click()

        
      

    
    })
    
    
    it.skip('Test Case 2', ()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        
    })
    
    
     })