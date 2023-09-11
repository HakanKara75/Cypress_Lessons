/// <reference types="cypress" />
describe('HoverOVer', () => { 
    
    it('Test Case 1', ()=>{
    cy.visit('https://www.amazon.com/')

    //trigger mause locate ustunde bekler
    cy.get('.icp-nav-link-inner').trigger('mouseover')
    cy.wait(2000)

    //1.yol id den css
    cy.get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change > .nav-text > .icp-mkt-change-lnk').click()

    //2.yol
    //cy.contains('Change country/region').click()
    cy.wait(2000)


    cy.get('#icp-dropdown').select('Turkey (Türkiye)', {force: true}) //select calismazsa force ile zorla yaptiriyoruz
    //cy.get('.a-dropdown-container > .a-button > .a-button-inner > .a-button-text').select('Turkey (Türkiye)', {force: true})
    cy.wait(2000)
    })

 
   
    
    
     })