"use strict";

//get buttons
var buttons = document.getElementsByTagName("button"); //returns an html collection
var equalBtn = buttons.namedItem("equal");
var clearBtn = buttons.namedItem("clear");

//get input fields
var input1 = document.getElementsByClassName("first_number");
var input2 = document.getElementsByClassName("second_number");
var operand = document.getElementsByClassName("operand");

//gathering information
function getInfo (){
    console.log("Test");
}




//the following function does the actual math....
function doMath () {
    var operand = operand.trim().parse();
}

//equal button calls the doMath function
equalBtn.addEventListener("click", doMath);
buttons.addEventListener('click', getInfo);

