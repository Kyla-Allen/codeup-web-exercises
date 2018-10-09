


// while (true){
//     var number = prompt("Please enter a number between 1 and 50");
//     if (number=== "no"){
//         alert("You have no choice in the matter");
//     }
//     else if (number >= 1 && number <= 50){
//         alert("You did it!");
//         break;
//     }
//     else {
//         alert("Invalid");
//     }
// }


// var numToExclude = prompt("Pick which number to exclude");
// while (isNaN(numToExclude) || numToExclude > 50 || numToExclude < 1 || numToExclude % 2 !== 1){
//     console.log("No can do, Pooh");
//     numToExclude = prompt("Pick which number to exclude");
// }
// numToExclude = parseFloat(numToExclude);
//
// for (i = 1; i <=50 ; i += 2){
//     if (i === numToExclude){
//         console.log ("NOPE! Skipping " + i);
//         continue;
//     }
//     console.log ("Here is an odd number: " + i);
// }