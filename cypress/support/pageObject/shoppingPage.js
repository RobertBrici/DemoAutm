/// <reference types="Cypress" />
'use strict';

import ShoppingSelectors from "../../support/pageObject/selectors/shoppingSelectors.js";

export default class ShoppingPage {

    constructor() {}

    goToWomenSection(){
        cy.get(ShoppingSelectors.header.women).click()
    }

    openMoreSectionFirstProduct(){
        cy.get(ShoppingSelectors.buttons.firstProductMore).click({force : true})
    }


    addToWishlist(){
        cy.get(ShoppingSelectors.buttons.wishlistButton).click()
    }

    verifyProductCantBeAddedToWishlist(msg){
        cy.get(ShoppingSelectors.messages.wishlistError).contains(msg)
    }
}
