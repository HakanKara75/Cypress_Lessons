/// <reference types="cypress" />
describe('Koala Resort Hotel', () => { 
    
    it('Login Test', ()=>{
    cy.visit('/')
    //1.yol
    //cy.contains('Log in').click()
        //2.yol texte buyuk kucuk harf duyarliligi kaldirip aratabiliriz. matchCase: false bunu yapar.
     //cy.contains('log in', {matchCase: false}).click()

    //3.yol locate verilir, locate in texti verilir
    cy.contains('[class="nav-link"]','Log in').click()

    //ASSERT
    //1.YOL have text ile. Locate edilen yerde 'Log in' texti var mı
    cy.get('#navLogon > .nav-link').should('have.text', 'Log in')

    //2.YOL url
    cy.url().should('include', 'Account/Logon')

    //3.YOl be visible
    cy.get('.row > .mb-4').should('be.visible')

    //4.YOL 
    cy.title().should('eq','KoalaResortHotels - Log in')

    //5.YOL include text
    cy.get('#navLogon > .nav-link').should('include.text', 'Log in')

        //Toplam link sayisi
        cy.get('li a').should('have.length', 29)

        //find : Bit HTML elementinin child elementleri bulmak icin
        //cy.get('li').find(':nth-child(8) > a')    bu usul hata verebiliyor.
        cy.get('li').find('a[href="/Rooms/320"]').should('have.text', 'Twin 2')
        /*
        PARENT: 'li'
        CHILD: ':nth-child(8) > a'

        */

        /*
        Web elementleri ilk once get ile bulacagiz. Eger olmazsa find ile deneyecegiz.
        O da bulamazsa within kullanacagiz.
        */
        //within()
        cy.get('div.categories').within( () => {
            cy.get('a[href="/Rooms/320"]').click()
             /*
        PARENT: 'div.categories'
        CHILD: 'a[href="/Rooms/320"]'

        */
        })
    
    })
    
    
    
    
     })