/// <reference types="cypress" />

import { Then, When, Given  } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "C:/Users/BRICIROBERT/Desktop/DemoAutm/cypress/support/pageObject/authenticationPage.js";

let loginPage = new AuthenticationPage();

When(/^I submit an empty form$/, () => {
    loginPage.submitEmptyLoginForm()
});

Then(/^The "([^"]*)" error message appears$/, (message) => {
    loginPage.verifyDeniedAuthentication(message)
});

When(/^I submit the correct username and a wrong password "([^"]*)"$/, (password) => {
    cy.login(Cypress.env('Email'), password)
});

When(/^The Login form is visible$/, () => {
    loginPage.verifyPresenceOfloginForm()
});

When(/^I submit the username and password$/, () => {
    cy.login(Cypress.env('Email'), Cypress.env('password'))
});

Then(/^The user should be authenticated$/, (message) => {

});

When(/^I Go to the login page$/, () => {
    loginPage.goToLogin()
});

Given(/^I open the main page$/, () => {
    loginPage.visitLoginPage(Cypress.env('URL'))
});