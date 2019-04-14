// https://docs.cypress.io/api/introduction/api.html

describe('E2E tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Initial form state/navigation', () => {
    cy.get('[data-cy=calendar-form]')
      .should('exist')
      .and('be.visible')

    cy.get('[data-cy=calendarform-startdate]')
      .should('exist')
      .and('be.visible')
      .and('have.value', '2019-04-01')

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

  it('Renders the default calendar', () => {
    cy.get('[data-cy=calendarform-submit]')
      .click()

    cy.get('[data-cy=calendar-month]')
      .should('exist')
      .and('be.visible')

    cy.get('[data-cy=calendar-month] > thead > :nth-child(1) > td')
      .should('contain', 'Apr 2019')

    cy.log('Mar 31 - out of range')
    cy.get('[data-cy="2019-03-31"]')
      .should('have.class', 'out-of-range-day')

    cy.log('Apr 12 - weekday')
    cy.get('[data-cy="2019-04-12"]')
      .should('have.class', 'weekday-day')

    cy.log('Apr 7 - weekend')
    cy.get('[data-cy="2019-04-07"]')
      .should('have.class', 'weekend-day')
  })

  it('Renders a 17 day date range', () => {
    cy.get('[data-cy=calendarform-startdate]')
      .clear()
      .type('2008-08-15')

    cy.get('[data-cy=calendarform-numberofdays]')
      .clear()
      .type('17')

    cy.get('[data-cy=calendarform-submit]')
      .click()

    cy.get('[data-cy="2008-08-14"]')
      .should('have.class', 'out-of-range-day')

    cy.get('[data-cy="2008-09-01"]')
      .should('have.class', 'out-of-range-day')
  })

  xit('Renders a 30 day date range', () => {
    cy.get('[data-cy=calendarform-startdate]')
      .clear()
      .type('2008-08-15')

    cy.get('[data-cy=calendarform-numberofdays]')
      .clear()
      .type('30')

    cy.get('[data-cy=calendarform-submit]')
      .click()
  })
})
