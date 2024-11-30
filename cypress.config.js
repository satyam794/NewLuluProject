const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fudhsu',

  "reporter":"mochawesome",
  "reporterOptions":{
      "reportDir":"cypress/reports",
      "reportFilename":"testresults",
      "overwrite":false,
      "html":true,
      "json":true,
      "charts":true
  },
  e2e: {
    setupNodeEvents(on, config) {

    },
    "baseUrl" : "https://gec1.qa.lululemon.app/call-center/login",
      "experimentalModifyObstructiveThirdPartyCode": true,
      "experimentalStudio": true,
      "experimentalSessionAndOrigin": true,
      "defaultCommandTimeout": 600000,
    chromeWebSecurity : false,
    

    },
   
   

  
});
