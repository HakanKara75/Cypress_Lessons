/// <reference types="cypress" />
describe('Allerts', () => { 
    
    it('Allert Test', ()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
   
    //cypress bu komut ile butonu tiklar. cikan allerti otomatik olarak handle eder.
    cy.get(':nth-child(1) > button').click()
  
    //cypress otomatik olarak tamam butonuna tiklar.
    cy.get('#result').should('have.text', 'You successfully clicked an alert')

    
    })
    
    
    it('Accept Allert Test', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       
        cy.get(':nth-child(2) > button').click()
       
        //cypress otomatik olarak tamam butonuna tiklar.
        //cy.get('#result').should('have.text','You clicked: Ok')

        
    })
    
    it('Dismiss Allert Test', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)
        cy.get(':nth-child(2) > button').click()
        cy.wait(3000)
        //cypress otomatik olarak tamam butonuna tiklar. Bunun yerine iptal tiklamak icin asagidaki kod yazilir
        cy.on('window:confirm', ()=>{
        return false
        })
/*
        on() jQuery bir fonksiyondur. browserda acilan windowslarin kontrolu icin acilir
*/

        cy.get('#result').should('have.text','You clicked: Cancel')

        
    })
    
    it.only('Dismiss Allert Test', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //popup pencereleri kontrolu icin asagidaki kod yazilir
        cy.window()
        .then(($windowsElement) => { //prompt bilgisi girisi yapar yani acilan alert penceresine text girmek icin
         cy.stub($windowsElement, 'prompt').returns('Cypress') //prompt text gir demek
         cy.wait(3000)   
        })
        cy.get(':nth-child(3) > button').click()




        cy.get('#result').should('have.text','You entered: Cypress')

        
    })
    
     })