const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // screenshotOnRunFailure: true,
    // trashAssetsBeforeRuns: true,

    baseUrl: "https://opensource-demo.orangehrmlive.com",
    env: {



      qa: "https://www.google.com/",

      uat: "https://www.yahoo.com/?guccounter=1",

      bank: "https://parabank.parasoft.com/parabank/register.htm"

    },


    
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",

    viewportHeight: 1080,
    viewportWidth: 1630,

    retries: {

      openMode: 0,

      runMode: 2

    },

    // reporter: 'mochawesome',

    // projectId: "fccjnf"


    //you need add in cypress.config.js

    




  },


});







