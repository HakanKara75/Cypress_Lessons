/// <reference types="cypress" />
describe('Multiple Windows', () => { 
    
    it('Removing Attribute', ()=>{
    cy.visit('https://the-internet.herokuapp.com/windows')
    
    //yeni pencereyi cypress icinde acmak icin acilacak pencerenin HTML kodlarindan 
    //target attribute ici siliniyor boylece yeni pencerede acmiyor.
    cy.get('.example > a').invoke('removeAttr', 'target').click()

    cy.get('h3').should('have.text', 'New Window')

    })

    it.only('New Url', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        
        cy.get('.example > a').then((element) => {
            const  newUrl = element.prop('href') //acik sayfanin href degerini aliriz, const atariz

            cy.visit(newUrl) //yukarida alinan const ile yeni pencere gibi acilir

        })

    
        })

    
    
     })