// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('clickNavLink', (linkText) => {
  cy.get(`[data-cy^="link-"]`)
    .contains(linkText)
    .click();
});


  Cypress.Commands.add('fillOutForm', ({ name, email, message }) => {
    cy.get('#button').click();
    cy.visit('https://portofolio-zahwa.vercel.app/');
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#messege').type(message);
    cy.get('#button').click();
  });

