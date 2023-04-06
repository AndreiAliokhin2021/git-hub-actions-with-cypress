const url = 'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916'

describe('Deal with asynchronous in Cypress tasks', () => {
    it('cy.request', () => {
        cy.request(url)
            .then((response) => {
                expect(response.status).to.eq(200)
                const products = response.body.products
                const count = products.length
                const firstProduct = products[0]
                cy.log(`Number of products: ${count}`)
                cy.log(`First object ${JSON.stringify(firstProduct)}`)
            })
    })

    context('Before and It', () => {
        let response;
        before(() => {
            cy.request(url)
                .then((res) => {
                    response = res
                    expect(response.status).to.eq(200)
                })
        })
        it('cy.request and pin code are in different blocks: Before and It', () => {
            expect(response.status).to.eq(200)
            const products = response.body.products
            const count = products.length
            const firstProduct = products[0]
            cy.log(`Number of products: ${count}`)
            cy.log(`First object ${JSON.stringify(firstProduct)}`)
        })
    })

    describe('promisify', () => {
        it('promisify', () =>
            new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()
                xhr.open('GET', url)
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        resolve(xhr.response)
                    } else {
                        cy.log('rejected')
                        reject(xhr.statusText)
                    }
                }
                xhr.onerror = () => {
                    cy.log('rejected')
                    reject('Network error')
                }
                xhr.send()
            }).then((response) => {
                const products = JSON.parse(response).products
                const count = products.length
                const firstProduct = products[0]
                cy.log(`Number of products: ${count}`)
                cy.log(`First object ${JSON.stringify(firstProduct)}`)
            })
        )

    })
})
