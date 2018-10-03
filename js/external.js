"use strict";

//Exercise from the 'using javascript with html' lesson
console.log("Hello from external javascript");

alert("Welcome to my website!");

var color = prompt("Hey, what's your favorite color?");
alert("Cool! " + color + " is my favorite too!");


// oVVo From the PREVIOUS lesson oVVo //

//Scenario 1
var costPerDay = 3;
alert ("You're renting three movies! Yay!");
alert("But you have to pay for them. Lame.");
alert("Each movie cost $3 per day");

    //gathering info....
var daysForMermaid = prompt("How many days do you have the movie 'The Little Mermaid?");
var daysForBrotherBear = prompt("Okay. How many for 'Brother Bear'?");
var daysForHercules = prompt("Neat! How about 'Hercules'?");

    //processing.....
var total_for_movies = (daysForMermaid * costPerDay) + (daysForBrotherBear * costPerDay) + (daysForHercules * costPerDay);

    //result
alert("Your total is $" + total_for_movies);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//scenario 2
    //Variables
var total_paid;
var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;
var googleWorked, amazonWorked, facebookWorked;

    //Telling user what's going on
alert("Wow, you've been busy. You got paid from 3 different companies!");
alert("So, here we are to see how much you got.");

    //gathering info...
googleWorked = prompt("How many hours did you work for Google?");
amazonWorked = prompt("Cool. Cool. For Amazon?");
facebookWorked = prompt("Alright. Now, for Facebook?");

    //processing
total_paid = (googleWorked * googlePay) + (amazonWorked * amazonPay) + (facebookWorked * facebookPay);

    //result
alert("You've earned $" + total_paid + "!");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//scenario 3
    //variables
var MAX_STUDENTS, STUDENTS;
var scheduleConflict;

    //telling user what's going on
alert("Okay! Class time...But wait.");
alert("Can you even attend? Let's find out!");

    //gathering info
MAX_STUDENTS = prompt("How many students can there be in this class?");
STUDENTS = prompt("How many students are there?");
scheduleConflict = prompt("Does this class conflict with your current schedule? (Y or N)");

    //processing
scheduleConflict.toLowerCase();

    //result
if (scheduleConflict === "y" || (STUDENTS >= MAX_STUDENTS))
{
    alert("Sorry. You can't go :'( ");
}
else if (scheduleConflict === "n")
{
    alert("Yay! You can attend!");
}
else{
    alert("Sorry. I don't know.");
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//scenario 4
    //variables
var MIN_ITEMS = 2;
var items_bought;
var offerExpired, premiumMember;

    //info dump
alert("Hiya! Okay, so let's see if you qualify for this store deal");

    //gathering info
items_bought = prompt("How many items did you buy?");
premiumMember = prompt("Are you a premium member? (Y or N)");
offerExpired = prompt("Is the offer expired? (Y or N)");

    //processing info
premiumMember.toLowerCase();
offerExpired.toLowerCase();

    //result
if (premiumMember === "y" && offerExpired === "n")
{
    alert("Awesome! You get the deal!");
}
else if ((items_bought > MIN_ITEMS) && offerExpired === "n")
{
    alert("Awesome! You get the deal!");
}
else
{
    alert("Sorry. You don't qualify");
}
