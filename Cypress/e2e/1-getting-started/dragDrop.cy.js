/// <reference types="cypress" />
describe('Drag And Drop', () => { 
    
    it('Drag and Drop Test 1', ()=>{
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    /* npmjs.com sitesinden drag-drop plugin indir : npm install --save-dev @4tw/cypress-drag-drop
    kodu terminale yapistir
    require('@4tw/cypress-drag-drop') kodunu e2e dosyasina yapistir
*/
    cy.get('#column-a')// suruklenecek element
    cy.get('#column-b')//suruklenecek yer elementi

    cy.get('#column-a').drag('#column-b')
    //.then((success) => {
   //     assert(success)
  //  })
    })
    
    it('Drag and Drop Test 2', ()=>{
        const dataTransfer=new DataTransfer();
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
       
        cy.get('#column-a')// suruklenecek element
        cy.get('#column-b')//suruklenecek yer elementi
    
        cy.get('#column-a').trigger('dragstart', {
            dataTransfer
        })

        cy.get('#column-b').trigger('drop', {
            dataTransfer
        })
         
     })
   
    
    
     })