describe('Fellowship of 1337',  () => {
  it('can open webpage', () =>  {
    cy.visit('/')
    cy.contains('_the fellowship of the tretton37')
  })

  // Only 1 Anneli
  it('can search for an employee', () => {
    cy.visit('/')
    cy.get('input')

    cy.get('.action-search').type('Anneli').should('have.value', 'Anneli')
  })

  it('can select Lund as an office', () => {
    cy.visit('/')
    cy.get('.office-locations').click().type('{downarrow}{downarrow}{downarrow}{downarrow}{enter}')
  })
})