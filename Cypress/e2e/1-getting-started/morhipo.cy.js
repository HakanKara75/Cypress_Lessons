/// <reference types="cypress" />
describe('Morhipo Test', () => { 
    beforeEach(() => {
        //fixture klasorundan morhipo dosyasinda olusturulan datalari okumak icin
        cy.fixture("morhipo").then(function (data) {
            this.data = data
        })
   })
//it den sonra yukaridaki function yazilir ki bu test data lari tanisin.
    it('Morhipo Test 1', function(){
        //fixture klasorundan morhipo dosyasinda olusturulan url datasini okumak icin
    cy.visit(this.data.url)

    cy.get('#myaccount > .visible-lg').click()
    cy.get("a[id='dd-dsktp-login'] strong").click()

    cy.get('#Username').type(this.data.username)
    cy.get('#Password').type(this.data.password)

    //cy.get('url').eq('https://www.morhipo.com')
    //cy.get('#main-navigation > :nth-child(1) > #sm-').should('include', 'morhipo')
    
    
    })
    
    
    it('', ()=>{
    
        
    })
    
    
     })