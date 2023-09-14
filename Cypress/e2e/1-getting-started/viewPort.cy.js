/// <reference types="cypress" />
describe('Vieworts', () => { 
    //ekrani istedigimiz sekilde acar. Iphone, Samsung telefon veya kucuk ekran gibi.
    it('ipad-2', ()=>{
    cy.visit('https://www.google.com/')
    cy.viewport('ipad-2')
    cy.screenshot()
    
    
    })
    
    
    it.only('samsung', ()=>{
        cy.visit('https://www.google.com/')
        cy.viewport('samsung-s10')
        cy.screenshot()
        
    })
    it('Custom Screen', ()=>{
        cy.visit('https://www.google.com/')
        cy.viewport(800, 500)
        cy.screenshot()
        
    })
    
     })