/*
Bu dosya ile surekli kullanilan/tekrar eden kodlar depolanir.
*/
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
/*
Ornegin login komutunu parametreli yapmis asagida. Boylece cagrilip kullanilabilir.
*/
// -- This is a parent command --
 Cypress.Commands.add('login', (username, password) => { 
   // username icin
   cy.get('#user-name').should('be.visible').type(username)
   //password icin
   cy.get('#password').type(password)
   //login butonuna tikla
   cy.get('#login-button').click()


  })
  Cypress.Commands.add("logPageTitle", () => {
    cy.title().then((title) => {
      cy.log(`Page title: ${title}`);
    });
  });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })