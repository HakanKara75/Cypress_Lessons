/// <reference types="cypress" />
describe('Scroll', () => { 
    
    it('Scrollintoview', ()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
    
        //locate alinan elementin altina kadar sayfayi kaydirir
        cy.get('.col-md-7 > .mb-4').scrollIntoView()

        //saniye vererek o surede locate edilen yere gitme
        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2')
        .scrollIntoView({duration: 6000})

        //scrollTo(x,y)
        cy.scrollTo(0,0)    //en uste gel
        cy.scrollTo(0, 500) //500 pixel asagi in

        cy.wait(3000)
        cy.scrollTo(0,0)    //en uste gel
        

    })
    
  
    
    
     })