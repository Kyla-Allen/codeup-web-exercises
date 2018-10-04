


"use strict";

// Functions using conditionals but not loops or arrays:

//     Make a function named isOdd(number)

// var isOdd = function (number) {
//     var isOddNumber = false;
//     if (number % 2 !== 0)
//     {
//         isOddNumber =true;
//     }
//     return isOddNumber;
// }
// console.log(isOdd(4));



// Make a function named isEven(number)

// var isEven = function (number) {
//     var isEvenNumber = false;
//     if (number % 2 === 0){
//         isEvenNumber = true;
//     }
//     return isEvenNumber;
// }
// console.log(isEven(9));




// Make a function named identity(input) that returns the input exactly as provided.
//     Make a function named isFive(input)

// var isFive = function(input){
//     var theNumFive = false;
//     if (input === 5){
//         theNumFive = true;
//     }
//     return theNumFive;
// }
// console.log(isFive(5));





// Make a function named addFive(input) that adds five to some input.
//     Make a function named isMultipleOfFive(input)

// var isMultipleOfFive = function (input) {
//     var isDivisableByFive = true;
//     if (input % 5 !== 0)
//     {
//         isDivisableByFive = false;
//     }
//     return isDivisableByFive;
// }
// console.log(isMultipleOfFive(3));



// Make a function named isThree(input)

// var isThree = function (input){
//     var itIsThree = false;
//     if (input === 3){
//         itIsThree = true;
//     }
//     return itIsThree;
// }
// console.log(isThree(4));



// Make a function named isMultipleOfThree(input)

// var isMultipleOfThree = function (input) {
//     var divisableBy3 = false;
//     if (input % 3 === 0){
//        divisableBy3 = true;
//     }
//     return divisableBy3;
// }
// console.log(isMultipleOfThree(3));



// Make a function named isMultipleOfThreeAndFive(input)

// var isMultipleOfThreeAndFive = function (input) {
//     var isDivisable = false;
//     if ((input % 3 === 0) && (input % 5 === 0))
//     {
//         isDivisable = true;
//     }
//     return isDivisable;
// }
// console.log (isMultipleOfThreeAndFive(28));


// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

// var isMultipleOf = function (target, n) {
//     var divisable = false;
//     if(target % n === 0){
//         divisable = true;
//     }
//     return divisable;
// }
// console.log(isMultipleOf(30, 17));


// Make a function named isTrue(boolean)

// var isTrue = function (boolean) {
//     var isTrue = true;
//     if(boolean === false){
//         isTrue = false;
//     }
//     return isTrue;
// }
//
// console.log(isTrue(false));



// Make a function named isFalse(boolean)

// var isFalse = function (boolean) {
//     var isFalse = true;
//     if (boolean === true){
//         isFalse = false;
//     }
//     return isFalse;
// }
// console.log(isFalse(true));



// Make a function named isTruthy(input), remember that values other than true will behave like true

// var isTruthy = function (input) {
//     if (input) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isTruthy(""));



// Make a function named isFalsy(input), remember that values other than false behave like false

// var isFalsey = function (input) {
//     if (input) {
//         return false;
//     } else {
//         return true;
//     }
// }
// console.log(isFalsey("W"));




// Make a function named isVowel(letter)

// var isVowel = function (letter) {
//     letter = letter.toLowerCase();
//     var isAVowel = false;
//     if (letter === "a" || letter==="e" || letter==="i"|| letter==="o"|| letter==="u"){
//         isAVowel = true;
//     }
//     return isAVowel;
//
// }
//
// console.log(isVowel("X"));




// Make a function named isConsonant(letter)

// var isConsanant = function (letter) {
//     letter = letter.toLowerCase();
//     var isAConsonant = true;
//     if (letter === "a" || letter ==="e" || letter ==="i"|| letter ==="o"|| letter ==="u"){
//         isAConsonant = false;
//     }
//     return isAConsonant;
//
// }
//
// console.log(isConsanant("C"));



// Make a function named isCapital(letter)

// var isCapital = function (letter) {
//     var isCapital = false;
//     if(letter === letter.toUpperCase()) {
//         isCapital = true;
//     }
//     return isCapital;
// }
// console.log(isCapital("a"));



// Make a function named isLowerCase(letter)

// var isLowerCase = function (letter) {
//     var isLower = false;
//     if(letter === letter.toLowerCase()) {
//         isLower = true;
//     }
//     return isLower;
// }
// console.log(isLowerCase("A"));



// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter


// var hasLowerCase= function (aString) {
//     var hasLowerCase = false;
//
//     for (var count = 0; count <= aString.length; count++) {
//
//         var character = aString.charAt(count);
//
//         if (character === character.toLowerCase()) {
//             hasLowerCase = true;
//         }
//     }
//
//     return (myString === myString.toLowerCase());
// }
// console.log(hasLowerCase("WWWW"));



// Make a function named isSpace(letter) that returns if a character is a space character

// var isSpace = function (letter) {
//   return letter === " ";
// }
// console.log(isSpace(" "));



// Make a function named isZero(number)

// var isZero =function (number) {
//     return number === 0;
// }
// console.log(isZero(0));




// Make a function named notZero(input) that returns true if the input is not zero

// var isZero =function (number) {
//     return number !== 0;
// }
// console.log(isZero(3));



// Write a function named lowerCase(string)

// var lowerCase = function (aString) {
//     return aString.toLowerCase();
// }
// console.log(lowerCase("AKHWWEUHFQ<WJAFE"));



// Write a function named double(n) that returns a number times two

// var double = function(n){
//     return n * 2;
// }
// console.log(double(4));



// Write a function named triple(n) that returns a number times 3

// var triple = function (n) {
//     return n * 3;
// }
// console.log (triple(3));



// Write a function named quadruple(n) that returns a number times 4

// var quadruple = function (n) {
//     return n * 4;
// }
// console.log(quadruple(4));



// Write a function named half(n) that returns 1/2 of the provided input

// var half = function (n) {
//     return n / 2;
// }
// console.log (half(2));



// Write a function named subtract(a, b) that returns a minus b

// var subtract = function (a,b) {
//     return a - b;
// }
// console.log(subtract(5,3));



// Write a function named multiply(a, b) that returns the product of a times b

// var multiply = function (a,b) {
//     return a * b;
// }
// console.log(multiply(5,3));



// Write a function named divide(a, b) that returns a divided by b

// var divide = function (a,b) {
//     return a / b;
// }
// console.log(divide(12,3));



// Write a function named remainder(a, b) that returns the remainder after dividing a by b

// var remainder = function (a,b) {
//     return a % b;
// }
// console.log(remainder(5,3));



// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b

// var modulo = function (a,b) {
//     return a % b;
// }
// console.log(modulo(5,3));



// Write a function named cube(n) that returns n * n * n

// var cube = function (n) {
//     return n * n * n;
//
// }
// console.log(cube(3));


// Write a function named squareRoot(n) that returns the square root of the input
//
// var squareRoot = function (n) {
//     return Math.sqrt(n);
//
// }
// console.log(squareRoot(16));



// Write a function named cubeRoot(n) that returns the cube root of the input

// var cubeRoot = function (n) {
//
//     return Math.round(Math.pow(n, 1/3));
//
// }
// console.log(cubeRoot(125));


// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.

// var invertSign = function (number) {
//     if (number <= 0 || number >= 0)
//     {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
//
//
// console.log(invertSign("wiggle"));



// Write a function named degreesToRadians(number)

// var degreesToRadians = function (number) {
//     return number * 0.01745329252;
// }
// console.log(degreesToRadians(32));




// Write a function named radiansToDegrees(number)

// var degreesToRadians = function (number) {
//     return number / 0.01745329252;
// }
// console.log(degreesToRadians(32));



// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.

// var isBlank = function (input) {
//     var whatKind;
//     if (input === " "){
//         whatKind = "space";
//     }
//     else if (input === "\n"){
//         whatKind = "newline";
//     }
//     else if (input === "\t"){
//         whatKind = "tabs";
//     }
//     else {
//         whatKind = "Unidentified";
//     }
//     return whatKind;
// }
//
// console.log(isBlank("\t"));



//     Make a function named trim(string) that removes empty spaces before and after the input.

// var trim = function (aString) {
//     return aString.trim();
// }
// console.log(trim("       bob      "));



//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value

// var areEqual = function (input1, input2) {
//     return input1 == input2;
// }
// console.log(areEqual(2,4));



// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.

// var areIdentical = function (input1, input2) {
//     return input1 === input2;
// }
// console.log(areIdentical(2,4));



//     Make a function named not(input) returns the input with a flipped boolean

// var not = function (input) {
//     return !input;
// }
// console.log (not(false));


// Make a function named notNot(input) that the negation of the negation of the input.

// var not = function (input) {
//     return !!input;
// }
// console.log (not(false));


//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND

// var and = function (thing1, thing2){
//     return thing1 && thing2;
// }
// console.log(and(false, false));



// Make a function named or(predicate1, predicate2) that returns the logical operation of OR

// var or = function (thing1, thing2){
//     return thing1 || thing2;
// }
// console.log(or(false, false));



// Write a function called reverseString(string) that reverses a string

// var reverseString = function (string) {
//         var splitString = string.split("");
//         var reverseArray = splitString.reverse();
//         var joinArray = reverseArray.join("");
//         return joinArray;
// }
// console.log(reverseString("worm"));



// Make a function named absoluteValue(number) that returns the absolute value of a number.

// var absoluteValue = function (number) {
//     return Math.abs(number);
// }
// console.log(absoluteValue(-22));




//     Make a function named rollDice(sides) that takes in an argument
// containing the number of sides the die should have. Generate a random number between 1
// up to and including the number of sides.

// var rollDice = function (sides) {
//     return Math.round(Math.random() * sides);
// }
// console.log(rollDice(6));
