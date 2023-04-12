const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pwugvx',
  e2e: {
    baseUrl: "https://www.xe.com"
  },
});
