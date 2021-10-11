import LoginPage from "../support/pageObject/LoginPage.js";

let loginPage = new LoginPage()

Cypress.Commands.add("login", (email, password) => {
        loginPage.visitLoginPage(Cypress.env('URL'));
        loginPage.authenticate(email, password);
});