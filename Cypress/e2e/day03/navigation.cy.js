/// <reference types="cypress" />
describe('Navigation', () => { 
    
    it('Back, Forward, Refresh', ()=>{
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    cy.wait(2000)
    cy.get('#navLogon > .nav-link').click()
    cy.wait(2000)
    cy.go('back')   //veya cy.go(-1)
    cy.wait(2000)
    cy.go('forward')    //veya cy.go(1)
    cy.wait(2000)
    cy.reload()     //sayfayi refresh yapar
    })
    
    
    it.only('Chaing Navigation', ()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.wait(2000)
        cy.get('#navLogon > .nav-link').click()
        cy.wait(2000)
        cy.go('back').go('forward').go(-1).go(1)
        cy.reload(true)     //sayfayi cashten(hafizadan) degil orijinal sayfadan yeniden yukler
    })
    
    
     })