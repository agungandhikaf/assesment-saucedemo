const { defineConfig } = require("cypress");
const { beforeRunHook} = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    video: false,
    reporterOptions: {
      reportDir: "cypress/report",
      charts: true,
      reportPageTitle: 'Cypress Reporter',
      embeddedScreenshots: true,
      inlineAssets: true, 
    },
  e2e: {
    BASE_URL: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {  
      require('cypress-mochawesome-reporter/plugin')(on)
      on ('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      })
    },
    chromeWebSecurity: false
  },
});
