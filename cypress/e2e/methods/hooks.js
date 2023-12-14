import { admin } from '../pages/admin'

describe('practicing hooks', () => {

    before(() => {
        cy.fixture('users').then((data) => {
            globalThis.data = data
        })

    })

    beforeEach(() => {
        cy.login(data.username, data.password)
    });


    it('Test 1', () => {

        cy.visit('/')

        cy.contains('Admin').click()

        cy.get(admin.addButton).click()

        cy.get('[placeholder="Type for hints..."]').type('Virat  Kohli')

        cy.get('.oxd-autocomplete-wrapper').contains('Virat Kohli').click()

        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()

        cy.get('[class="oxd-grid-item oxd-grid-item--gutters"]').contains('ESS').click()

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()

        cy.get('[class="oxd-grid-item oxd-grid-item--gutters"]').contains('Enabled').click()

        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Bermet123#')

        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('1234567a')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('1234567a')

        cy.get('.oxd-button--secondary').click()

        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').contains('Bermet123#').click()

        cy.get('[type="submit"]').click()

        


    });







    //     it.skip('Test 2', () => {
    //         cy.visit('/')
    //         cy.contains("Claim").click()
    //     });

    //     it.skip('Test 2', () => {
    //         cy.visit('/')
    //         cy.contains("Directory").click()
    // });
});