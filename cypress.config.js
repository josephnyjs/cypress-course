const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //configure the size of the windows inside cypress while testing
      "viewportwidth": 1500,
      "viewportHeight": 900,

      //HTTP security icon 
      "chromeWebSecurity": false,
  },
});
