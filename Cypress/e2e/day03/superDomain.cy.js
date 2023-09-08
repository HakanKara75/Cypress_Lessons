/// <reference types="cypress" />
describe('Super Domain', () => { 
    /*
Cypress bir sitede iken aynı test içinde farkli siteye gitmiyor. Sadece ayni domain icindeki sitelere gider
    */
    it('Test Case 1', ()=>{
        cy.visit('https://www.amazon.com/')
   
        cy.wait(3000)
        cy.visit('https://www.google.com/')
        cy.wait(3000)
       
        cy.visit('https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')
    })
    
    
    it.skip('Test Case 2', ()=>{
        cy.visit('https://www.n11.com/')
    
        cy.visit('https://www.amazon.com/')

        cy.visit('https://www.n11.com/ev-yasam')

    })
    
    
     })