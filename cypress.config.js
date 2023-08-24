const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.cimri.com/',
    //https://www.amazon.com.tr/

    //asagidaki kodlar cypress ekranında sitenin buyuklugunu ayarliyor
    viewportWidth:1280,
    viewportHeight:720
  },
});
