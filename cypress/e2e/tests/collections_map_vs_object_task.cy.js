describe('Collections. Map vs Object task', () => {
    it('tasks 1-8', () => {

        //task 1
        let planetsArray = [
            {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
            {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
            {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
            {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
            {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
            {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
            {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
            {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
        ]

        let planets = new Map()

        planetsArray.forEach(planet => {
            let planetData = {
                radius: planet.radius,
                density: planet.density,
                distance: planet.distance
            }
            planets.set(planet.planet, planetData)
        })
        console.log(planets)

        //task 2
        planets.forEach((value, key) => {
            cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ': ' + value[objKey]).join(', '))
        })

        // task 3
        cy.log(planets.get('Saturn'))

        //task 4
        cy.log(planets.size)

        //task 5
        let set = new Set(['Mercury', 'Not Mercury'])
        set.forEach(value => {
            if (planets.has(value)) {
                cy.log(`Planets map has value: ${value}`)
            } else {
                cy.log('no match found')
            }
        })

        //task 6
        planets.delete('Uranus')

        //task 7
        let firstThreePlanets = new Map()
        let remainingPlanets = new Map()

        planetsArray.forEach((planet, index) => {
            let planetData = {
                radius: planet.radius,
                density: planet.density,
                distance: planet.distance
            }
            if (index < 3) {
                firstThreePlanets.set(planet.planet, planetData)
            } else {
                remainingPlanets.set(planet.planet, planetData)
            }
        })

        let mergedMap = new Map([...firstThreePlanets, ...remainingPlanets])
        cy.log(mergedMap)

        //task 8
        let planet = planetsArray[0]

        for (let key in planet) {
            cy.log(`${key} : ${planet[key]}`)
        }
    })
})
