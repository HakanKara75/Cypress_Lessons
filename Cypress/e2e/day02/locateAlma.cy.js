/// <reference types="cypress" />
describe('Koala Resort Hotel', () => { 
    
    it('Login Testi', ()=>{
        // baseUrl cypress.config.js dosyasinda. Burada / seklinde de kullanilir.
    cy.visit('/')
    //login icin 1. yol
    cy.get('#navLogon > .nav-link').click()

    //login icin 2. yol: contains DOM'da 'Log in' textini bulur ve tiklar
    //cy.contains('Log in').click()

    cy.url().should('include','koalaresorthotels.com')
    
    cy.get('#UserName').type('Manager')
    cy.get('#Password').type('Manager1!')
    //2.yol
    //cy.get('#Password').type('Manager1!').type('{enter}')
    cy.get('#btnSubmit').click()
    })
    
    
   
     })