/// <reference types="cypress" />

describe('practicing auto suggestion', () => {
    it('should pick Apple', () => {

        cy.visit('https://www.google.com/')

        cy.get('#APjFqb').type('N')

        cy.contains('.G43f7e li', 'NBA').click()



    });
});