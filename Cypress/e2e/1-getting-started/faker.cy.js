/// <reference types="cypress" />

import { fa, faker } from '@faker-js/faker'

describe('Using Faker', () => { 
    /*
https://www.npmjs.com/ sitesine gideriz
faker yazariz
npm install --save-dev @faker-js/faker kodunu terminale yazip calistiririz
kullanilan dosyada import yapilir=> import { faker } from '@faker-js/faker' ile
    */

    it('Faker Test', ()=>{
    cy.visit('https://www.pazarama.com.tr')
    cy.get('.pl-7 > .btn').click()

    cy.get(':nth-child(2) > .card__passive-page > span').click()

    let firstname=faker.person.firstName('male')
    cy.get('#FirstName').type(firstname)
    let surname=faker.person.lastName()
    cy.get('#LastName').type(surname)

    let email = faker.internet.email()
    cy.get('#SignupUserName').type(email)

    let cellphone= faker.phone.number('### ### ## ##')
    cy.get('#Gsm').type(cellphone)

    let password = faker.internet.password()
    cy.get('#registerPassword').type(password)

    cy.get('#4ebaa59b-b631-4599-9ed5-667fe5a69794').click()
    cy.get('#register-submit-button > span').click()

    cy.get('.validation-summary-errors > ul > li').should('have.text', 'İlgili alanı onaylayınız.')
    })
    
    it.only('Faker Test 2', ()=>{
        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    
        let firstname=faker.person.firstName('male')
        cy.get('[data-qa="signup-name"]').type(firstname)

        let email = faker.internet.email()
        cy.get('[data-qa="signup-email"]').type(email)

        cy.get('[data-qa="signup-button"]').click()

        cy.get('#id_gender1').click()
        cy.get('[data-qa="name"]').type(firstname)

        let password = faker.internet.password()
        cy.get('[data-qa="password"]').type(firstname)
    
        cy.get('[data-qa="days"]').select('25').should('have.value', '25')
        cy.get('[data-qa="months"]').select('9').should('have.value', '9')
        cy.get('[data-qa="years"]').select('1997').should('have.value', '1997')

        cy.get('[data-qa="first_name"]').type(firstname)

        let surname= faker.person.lastName()
        cy.get('[data-qa="last_name"]').type(surname)

        let company=faker.company.name()
        cy.get('[data-qa="company"]').type(company)

        let address=faker.location.streetAddress()
        cy.get('[data-qa="address"]').type(address)

        cy.get('[data-qa="country"]').select('Israel').should('have.value', 'Israel')

        let state=faker.location.state()
        cy.get('[data-qa="state"]').type(state)

        let city=faker.location.city()
        cy.get('[data-qa="city"]').type(city)

        let zipcode=faker.location.zipCode()
        cy.get('[data-qa="zipcode"]').type(zipcode)

        let cellphone= faker.phone.number('### ### ## ##')
        cy.get('[data-qa="mobile_number"]').type(cellphone)

        cy.get('[data-qa="create-account"]').click()

        cy.get('b').should('be.visible')
        cy.get('b').should('have.text', 'Account Created!')
        cy.get('b').should('include.text', 'Created')
        cy.contains('b', 'Account Created!')        
        })
        

    
     })