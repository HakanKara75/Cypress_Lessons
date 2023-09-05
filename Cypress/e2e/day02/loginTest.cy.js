/// <reference types="cypress" />
describe('Login Test', () => { 
    const userName="Manager"
    const password="Manager1!"
    const password2="Manager"
    it('Pozitif Test', ()=>{



    cy.visit('/')
    cy.contains('Log in').click()
    cy.get('#UserName').type(userName)
    cy.get('#Password').type(password)
    cy.get('#btnSubmit').click()
    cy.get('.top-menu > .nav > .dropdown > .dropdown-toggle').should('include', 'manager')
    //cy.get('.top-menu > .nav > .dropdown > .dropdown-toggle').should('have.text', '    manager ')
    //have text burada hata verir. cunku kelimenin basi ve sonunda tab tuslari var
    })
    
    
    it.only('Negative Test', ()=>{
        cy.visit('/')
        cy.contains('Log in').click()
        cy.get('#UserName').type(userName)
        cy.get('#Password').type(password2)
        cy.get('#btnSubmit').click()

        cy.get('.validation-summary-errors > span').should('include.text', 'Try again please')

        cy.get('.validation-summary-errors > ul > li').should('include.text', 'Username or password is incorrect, please correct them and try again')
    })
    
    
     })