/// <reference types="cypress" />
describe('Check Boxes', () => { 
    
    it('Single Check Box 1', ()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
    
        /*diger yollar
        cy.get('.sf-with-ul').first().click()
        1 den fazla element oldugunda ilkini tiklar. xpath'de index vermek gibi

         cy.get('.sf-with-ul').eq(1).click()
          1 den fazla element oldugunda 2. elementi tiklar. xpath'de index vermek gibi
        */
          cy.get('#layered_category_4').should('not.be.checked')
          cy.get('#layered_category_4').check().should('be.checked')

          cy.get('#layered_category_4').uncheck()
    })
    
    
    it('All CheckBoxes 1', ()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
    
        cy.get("input[type='checkbox']").check()
        cy.wait(3000)
        cy.get("input[type='checkbox']").uncheck()
        
    })
    
    it('All CheckBoxes 2', ()=>{
      cy.visit('http://www.automationpractice.pl/index.php')
      //yukarida women linkini uzun locate aldı. burada class'tan alip indexine gore ilk elemani sectik.
      cy.get('.sf-with-ul').eq(0).click()
  
      cy.get("input[type='checkbox']").eq(2).check().should('be.checked')
      cy.get("input[type='checkbox']").eq(4).check().should('be.checked')
      cy.get("input[type='checkbox']").eq(6).check().should('be.checked')
      cy.wait(3000)
      
      cy.get("input[type='checkbox']").eq(2).uncheck().should('not.be.checked')
      cy.get("input[type='checkbox']").eq(4).uncheck().should('not.be.checked')
      cy.get("input[type='checkbox']").eq(6).uncheck().should('not.be.checked')
    
      
  })
  it.only('All CheckBoxes 2', ()=>{
    cy.visit('http://www.automationpractice.pl/index.php')
    //yukarida women linkini uzun locate aldı. burada class'tan alip indexine gore ilk elemani sectik.
    cy.get('.sf-with-ul').eq(0).click()

    //click normalde tek tik yapar. multiple: true ile birçok tik ayni anda yapilir
    cy.get("input[type='checkbox']").click({multiple: true})

    //ilk checkbox i kontrol etme kodu
    cy.get("input[type='checkbox']").first().parent().should('have.class', 'checked')

    //tum checkboxlari kontrol etme kodu
    cy.get("input[type='checkbox']").parent().should('have.class', 'checked')

  
    
})
  
     })