/// <reference types="cypress" />
describe('Selector Examples', () => { 
    
    it('Css Selectors', ()=>{
    cy.visit('https://www.amazon.com/')
    
    //By Tagname
    cy.get('input')

    //By id   de basina # koyulur
    cy.get('#twotabsearchtextbox')

    //By class   da basina . koyulur
    cy.get('.nav-input nav-progressive-attribute')

    //By Attribute name and value
    cy.get("input[type='text']")

    cy.get("[type='text'][id='twotabsearchtextbox']")
    })
    
      
    
     })