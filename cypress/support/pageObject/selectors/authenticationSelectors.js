'use strict';

export const LoginSelectors = {
    "loginForm" : {
        "authForm" : "#login_form",
        "signInBtn" : "#header .header_user_info a",
        "emailField" : "#email",
        "passwordField" : "#passwd",
        "loginButton" : "#SubmitLogin > span"
    },

    "messages" : {
        "userConfirmation" : "#header .nav div:nth-child(1) a span",
        "invalidLoginMessage" : "#center_column .alert.alert-danger"
    },

    "logut" : {
        "logutBtn" : '[title="Log me out"]'
    }
};

module.exports = LoginSelectors;