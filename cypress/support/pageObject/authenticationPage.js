/// <reference types="Cypress" />
'use strict';

import LoginSelectors from "../../support/pageObject/selectors/authenticationSelectors.js";

export default class LoginPage {

    constructor() {}

    visitLoginPage(url) {
        cy.visit(url);
    }

    logTestFinished(){
        cy.log('test finished')
    }

    verifyPresenceOfloginForm() {
        cy.get(LoginSelectors.loginForm.authForm).should('be.visible');
    }
    
    goToLogin(){
        cy.get(LoginSelectors.loginForm.signInBtn).click();
    }

    fillLoginForm(username, password) {
        cy.log("Filling the Login Form");
        cy.get(LoginSelectors.loginForm.emailField).clear().type(username);
        cy.get(LoginSelectors.loginForm.passwordField).clear().type(password);
    }

    submitLoginForm(){
        cy.get(LoginSelectors.loginForm.loginButton).click();
    }

    verifyDeniedAuthentication(error){
        cy.get(LoginSelectors.messages.invalidLoginMessage).contains(error);
    }

    submitEmptyLoginForm(){
        cy.log("Leaving the Form Empty")
        cy.get(LoginSelectors.loginForm.emailField).clear();
        cy.get(LoginSelectors.loginForm.passwordField).clear();
        cy.get(LoginSelectors.loginForm.loginButton).click();
    }

    verifyLoginWasSuccessful(email) {
        cy.get(LoginSelectors.messages.userConfirmation).contains(email);
        cy.log("User Successfully Logged In");
    }

    logOut() {
        cy.get(LoginSelectors.logut.logutBtn).click({force: true});
    }

}
