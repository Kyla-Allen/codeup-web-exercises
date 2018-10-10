"use strict";

//
// BONUSES 1:
// Write a function to toggle all characters in a string: in a given string,
// toggle all characters to their opposite case. Special characters will not change.
//     Example input: "aBc12#"
// Example output: "AbC12#"

function toggleCharacter (aString){
    for (var i = 0; i <= aString.length; i++){

        var currentCharacter = aString.charAt(i);


        if (currentCharacter === currentCharacter.toUpperCase()){
            currentCharacter = currentCharacter.toLowerCase();
        } else {
            currentCharacter = currentCharacter.toUpperCase();
        }

        aString = aString.replace(aString.charAt(i), currentCharacter);
    }
    return aString;
}

console.log(toggleCharacter("WwW"));





// BONUS 2:
// Write a function that takes a given string appended with a number at the end.
// The program will check the length of the string to verify the string is equal to the number appended.
// If the number appended equals the string length, output "Yes". if the number appended does not equal
// the string length, output "No".
//     Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"


// function stringLengthMatchesNumber (aString){
//     var count = 0, characters = 0;
//
//     //for loop
//     for (count; count < aString.length; count ++) {
//         var currentCharacter = aString.charAt(count);
//         if (!isNaN(parseFloat(currentCharacter))){
//             var appendedNumber = parseFloat(currentCharacter);
//         }
//         characters += 1;
//     } //end of for loop
//
//     if (characters === appendedNumber){
//         return "yes";
//     }
//     else{
//         return "no";
//     }
// }
//
// console.log(stringLengthMatchesNumber("geek5"));


