describe("SauceDemo Login sayfasi testi", ()=>{

    it("TC001 - SauceDemo Login sayfasina git ve basligi dogrula", ()=>{
        
       cy.visit('https://www.saucedemo.com')
       cy.title().should('eq', "Swag Labs") 
      
    })

    it("TC002 - SauceDemo Login sayfasi basarisiz login testi", ()=>{
        cy.intercept(15000)
        cy.get('#user-name').click();
        cy.get('#user-name"]').type('standard_user');  //username girisi
        cy.get('#password').type('secret_sauceTR');  //password girisi
        cy.get('#login-button').click(); //login butonu icin clickleme
     })

     it("TC003 - SauceDemo Login sayfasi basarili login testi", ()=>{
       
        cy.get('[data-test="username"]').clear().type('standard_user');  
        cy.get('#password').clear().type('secret_sauce');  
        cy.get('#login-button').click(); 
     })
})