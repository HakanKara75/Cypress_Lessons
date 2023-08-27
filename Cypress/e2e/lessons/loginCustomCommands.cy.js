describe("Custom Commands Login", ()=>{

    it("Başarılı login sayfasi testi", ()=>{
      cy.fixture("userdata").as("user")//fixture ile datayi nereden aldigimizi as ile onu neye atadigimizi soyledik
       cy.visit('https://www.saucedemo.com')
       cy.get("@user").then((user) => {
         cy.login(user.username, user.password)
       })
      });
      
    })