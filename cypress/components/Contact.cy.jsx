import React from 'react'
import Contact from '../../src/scenes/Contact'
import "../../src/index.css";

describe('test the form functionality', () => {
  it('check everything is working', () => {

    cy.mount(<Contact />)
    cy.get('#button').click();
  })

  
  
})