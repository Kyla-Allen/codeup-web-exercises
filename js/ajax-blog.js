//updates the data
function update (){
    var posts = $.ajax("data/blog.json", { //gets data
        "type": "GET"
    })

    posts.done(function (data) { //calls the function that builds the html
        $("#posts").html(buildHTML(data));
    })

    posts.fail(function (){
        alert("ERROR");
    })

}




//building html....
function buildHTML (data){
    var html = '';
    data.forEach(function (item) {
        html += "<div class='card m-1'>";
        html += "<h1 class='card-title m-1'>" + item.title + "</h1>";
        html += "<p class='card-text m-2'>" + item.content + "</p>";
        html += "<ul>";
        item.categories.forEach(function (category){
            html += "<li>" + category + " </li>";
        })
        html += "</ul>";
        html += "<h6 class='m-2'>" + item.date + "</h6>";
        html += "</div>";
    })
    return html;
}

//from local storage
function buildHTMLfromLocal (data){
    var html = '';
        html += "<div class='card m-1'>";
        html += "<h1 class='card-title m-1'>" + data.title + "</h1>";
        html += "<p class='card-text m-2'>" + data.content + "</p>";
        html += "<ul>";
        data.categories.forEach(function (category) {
         html += "<li>" + category + " </li>";
        })

        html += "</ul>";
        html += "<h6 class='m-2'>" + data.date + "</h6>";
        html += "</div>";
    return html;
}

//EXTRA STUFF

// We gotta get the input from the form
function getPost(){
    var d = new Date();
    var post ={
        "title": $(".title").val(),
        "content": $(".post").val(),
        "categories": getTags(),
        "date": d
    };
    return post;
}

function getTags(){
    var tags = $(".tags").val().split(",");
    return tags;
}


// we add that form as an object to local storage
$(".postBtn").on('click', function (e) {
    console.log(getPost());
    localStorage.setItem("posts", JSON.stringify(getPost()));
});


// Then, load the homepage and the post should be there!


//THIS STUFF NEEDS TO EXIST
update();
$("button").on('click', function (e) {
        update();
});