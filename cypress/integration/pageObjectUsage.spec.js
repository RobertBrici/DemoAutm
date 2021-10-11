/// <reference types="cypress" />

import LoginPage from "C:/Users/BRICIROBERT/Desktop/DemoAutm/cypress/support/pageObject/authenticationPage.js";
import ShoppingPage from "C:/Users/BRICIROBERT/Desktop/DemoAutm/cypress/support/pageObject/shoppingPage.js";

/**
 * Bring Required environment variables locally
 */
 const env_URL = Cypress.env('URL');

 
 let loginPage = new LoginPage();
 let shoppingPage = new ShoppingPage();

describe('A Product Should not Be added to Wishlist if not authenticated', () => {

    before(() => {
        loginPage.visitLoginPage(env_URL)
    })

    after(() => {
        loginPage.logTestFinished()
    })

    it('Go to women section', () => {
        shoppingPage.goToWomenSection()
    })
  
    it('Click the More Button of the First Product in the List', () => {
        shoppingPage.openMoreSectionFirstProduct()
    })

    it('Attempt to Add to Wishlist', () => {
        shoppingPage.addToWishlist()
        shoppingPage.verifyProductCantBeAddedToWishlist('You must be logged in to manage your wishlist')
    })

})