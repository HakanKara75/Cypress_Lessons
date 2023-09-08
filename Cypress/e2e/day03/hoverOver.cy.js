/// <reference types="cypress" />
describe('HoverOVer', () => { 
    
    it('Test Case 1', ()=>{
    cy.visit('https://www.amazon.com/')

    //trigger mause locate ustunde bekler
    cy.get('.icp-nav-link-inner').trigger('mouseover')
    cy.wait(2000)

    cy.get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change > .nav-text > .icp-mkt-change-lnk').click()
    cy.wait(2000)

    cy.get('#icp-dropdown').select('Turkey (Türkiye)', {force: true}) //select calismazsa force ile zorla yaptiriyoruz
    cy.wait(2000)
    })
    
    it.only('Test Case 1', ()=>{
        cy.visit('https://www.kitapyurdu.com/')
    
        //trigger mause locate ustunde bekler
       // cy.get('.icp-nav-link-inner').trigger('mouseover')
       
    
        })
   
    
    
     })