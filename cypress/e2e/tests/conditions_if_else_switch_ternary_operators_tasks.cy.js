describe('Conditions. If else, switch and ternary operators tasks', () => {
    it('if, switch, ternary operator tasks', () => {
        const Chance = require('chance')
        const chance = new Chance()
        const age = chance.age()


        const childText = 'that person is a child'
        const teenagerText = 'that person is a teenager'
        const adultText = 'that person is an adult'
        const seniorText = 'that person is a senior'

        //if
        const logAgeCategoryUsingIf = (age) => {
            cy.log(age)
            if (age < 13) {
                cy.log(childText)
            } else if (age >= 13 && age < 18) {
                cy.log(teenagerText)
            } else if (age >= 18 && age < 65) {
                cy.log(adultText)
            } else {
                cy.log(seniorText)
            }
        }

        //switch
        const logAgeCategoryUsingSwitch = (age) => {
            cy.log(age)
            switch (true) {
                case (age < 13):
                    cy.log(childText)
                    break
                case (age >= 13 && age < 18):
                    cy.log(teenagerText)
                    break
                case (age >= 18 && age < 65):
                    cy.log(adultText)
                    break
                default:
                    cy.log(seniorText)
            }
        }

        //ternary operator
        const logAgeCategoryUsingTernaryOperator = (age) => {
            cy.log(age)
            let category = age < 13 ? childText : age >= 13 && age < 18 ? teenagerText : age >= 18 && age < 65 ? adultText : seniorText
            cy.log(category)
        }

        logAgeCategoryUsingIf(age)
        logAgeCategoryUsingSwitch(age)
        logAgeCategoryUsingTernaryOperator(age)
    })
})




