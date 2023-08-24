import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import {google, trusk} from "../../utils/trusk";




Given("Aller dans la page de {string}", () => {(async () => {

  google.googleUrl()
  cy.get('#L2AGLb > .QS5gu')
      .click({force:true})
})()
});



Given('Chercher le mot clé {string}', (chercher)=>{

  google.elements.googleSearch()
      .type(chercher)
   google.elements.googleSearch()
       .should('be.visible','Trusk')

  cy.contains('trusk').first().click()


})

When("Vérifier que le premier résultat de recherche est {string}",(x) => {(async () => {


  cy.contains(x).should('be.visible')


})()
});

Then("Cliquer dessus",
    () => {

      cy.contains('Trusk livre tout, tout de suite')
          .click()
      //cy.xpath("//h3[text()='Trusk livre tout, tout de suite']")
      //  .should('be.visible')
      //  .click({force:true})




    })

When("Vérifier que le résultat est bien {string}", (Url)=>{


    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.url().should('include',Url)

})

Given("Aller la page de {string}", () => {(async () => {

    trusk.truskUrl()

})()
});
When("Cliquer desus le {string}",(Devenir) => {(async () => {


    cy.contains(Devenir).should('be.visible').click()


})()
});



Then("Verifier le lien et la page {string}", (trusker) => {



    cy.url()
        .should('include',trusker)

    cy.contains("VOTRE CHIFFRE D'AFFAIRES !")
        .should('be.visible')
    cy.contains("Professionnels du transport de marchandises, devenez Trusker afin de développer votre activité avec un maximum de flexibilité.")
        .should('be.visible')
    cy.contains("Je m'inscris")
        .should('be.visible')





})

When("Retour à la page Trusk",()=>{


    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)

    cy.go(-1)



})


When("Cliquer sur le {string}",(Business)=>{


    cy.contains(Business).
    should('be.visible')
        .click()


})

Then("Vérifier le lien et la page {string}", (business) => {

// eslint-disable-next-line cypress/no-unnecessary-waiting
cy.wait(3000)

    cy.url()
        .should('include',business)

    cy.contains("Trusk a mis en place pour vous et vos clients un service de livraison à la demande, innovant, flexible et réactif.")
        .should('be.visible')
    cy.contains('En savoir plus')
        .should('be.visible')
    cy.contains("LA LIVRAISON DU DERNIER KM")
        .should('be.visible')





})