describe('as a user I should be able to Login to the hr app', () => {


    it('should Login', () => {


    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.get('[name="username"]').type('Admin')

    cy.get('[type="password"]').type('admin1234')

    cy.get('[type="submit"]').click()

    cy.url().should('include','dashboard')

    });
});

// Function sumofpositives(...number){
//     return number.filter(num => )
// }




