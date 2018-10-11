
/*
 * Title: JS Objects Practice
 * Author: Ryan Orsinger
 * Topics: JS Objects, arrays, writing methods, iteration
 */

// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}

// function makeCar (make, model){
//     var car = {
//         "make": make,
//         "model": model
//     };
//     return car;
// }
//
// console.log(makeCar(22, "H"));
// console.log("I don't know anything about cars.");



// Exercise 2. Use the following data to create a sales report
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units
//
// Monthly Sales Report
// Date: 03-17-2015
// Office: Codeup
// ===================================================
// Employee Number, First Name, Last Name, Sales Units
// ***************************************************
// 1, Jane, Janeway, 3
// 3, Tricia, Triciason, 5
// 4, Jeannette, Jeanson, 4
// 5, Charles Emmerson III, Winchester, 2
// 6, Chet, Chedderson, 8
// 7, Chaiam, Chaiamson, 12
// 8, Dale, Dalesinger, 1
// 9, Zig, Ziglar, 50
// 10, Henry, Kissinger, 1
// 11, Arthur Herbert, Fonzarelli, 23
// 12, Betty, Boop, 67

var salesReport = {
    "title": "Montly Sales Report ",
    "date": "03-17-2015" ,
    "office": "Codeup",
    employees: [
            {
                "employeeNumber": 1 ,
                "firstName": "Jane",
                "lastName": "Janeway",
                "salesUnits": 3
            },
            {
                "employeeNumber": 3,
                "firstName": "Tricia",
                "lastName": "Triciason",
                "salesUnits": 5
            },
            {
                "employeeNumber": 4,
                "firstName": "Jeanette" ,
                "lastName": "Jeanson",
                "salesUnits": 4
            },
            {
                "employeeNumber":5 ,
                "firstName": "Charles Emmerson III",
                "lastName": "Winchester",
                "salesUnits":2
            },
            {
                "employeeNumber":6 ,
                "firstName": "Chet",
                "lastName": "Chedderson",
                "salesUnits": 8
            },
            {
                "employeeNumber": 7 ,
                "firstName": "Chiam",
                "lastName": "Chiamson",
                "salesUnits": 12
            },
            {
                "employeeNumber":8 ,
                "firstName": "Dale",
                "lastName": "Dalesinger",
                "salesUnits": 1
            },
            {
                "employeeNumber": 9,
                "firstName": "Zig",
                "lastName": "Ziglar",
                "salesUnits": 50
            },
            {
                "employeeNumber": 10,
                "firstName": "Henry",
                "lastName": "Kissinger",
                "salesUnits": 1
            },
            {
                "employeeNumber":11 ,
                "firstName": "Arthur Herbert",
                "lastName": "Fonzarelli",
                "salesUnits": 23
            },
            {
                "employeeNumber": 12,
                "firstName": "Betty",
                "lastName": "Boop",
                "salesUnits": 67
            }
            ],
        getCount (array) {
        var count = 0;
        var unitsSold= 0;
        var averageUnitsSold = 0;
            array.forEach(function () {
                count += 1;
                unitsSold += array.employees.salesUnits;
            });
            averageUnitsSold = unitsSold / array.length + 1;
            var infoToReturn = [count, unitsSold, averageUnitsSold];
            return infoToReturn;
        }
};

// Exercise 3. On the objects object above, add the following method
// - getEmployee count should return the total number of employees
// - total number of units sold
// - avg units sold per employee


// Exercise 5. On the report object you created with the data above, add the following methods
//  getProfileCount() should return the total number of profiles
//  getActiveCount() should return the number of active profiles
//  sumOfAllBalances() should return sum of the balance of all profiles
//  getAverageBalance() should return the average balance per users
//  getAverageAge() should return the average age of all users
//  getGenderCounts() should return gender count of users as an object: example {"m": 23, "f", 32}
//  getAllCompanyNames() should return an array of all companies represented by the users
//  getMostCommonEyeColor() should return the most commonly occuring eye-color.
//  getBalancesForActiveAndNonActive() should return the balance of all non-active accounts vs. the balance of all active accounts?
//     this last method should return an object that looks like {"active-balances": 23000, "inactive-balances": 4000} w/ different numbers.







// Practice with assignment by reference