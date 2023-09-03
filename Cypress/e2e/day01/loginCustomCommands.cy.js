describe("Custom Commands Login", ()=>{

    it("Başarılı login sayfasi testi", ()=>{
      cy.fixture("userdata").as("user")//fixture ile datayi hangi klasorden aldigimizi as ile onu neye atadigimizi soyledik
       cy.visit('https://www.saucedemo.com')
       //yukarida tanimlanan user'i @user diye cagiriyoruz asagida
       cy.get("@user").then((user) => {
         //login metotunu commands dosyasinda tanimlamistik
         cy.login(user.username, user.password)
       })
      });
      
    })