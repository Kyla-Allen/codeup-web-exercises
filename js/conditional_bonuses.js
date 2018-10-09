"use strict";




// ================================= CONDITIONALS BONUSES
// __
// Write a function makeJustinMessage() that returns the string "It's Justin!" if the input to the function is the string "justin" and "It's not Justin" otherwise.
//     If the input contains white space or numbers, return the string "INVALID INPUT".
//     __

// var makeJustinMessage = function (astring) {
//     astring =  astring.toLowerCase();
//     if (astring === "justin"){
//         return "It's Justin!";
//     }
//     else {
//         return "it's not justin.";
//     }
// };
// console.log(makeJustinMessage("jusjtin"));



// Write a function that returns a string describing the action to be taken for a given street light color input.
// For example, if the function input is the string "red", a message like "STOP!" could be returned from the function. Input should not be case sensitive.
//     __

// function getLightColor (color) {
//     color = color.toLowerCase();
//     switch (color) {
//         case "red":
//             return "STOP";
//         case "green":
//             return "GO";
//         case "yellow":
//             return "SLOW DOWN";
//         default:
//             return "....what stoplight are you looking at?";
//     }
// }
// console.log(getLightColor("Red"));



// Create a function that simply returns an input as an output. If no input is passed to the function when it is called, return the string "no input provided."
// __

// function getInput (input){
//     if (input || input === 0){
//         return input;
//     }
//     else {
//         return "no input provided";
//     }
// }
// console.log(getInput());


// Create a function that returns a unique message string for a given digit input. If the input is not a single digit,
// return the string "too many digits". If the input is not a number, return "invalid input". String digits like "1" or "9" are valid inputs.
//     __

// function getMessage (input){
//     parseFloat(input);
//     if (input >= 10){
//         return "Too many digits";
//     }
//     switch (input) {
//         case 1:
//             return "One is the lonliest number";
//         case 2:
//             return "Two birds on a wire";
//         case 3:
//             return "Un de twa.";
//         case 4:
//             return "Be-FOUR we begin....hahah";
//         case 5:
//             return "Um....HI FIVE";
//         case 6:
//             return "Six. I'm running out of string to output";
//         case 7:
//             return "Did you know giraffes have 7 neck bones?";
//         case 8:
//             return "Octopus";
//         case 9:
//             return "Cats have nine lives!";
//         default:
//             return "invalid input";
//     }
// }
// console.log(getMessage("bumblebee"));



// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
//     Catch any invalid inputs (not indicating a day of the week).
// For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')
// __

// function getFavDay (mystring){
//     mystring = mystring.toLowerCase();
//     if (mystring === "monday" || mystring === "mon"){
//         return "The first day of the week!";
//     }
//     else if (mystring === "tuesday" || mystring === "tues"){
//         return "The second day of the week!";
//     }
//     else if (mystring === "wednesday" || mystring === "weds"){
//         return "The middle of the week!";
//     }
//     else if (mystring === "thurdsday" || mystring === "thurs"){
//         return "One day til Friday!";
//     }
//     else if (mystring === "friday" || mystring === "fri"){
//         return "FRIDAY";
//     }
//     else if (mystring === "saturday" || mystring === "sat"){
//         return "The first day of the weekend!";
//     }
//     else if (mystring === "sunday" || mystring === "sun"){
//         return "It's SUNDAY SUNDAY";
//     }
//     else {
//         return "INAVLID INPUT. TO THE DEATH SAUSAGE";
//     }
// }
// var favDay = prompt("What is your favorite day of the week?");
// alert(getFavDay(favDay));





// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator
// __
//
// function aNumber(input){
//     var message;
//      input >= 0 || input <= 0 ? message = "It's a number!": message = "It's not a number!";
//      return message;
//
// }
// var theNum = prompt("Please enter a number");
// alert(aNumber(theNum));





// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter).
// The function then alerts the months available in that season and then asks the user to pick a given month.
// After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months
// __


//
// function main () {
//     var season = prompt("What season do you like?");
//     season = season.toLowerCase();
//     var month;
//
//     if (season === "spring"){
//         alert("The months in this season are March, April, and May");
//         month = prompt("Pick a month.");
//         month = month.toLowerCase();
//         if (month === "march"){
//             alert("My brother was born in March");
//
//         }
//         else if (month === "april"){
//             alert("My birthday is in April!");
//
//         }
//         else if (month === "may"){
//             alert("MAY I have some help with this sentence?");
//
//         }
//         else { alert("That's not an eligible month"); }
//     }
//     ////////////
//     else if (season === "summer"){
//         alert("The months in this season are June, July, and August");
//         month = prompt("Pick a month");
//         month = month.toLowerCase();
//         if (month === "june"){
//             alert("June is when summer starts");
//
//         }
//         else if (month === "july"){
//             alert("My dad was born in July");
//
//         }
//         else if (month === "august" || month === "aug"){
//             alert("August was originally not a month. It was included when Augustus threw a fit about now having a month named after him.");
//
//         }
//         else {
//             alert("That's not an eligible month");
//         }
//     }
//     ////////////////
//     else if (season === "fall" || season === "autumn") {
//         alert("The months in this season are September, October, and November");
//         month = prompt("Pick a month");
//         month = month.toLowerCase();
//         if (month === "september" || month === "sept") {
//             alert("This guy I went to highschool with was born in September. Don't remember what day though.");
//
//         }
//         else if (month === "october" || month === "oct"){
//             alert("My sister was born in October!");
//
//         }
//         else if (month === "november" || month === "nov"){
//             alert("My younger older brother was born in november.");
//
//         }
//         else { alert("That's not an eligible month"); }
//     }
//     /////////////////
//     else if (season === "winter"){
//         alert("The months in this season are December, January, and February");
//         month = prompt("Pick a month");
//         month = month.toLowerCase();
//         if (month === "december" || month === "dec"){
//             alert("CHRISTMAS");
//
//         }
//         else if (month === "january" || month === "jan"){
//             alert("My mom was born in january");
//
//         }
//         else if (month === "february" || month === "feb"){
//             alert("February.");
//
//         }
//         else { alert("That's not an eligible month"); }
//     }
//     return null;
// }
//
// main();






// GOLD STAR BONUS
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//     DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units


function convertDistance (unitFrom, value, unitTo){

}

function main (){
    var unitFrom = prompt("What unit do you want to convert?");
    var value = prompt("What value is the measurement?");
    var unitTo = prompt("What do you want to convert it to?");
    convertDistance();
    return null;
}

main();
