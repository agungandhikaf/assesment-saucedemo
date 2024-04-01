const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    BASE_URL: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {  
      // implement node event listeners here
    },
    chromeWebSecurity: false
  },
});
