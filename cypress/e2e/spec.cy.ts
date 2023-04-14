describe('template spec', () => {
  it('Search for users', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').type('sealove20')
    cy.get('button').click()
  })
  it('Access user detail page', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').type('sealove20')
    cy.get('button').click()
    cy.get('[data-cy=sealove20]').click()
  })
})