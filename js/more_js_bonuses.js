"use strict";

// =============================== EVEN MORE FUNCTION BONUSES
// 1) Create a function that will return how many whitespace characters are at the beginning and end of a string.

// var numOfWhiteSpace = function (mystring) {
//     var whiteSpaceCount = 0;
//     for (var count = 0; count <= mystring.length; count ++){
//         if (mystring.charAt(count) === " "){
//             whiteSpaceCount += 1;
//         }
//     }
//     return whiteSpaceCount;
// }
// console.log(numOfWhiteSpace("  Florp   "));


// 2) Create a function that takes in two string inputs. If the second string input is present
// in the first, return the first input string with the second input string removed from it. If the
// second string input is present multiple times in the first, the second string will only be removed
// where it first occurs in the first string. If the second string input is not present in the first,
// return the first string as entered in the function.

// var daString = function (string1, string2) {
//    if (string1.includes(string2)){
//        return string1.replace(string2, "");
//    } else {
//        return string1;
//    }
// }
// console.log(daString("tacotruck", "taco"));


// 3) Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).

// var lastLetter = function (mystring) {
//     var lastCharacter = mystring.length;
//     lastCharacter = lastCharacter - 1;
//     if (mystring.charAt(lastCharacter) === "a")
//     {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(lastLetter("banan"));



// 4) EXTRA CHALLENGE: create a function that will return how many whitespace characters are
// at the beginning of a string (hint: use regex).

// var howManyWhiteSpace = function (mystring) {
//     var length = mystring.length;
//     var count = 0;
//     var whiteSpaceCount = 0;
//
//     for (count ; count < length ; count ++){
//         if (mystring.charAt(count) === " "){
//             whiteSpaceCount += 1;
//         } else {
//             return whiteSpaceCount;
//         }
//     }
// }
// console.log(howManyWhiteSpace("   Florp   "));





// 5) Create a function returnTrueMessage() that returns the string "Hey, it's true!"
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiement passing in different functions.

// var returnTrueMessage = function () {
//     return "Hey, it's true!";
// }
//
// var returnFalseMessage = function () {
//     return "Hey, it's false!";
// }
//
// var returnMessage = function (message) {
//     return message;
// }
//
// console.log(returnMessage(returnTrueMessage()));


// 6) Create a function, willLoginUser() that takes in a username string,
// password string, user age, a boolean indicating if they are an admin. The function will
// return true if the username is not the same as the password and the user is at least 18 years old.
// If the user is an admin, they do not have to be a certain age but the password must still not match the username.


// var willLoginUser = function (username, password, age, admin) {
//     if ((username !== password) && (age >= 18 || admin === true)){
//         return true;
//     }else{
//         return false;
//     }
// }
//
// console.log (willLoginUser("kyla","12",12,true));



