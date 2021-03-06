$(document).ready(function () {
    "use strict";



    // ================================= WARM UP
    // The following should be done in your codeup-web-exercises repo...
    //     Add and commit any work and push before starting this exercise.
    //     Create an html file called pre-ajax.html (with jQuery)
    //     - add a div with an id of 'names-list'
    // - add a button after the div with an id of 'add-names-btn'
    // Create a js file called pre-ajax.js
    // - add a use strict and a $(document).ready(function() {});
    // - add the following...
        var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

        function buildHtml (){
            var html = "<ul>";
            people.forEach(function (person) {
                html += "<li>" + person.name + "</li>";
            });
            html += "</ul>";
            return html;
        }

        function fillColor (peopleobjects){
            $("li").each(function (i) {
                $(this).css('color', peopleobjects[i].favColor );
            })
        }

    // - add functionality to the button so that when it is clicked, an unordered list
    // of names from the people array (included below) is added to the inner HTML of the
    // div#names-list. For an extra bonus, make the font color of each list item map to that person's favColor value.
    $("#add-names-btn").click(function () {
       $("#names-list").html(buildHtml());
        fillColor(people);
    });

});