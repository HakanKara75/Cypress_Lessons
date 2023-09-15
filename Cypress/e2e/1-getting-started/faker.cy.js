/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

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

    let password = faker.internet.password()
    cy.get('#registerPassword').type(password)

    let cellphone= faker.phone.number()
    cy.get('#Gsm').type(cellphone)
   
   
    })
    
    

    
     })