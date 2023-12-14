// it.only('Login Test', ()=>{
//     cy.visit('https://opensource-demo.orangehrmlive.com/')
//     cy.get('[name="username"]').type('Admin')
//     cy.get('[name="password"]').type('admin123')
//     cy.get('[type="submit"]').click()
//     cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').contains('Admin').click()
//     cy.get('.orangehrm-header-container').contains('Add').click()
//     cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
//     cy.get('[class="oxd-grid-item oxd-grid-item--gutters"]').contains('ESS').click()
//     cy.get('[placeholder="Type for hints..."]').type('Virat Kohli')
//     cy.wait(3000)
//     cy.get('.oxd-autocomplete-wrapper').contains('Virat Kohli').click()
//     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
//     cy.get('[class="oxd-grid-item oxd-grid-item--gutters"]').contains('Enabled').click()
//     cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Bahaha123@')
//     cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('1234567a')
//     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('1234567a')
//     cy.get('.oxd-button--secondary').click()
//     cy.wait(5000)
//     cy.get(':nth-child(2) > .oxd-input').type('Bahaha123@')
//     cy.get('[type="submit"]').click()
//     cy.get('.orangehrm-horizontal-padding').should('have.text','(1) Record Found')


// })





// let numb = [1,-4,7,12]
// function positivesum(arr) {
//     let sum = 0 

//     for(let i=0; i<arr.length; i++) {
//         if(arr[i]>0) {
//             sum += arr[i]
//         }
//     }
//     return sum;
// }
// console.log(positivesum(numb))


// let first_name = "Hello"
// let last_name = "world"

// let result = first_name +" "+ last_name

// console.log(result)



// let i; 
// let n;

// n = 100
// i = n
// console.log(i)



// let a, b, c;

// a=1
// b=5
// c=a 
// a=b


// console.log(a)
// console.log(b)
// console.log(c)



// let numb = [1, -4, -5,7, 12]
// function positiveSum(arr) {

//     let sum = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//         sum.push(arr[i])
//         }
//     }
//     return sum;
// }
// console.log(positiveSum(numb))












// let numb = [1, -4, 7, 12];

// Define a function called positiveSum that takes an array as an argument
// function positiveSum(arr) {
    // Initialize a variable sum to keep track of the sum of positive numbers
    // let sum = 0;

    // Iterate through each element in the array
    // for (let i = 0; i < arr.length; i++) {
        // Check if the current element is greater than 0 (positive)
        // if (arr[i] > 0) {
            // Add the positive number to the sum
    //         sum += arr[i];
    //     }
    // }

    // Return the final sum of positive numbers
//     return sum;
// }

// Call the positiveSum function with the numb array and log the result to the console
// console.log(positiveSum(numb));