'use strict';

export const LoginSelectors = {
    "loginForm" : {
        "authForm" : "#login_form",
        "signInBtn" : "#header .header_user_info a",
        "emailField" : "",
        "passwordField" : "",
        "loginButton" : ""
    },

    "messages" : {
        "userConfirmation" : "#header .nav div:nth-child(1) a span",
        "invalidLoginMessage" : "#center_column .alert.alert-danger",
        "passwordRequiredMessage" : "",
        "emailRequiredMessage" : "",
        "invalidEmail" : ""
    },

    "logut" : {
        "" : ""
    }
};

module.exports = LoginSelectors;