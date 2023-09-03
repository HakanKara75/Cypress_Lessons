const { defineConfig } = require("cypress");
{//chrome da olabilecek hatalari onler
  "chromeWebSecurity"; false
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.google.com/',

    //asagidaki kodlar cypress ekranında sitenin buyuklugunu ayarliyor
    viewportWidth:1280,
    viewportHeight:720,
    defaultCommandTimeout: 20000,
  chromeWebSecurity: false,
  //custom command kullanabilmek icin fixture false silinip yol yapistirilmali
  fixturesFolder: "C:/Users/Hakan Batirhan.DESKTOP-KA8SOKR/Desktop/Cypress/Cypress/fixtures"
  },

});
