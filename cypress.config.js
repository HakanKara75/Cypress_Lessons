const { defineConfig } = require("cypress");
{//chrome da olabilecek hatalari onler
  "chromeWebSecurity"; false
  
}
module.exports = defineConfig({
  projectId: 'pim4q7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qa-environment.koalaresorthotels.com/',

    //asagidaki id ve kodu cypress uzak sunucu testi icin alinip yapistiriliyor buraya
    projectId: "pim4q7",
    //asagidaki kod en ufak degisiklikte run etmesini engelliyor
    watchForFileChanges: false,
    //asagidaki kodlar cypress ekranında sitenin buyuklugunu ayarliyor
    viewportWidth:1280,
    viewportHeight:720,
    defaultCommandTimeout: 20000,
  chromeWebSecurity: false,

  //testlerin videolarını kaydetmek icin asagidaki kod true olmali
  "video": true,
  //custom command kullanabilmek icin fixture false silinip yol yapistirilmali
  fixturesFolder: "C:/Users/Hakan Batirhan.DESKTOP-KA8SOKR/Desktop/Cypress/Cypress/fixtures"
  
  },

});
