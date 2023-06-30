import React from 'react'
import SocialMediaIcons from '../../src/components/SocialMediaIcons'

describe('<SocialMediaIcons />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SocialMediaIcons />)
  })
})