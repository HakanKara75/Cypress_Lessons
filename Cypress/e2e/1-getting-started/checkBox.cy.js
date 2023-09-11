/// <reference types="cypress" />
describe('Check Boxes', () => { 
    
    it('Single Check Box 1', ()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
    
        /*diger yollar
        cy.get('.sf-with-ul').first().click()
        1 den fazla element oldugunda ilkini tiklar. xpath'de index vermek gibi

         cy.get('.sf-with-ul').eq(1).click()
          1 den fazla element oldugunda 2. elementi tiklar. xpath'de index vermek gibi
        */
          cy.get('#layered_category_4').should('not.be.checked')
          cy.get('#layered_category_4').check().should('be.checked')

          cy.get('#layered_category_4').uncheck()
    })
    
    
    it.only('All CheckBoxes 1', ()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
    
        cy.get("input[type='checkbox']").check()
        
    })
    
    
     })