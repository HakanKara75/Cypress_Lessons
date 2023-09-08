/// <reference types="cypress" />
describe('DropDown', () => { 
    
    it('Test Case', ()=>{
    cy.visit('https://the-internet.herokuapp.com/dropdown')
    cy.wait(2000)
    cy.get('#dropdown').select('Option 1').should('have.value', '1')
    cy.wait(2000)
    cy.get('#dropdown').select('Option 2').should('have.value', '2')
    })
    
    

    
    
     })