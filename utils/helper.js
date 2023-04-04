export const isSuperSet = ((set, subSet) => {
    for (let elem of subSet) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
})

export const union = ((set1, set2) => new Set([...set1, ...set2]))

export const intersection = (set1, set2) => new Set([...set1].filter(element => set2.has(element)))

export const difference = (set1, set2) => {
    set1.delete(set2)
    return set1
}

export const logPlanet = (planets) => {
    for (let planet of planets) {
        cy.log('------------------')
        for (let key in planet) {
            cy.log(key + ": " + planet[key]);
        }
    }
}

export const logPlanetsAsStrings = planets => {
    planets.forEach(planet => {
        const array = Object.keys(planet).map(key => key + ':' + planet[key])
        console.log(array.join(','));
    })
}

export const deletePlanetByName = (planets, name) =>
    planets.splice(planets.indexOf(planets.find(element => element.planet === name)), 1)

export const getPlanetWithDistance = (planets, minValue) => planets.filter(planet => planet.distance > minValue)

export const sortPlanetByRadius = (planets, ascending = true) => {
    planets.sort((a, b) => {
        if (ascending) {
            return a.radius - b.radius
        } else {
            return b.radius - a.radius
        }
    })
    return planets
}

export const sortPlanetByName = (planets) => {
    planets.sort((a, b) => a.planet.localeCompare(b.planet));
    return planets
}

export const rateFormatter = (str) => Number(parseFloat(str).toFixed(2));










