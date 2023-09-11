/// <reference types="cypress" />
describe('Iframe', () => { 
    /*
    iframe handle icin yapilacaklar.
    1- plugin indir
    npmjs.com sayfasindan https://www.npmjs.com/package/cypress-iframe linkine gir
    npm install -D cypress-iframe
    komutunu terminale yaz

    2-Import plugin
    import 'cypress-iframe';
    // or
    require('cypress-iframe');
    kodlarindan birini support klasorundeki command.js veya e2e.js dosyasina yapistir.

    3- cy.frameLoaded() ve cy.iframe() fonksiyonlarina kullanabilecegiz

    */
    it('Iframe Test', ()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')

    cy.frameLoaded('#mce_0_ifr')
    //selenium da driver.switchto.frame('#mce_0_ifr')

    cy.iframe().find('p').clear()
    cy.iframe().find('p') //p tag'ini bul
    .type('Cypress was here')

    })
    
    
    
    
    
     })