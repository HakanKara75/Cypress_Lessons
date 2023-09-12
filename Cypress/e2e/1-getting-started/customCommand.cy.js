/// <reference types="cypress" />
describe('Custom Command 1', () => { 
    
    it('Positive Test 1', ()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.login').click()
  
      cy.get('#email').type('hakanbatirhan@gmail.com')
      cy.get('#passwd').type('123456')
      cy.get('#SubmitLogin > span').click()
       
        cy.get('#SubmitLogin > span').should('have.text', 'Hakan KARA')
    })
    
    
    it('Positive Test 2', ()=>{
    cy.automationPracticeLogin('hakanbatirhan@gmail.com', '123456')
        //automationPracticeLogin metodu comands.js dosyasinda olusturuldu
    })
    

    it('Negative Test', ()=>{
        cy.automationPracticeLogin('hakanbatirhan@gmail.com', '123454')
        cy.get('ol > li').should('have.text', 'Authentication failed.')
        cy.get('#center_column > :nth-child(2)').should('be.visible')
        cy.url().should('include', 'controller=authentication')
        })
    
        it.only('Amazon Urun Arama Test', ()=>{
            cy.amazonSearch('kalem')
           
            })
     })