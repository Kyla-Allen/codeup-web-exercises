"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// //this function sets if number inputted is even or odd
// var isItEvenOrOdd = function (number) {
//     var evenOrOdd;
//     if(number % 2 === 0) {
//         evenOrOdd = "even";
//     } else{
//         evenOrOdd = "odd";
//     };
//     return evenOrOdd;
// } //end of isItEvenOrOdd
//
// //this function takes the input and add a hundred to it
// var plusHundred = function (number) {
//     var aNumber = parseFloat(number);
//     return aNumber + 100;
// }//end of plusHundred
//
//
// //this function determines whether the number is negative or positive
// var whatSign = function (number) {
//     var sign;
//     if (number < 0){
//         sign = "negative";
//     } else {
//         sign = "positive";
//     };
//     return sign;
// }//end of whatSign
//
// //this is the main body here. Where all the other functions are run.
// var tOf = confirm("Would you like to enter a number?");
// if (tOf) {
//     var number = prompt("Please enter your number");
//     if (number >= 0 || number <=0) {
//         alert(" You picked an " + isItEvenOrOdd(number) + " number");
//         alert("Plus a hundred it is " + plusHundred(number));
//         alert("It is a/n " + whatSign(number) + " number");
//     } else { //not a number
//     alert("You didn't enter a number!");
//     }
// }
// else
// {
//     alert("Okay. Bye");
// }
 //end of program

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var user_color = prompt("Enter a color: ");
// var analyzeColor = function (color) {
//     var message;
//     switch (color) {
//         case "red":
//             message = "Strawberries are red";
//             break;
//         case "orange":
//             message = "Orange. Am I talking about the fruit or the color?";
//             break;
//         case "yellow":
//             message = "Bananas are yellow";
//             break;
//         case "green":
//             message = "The grass is green";
//             break;
//         case "blue":
//             message = "The sky is blue";
//             break;
//         case "indigo":
//             message = "What's the difference between indigo and violet? I think indigo has more blue?";
//             break;
//         case "violet":
//             message = "Violets isn't the answer- What? I'm supposed to say 'violence?'";
//             break;
//         default:
//             message = "What color is that?";
//     }
//     return message;
// }
// alert(analyzeColor(user_color));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var user_price = parseFloat(prompt("What is your total price?"));
var calculateTotal = function (luckyNumber, price) {
    var discount_price;
    switch (luckyNumber) {
        case (0):
            discount_price = price;
            break;
        case (1):
            discount_price = price - (price * .1);
            break;
        case (2):
            discount_price = price - (price * .25);
            break;
        case (3):
            discount_price = price - (price * .35);
            break;
        case (4):
            discount_price = price - (price * .5);
            break;
        case (5):
            discount_price = 0;
            break;
        default:
            var message = "invalid number";
            return message;
    }
    return discount_price;
}

alert("Your original price was $" + user_price);
alert("Your lucky number is " + luckyNumber);
alert("Your new price.");
alert("Is.");
alert( "$" + calculateTotal(luckyNumber, user_price) + "!");