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
    cy.get('.dn-slide-body > .dn-slide-buttons > .dn-slide-accept-btn').click()
    cy.get('.pl-7 > .btn').click()
    //let firstname=faker.
    })
    
    

    
     })