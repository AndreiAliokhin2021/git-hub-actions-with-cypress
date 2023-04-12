import {
    deletePlanetByName,
    getPlanetWithDistance,
    logPlanet,
    logPlanetsAsStrings, rateFormatter, sortPlanetByName, sortPlanetByRadius
} from "../../../utils/helper";

describe('Data Sets (array) tasks:', () => {
    it('tasks 1-9', () => {

        //task 1
        let planets = [
            {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
            {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
            {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
            {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
            {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
            {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
            {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
            {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
        ]

        //task2
        logPlanet(planets)
        logPlanetsAsStrings(planets)

        //task 3
        planets.push({planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false})

        //task 4
        cy.log(planets.reduce((acc, planet) => {
            return acc + planet.radius
        }, 0))

        // task 5
        logPlanet(getPlanetWithDistance(planets, 5))

        //task 6
        deletePlanetByName(planets, 'Mars')
        logPlanet(planets)

        //task 7
        logPlanet(sortPlanetByRadius(planets, false))

        //task 8
        logPlanet(sortPlanetByName(planets))

        //task 9
        cy.log(planets.length)
    })

    //task 10
    it('Verify that currency converter works properly', () => {
        const currencyData = require('../../fixtures/currency/test_data.json').currency
        const Chance = require('chance')
        const chance = new Chance()
        const randomRate = chance.pick(currencyData.rates)
        cy.visit('/')
        cy.get('#amount').type('1')
        cy.get('#midmarketFromCurrency').click()
        cy.get('#midmarketFromCurrency-listbox').contains(currencyData.base).click()
        cy.get('#midmarketToCurrency').click()
        cy.get('#midmarketToCurrency-listbox').contains(randomRate.shortName).click()
        cy.get('button[style="grid-area:buttons"]').click()
        /*
This button has text 'Convert', but if we use cy.contains('Convert').click() we get
 'This element <button.Submenus__NavSubmenuButton-sc-2ubi8a-7.DWHUy> is not visible because its parent <nav.Headerstyles...>
 has CSS property: display: none'. But if we find this element by 'style' teg - it click() works properly.

 I leave the code of my experiments with this and another elements:

 cy.get('button[style="grid-area:buttons"]').invoke('text').then((text) => {
            console.log(text)

            cy.get('button[style="grid-area:buttons"]')
                .invoke('text')
                .then((text) => {
                    console.log(text);
                });

            cy.get('button:contains("Convert")')

            cy.get('button[style="grid-area:buttons"]').click()

            cy.get('#midmarketFromCurrency-listbox').children().each(($option) => {
                console.log($option);

                cy.get('#midmarketFromCurrency-listbox').children().each(($child) => {
                    const hrefValue = $child.attr('return');
                    console.log(hrefValue);
*/

        cy.get('[class *= "BigRate"]').invoke('text').should('contain', randomRate.rate)

        //This solution just for use different flavour of assertions
        cy.get('[class *= "BigRate"]').invoke('text').then(text => {
            expect(rateFormatter(text)).to.eq(randomRate.rate)
        })
    })
})
