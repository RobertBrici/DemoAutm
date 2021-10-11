/// <reference types="cypress" />

import { Then, When, Given  } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "C:/Users/BRICIROBERT/Desktop/DemoAutm/cypress/support/pageObject/authenticationPage.js";

let loginPage = new LoginPage();

When(/^I submit an empty form$/, () => {
    loginPage.submitEmptyLoginForm()
});

Then(/^The "([^"]*)" error message appears$/, (message) => {
    loginPage.verifyDeniedAuthentication(message)
});

When(/^I submit the correct username and a wrong password "([^"]*)"$/, (password) => {
    cy.login(Cypress.env('Email'), password)
});

Then(/^The Login form is visible$/, () => {
    loginPage.verifyPresenceOfloginForm()
});

When(/^I submit the correct username and password$/, () => {
    cy.login(Cypress.env('Email'), Cypress.env('password'))
});

Then(/^The user "([^"]*)" should be authenticated$/, (user) => {
    loginPage.verifyLoginWasSuccessful(user)
});

When(/^I Go to the login page$/, () => {
    loginPage.goToLogin()
});

When(/^I click Logout$/, () => {
    loginPage.logOut()
});

Given(/^I open the main page$/, () => {
    loginPage.visitLoginPage(Cypress.env('URL'))
});