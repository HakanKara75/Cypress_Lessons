/// <reference types="cypress" />
describe('Login Menu Test', () => { 
    
    it.skip('Test Case 1', ()=>{
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.get('.login').click()
    //1.yol
    cy.contains('#create-account_form > .page-subheading', 'Create an account')
    cy.contains('#create-account_form > .form_content > .form-group > label', 'Email address')

    //2.yol
    cy.contains('h3[class="page-subheading"]', 'Create an account')
    cy.contains('label[for="email_create"]', 'Email address')
    })
    
    
    it('Test Case 2', ()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.login').click()

        //1.yol
        cy.get('#login_form > .page-subheading').should('contain','register')

        //2.yol
        cy.get('#login_form > .page-subheading').then(emailtext=>{
            expect(emailtext.text()).to.equal('Already registered?')
        })

        //3.yol
        cy.get('.lost_password > a').invoke('text').then(emailtext2=>{
            expect(emailtext2).to.equal('Forgot your password?')
        })

        
    })
    
    
     })