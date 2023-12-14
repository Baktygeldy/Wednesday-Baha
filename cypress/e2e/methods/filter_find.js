/// <reference types="cypress" />

describe('practicing active element', () => {
    it('should pick active element', () => {

        cy.visit('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element')



        cy.get('myDIV')
            .find('button')
            .filter('.active')
            .click()


        



    });
});