describe('DESCRIBE', () => {

    before(() => {
        cy.log('----BEFORE----')
      })
      
      beforeEach(() => {
        cy.log('----BEFORE EACH----')
      })
      
      afterEach(() => {
        cy.log('----AFTER EACH----')
      })
      
      after(() => {
        cy.log('----AFTER----')
      })

    context('CONTEXT 1', () => {
      it('CONTEXT 1 - IT 1', () => {
        cy.log('----1*1----')
      })
  
      it('CONTEXT 1 - IT 2', () => {
        cy.log('----1*2----')
      })
  
      it('CONTEXT 1 - IT 3', () => {
        cy.log('----1*3----')
      })
    })

    context('CONTEXT 2', () => {
        it('CONTEXT 2 - IT 1', () => {
          cy.log('----2*1----')
        })
    
        it('CONTEXT 2 - IT 2', () => {
          cy.log('----2*2----')
        })
    
        it('CONTEXT 2 - IT 3', () => {
          cy.log('----2*3----')
        })
    })

    context('CONTEXT 3', () => {
        it('CONTEXT 3 - IT 1', () => {
          cy.log('----3*1----')
        })
    
        it('CONTEXT 3 - IT 2', () => {
          cy.log('----3*2----')
        })
    
        it('CONTEXT 3 - IT 3', () => {
          cy.log('----3*3----')
        })
    })
})