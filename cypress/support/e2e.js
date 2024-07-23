// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    // Si el error se origina en un script de origen cruzado, lo ignoramos
    if (err.message.includes('Script error.')) {
      return false;
    }
    // De lo contrario, dejamos que Cypress falle el test
    return true;
  });
// Alternatively you can use CommonJS syntax:
// require('./commands')