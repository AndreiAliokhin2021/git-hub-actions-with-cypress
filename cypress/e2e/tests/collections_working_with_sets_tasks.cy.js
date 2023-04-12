/// <reference types="cypress" />
const Chance = require('chance');
const {isSuperSet, union, intersection, difference} = require("../../../utils/helper");

// tasks 1-5
describe('Collections working with sets tasks', () => {
    it('tasks 1-5', () => {
        let currencySet = new Set(['USD', 'EUR', 'BYN'])
        currencySet.add('USD').add('GBP').add('AUD')

        currencySet.forEach(currency => {
            cy.log(currency)
        })
        currencySet.delete('USD')

        cy.log('Is set has value USD: ' + currencySet.has('USD'))

        let chance = new Chance()
        let randomElement = chance.pickone([...currencySet])
        cy.log('The random element: ' + randomElement)

        let randomElements = chance.pickset([...currencySet], chance.integer({min: 1, max: currencySet.size}))
        cy.log('The random elements:')
        randomElements.forEach(currency => {
            cy.log(currency)
        })
    })

    // tasks 6
    it.only('tasks 6', () => {
        let setA = new Set(['USD', 'EUR', 'BYN', 'GBP', 'AUD', 'AWG'])
        let setB = new Set(['EUR', 'BYN', 'GBP'])
        let setC = new Set(['BYN', 'GBP', 'AUD', 'AWG'])

        // calling methods from helper.js
        cy.log(isSuperSet(setA, setB))
        union(setB, setC).forEach(currency => {
            cy.log(currency)
        })
        cy.log(intersection(setB, setA))
        cy.log(difference(setB, setA))
    })
})




