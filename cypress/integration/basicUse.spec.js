/// <reference types="cypress" />

describe('This is a basic test', () => {

    before(() => {
        cy.visit('http://automationpractice.com/index.php')
    })

    after(() => {
        cy.log('search test finished')
    })

    it('Use the search bar', () => {
        cy.get('#search_query_top').type('DRESS')
        cy.get('#searchbox > button').click()
    })
  
    it('verify the products were searched', () => {
        cy.get('#center_column h1 .lighter').contains('DRESS')
        
        cy.get('#center_column .right-block h5 a').each(($productNames) => {
            expect($productNames.text()).to.contain('Dress')
        })
    })
})

  