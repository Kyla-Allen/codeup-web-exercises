"use strict";

// ======= BONUS 1 Problems
const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

// PROBLEM 1 - create an array of the first letters of each fruit
const firstLetters = fruits.map(fruit => fruit.charAt(0));
// console.log(firstLetters);




// PROBLEM 2 - create array of user objects based on the customers array
const users = customers.map(user => user.name)
// console.log(users);


// of objects (each user object should just have name and age properties)
// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
const civilServants = [
    {
        name: "Derp",
        age: 42,
        occupation: "Police Officer",
        noOfPurchases: 2
    },
    {
        name: "Mop",
        age: 0,
        occupation: "Sheepicorn",
        noOfPurchases: 208
    },
    {
        name: "Lily",
        age: 26,
        occupation: "Teacher",
        noOfPurchases: 6
    }
];



// ======= BONUS 2 Problems
// Given the following array...
const names = ["John", "Max", "Ronald"];

// complete the bonuses below...
// - Create an array where all names are given a last name of Smith.
const lastNames = names.map(name => {
    let newName = {
    firstName: name, lastName : "Smith"
    };
    return newName;
});
// console.log(lastNames);


// - Create an array where each word is in all caps
const allCaps = names.map( name => name.toUpperCase());
// console.log(allCaps);



// - Create an array where all names have more than 3 letters
const moreThanThree = names.filter(name => name.length > 3);
// console.log(moreThanThree);


// - Create an array of names with only the last two letters of each name
const lastTwoLetters = names.map(name => {

});



// - Create a total count of all letters
const allLetters = names.reduce((total, current) => {
    return total + current.length;
},0);
// console.log (allLetters);


// - Create a string of all letters in alphabetical order
// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
// - Create a string of all vowels in the entire array of names
// - Create a single object with properties








// ======= BONUS 3 Problems
// Given the following array...
const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];
// complete the bonuses below...
// - Calculate the average age of family members
// - Create an array of family objects without the age property
// - Create an array of all minors
// - Calculate the total age combined of family members
// - Create an array of only female family member objects
// - Create a single object with properties containing arrays of all names, genders, and ages
