import LoginPage from "../support/pageObject/authenticationPage.js";

let loginPage = new LoginPage()

Cypress.Commands.add("login", (email, password) => {
        loginPage.fillLoginForm(email, password);
        loginPage.submitLoginForm()
});