// https://docs.cypress.io/api/introduction/api.html

describe('E2E tests', () => {
  it('Initial form state/navigation', () => {
    cy.visit('/')
    cy.get('[data-cy=calendar-form]')
      .should('exist')
      .and('be.visible')

    cy.get('[data-cy=calendarform-startdate]')
      .should('exist')
      .and('be.visible')
      .and('have.value', '2018-04-01')

    cy.get('[data-cy=calendarform-numberofdays]')
      .should('exist')
      .and('be.visible')
      .and('have.value', '30')

    cy.get('[data-cy=calendarform-countrycode]')
      .should('exist')
      .and('be.visible')
      .and('have.value', 'US')

    cy.get('[data-cy=calendarform-submit]')
      .click()

    cy.get('[data-cy=calendar-form]')
      .should('not.be.visible')

    cy.get('[data-cy=calendar]')
      .should('exist')
      .and('be.visible')

    cy.get('[data-cy=calendar-goback]')
      .click()

    cy.get('[data-cy=calendar-form]')
      .should('be.visible')

    cy.get('[data-cy=calendar]')
      .should('not.be.visible')
  })
})
