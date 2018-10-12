// ================================= OBJECTS BONUSES
// BONUS 1 (create a dog object):
// The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array


// var dog = {
//     "breed": "daschund",
//     "weightInPounds": 22,
//     "age": 5,
//     "color": "yellow-brown",
//     "sterilized": true,
//     "shotRecords": [
//         {
//             "date": "No clue my dude",
//             "typeOfShot": "Rabies"
//         },
//         {
//             "date": "Tomorrow",
//             "typeOfShot": "Cutieitis"
//         }
//     ],
//     bark (){
//         console.log("BORK!");
//     },
//     getOlder (){
//        return this.age += 1;
//     },
//     fix (){
//         if(this.sterilized === false){
//             this.sterilized = true;
//         }
//     },
//     vaccinate (name) {
//         var date = Date();
//         var newVaccine = {
//             "date": date,
//             "typeOfShot": name
//         };
//         return this.shotRecords.push(newVaccine);
//     }
// };









// BONUS 2 (expanding on the books object exercise):
// Add a property "keywords" that contains an array of possible genres the book may be categorized by
// Add a boolean property "isAvailable" and set it to true
// Add a dateAvailable property that has a string of the date/time when the book will be available
// Add a method lend() that...
// - changes the available property to false if it is not already false
// - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
// (to do this, research the JS Date object and use methods from it in your code)
// Add a method receive() that...
// - changes the available property to true
// - changes the dateAvailable property to the string "now"
// BONUS 3 (expanding on the books object exercise):
// Create an application to take in user input to build the books array of objects.
//     Allow the user to continue adding books or to finish adding books.
//     Once the books have been added, output the books array in the console.
//     Allow a user to delete a book or a group of books by title or author last name
// Allow a user to edit a book by index number in the books array


var books= [];

function createBook (title, author){
    var book = {
        "title": title,
        "author": author
    };
    return book;
}
books.push(createBook("Tales of Two Potatoes", "Charles T Doopsy"));
books.push(createBook("An Eclair in Time", "Lori Lorsee"));
books.push(createBook("Kero Kero", "An actual frog"));
books.push(createBook("The Bridge", "Dudette Dude"));
books.push(createBook("To Believe", "The Letter Z"));


function showBookInfo(book) {
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);
}


books.forEach(function (element) {
    showBookInfo(element);
})





// ================================= MATH OBJECT BONUS
// Create an application that will calculate the volume of a building based on user input.
//     Account for multiple rooms and a user choice of measurement (between imperial or metric).



//This function gathers the information needed to calculate the volume
function getInfo (array, index) {
        var theLength = prompt("What is the length of room number " + index + "?");
        var theHeight = prompt("What is the height of room number " + index + "?");
        var theWidth = prompt("What is the width of room number " + index + "?");
        var newRoom = {
            "length": theLength,
            "height": theHeight,
            "width": theWidth
        };
        return array.push(newRoom);
}

//this function calculate the volume of each room
function calculate (width, length, height){
    var volume = width * length * height;
    return volume;
}

//the function that runs everything
function main (){
    var units = prompt("What units are you using?");
    var numOfRooms = parseFloat(prompt("How many rooms are we measuring? (if using entire building, put 1)"));
    var rooms = [];
    var totalVolume = 0;

    //Let's call some functions!
    //But we gotta put them in some loops :'(

    //getting info...
    for (var i = 1; i <= numOfRooms; i ++){
        getInfo(rooms, i);
    }
    //calculating...
    rooms.forEach(function (room) {
        totalVolume += calculate(room.width, room.length, room.height);
    });

    //telling user result
    alert("The volume of your building is...");
    alert(" (drumroll) ");
    alert(totalVolume + " " + units + "!");

}

//main();
