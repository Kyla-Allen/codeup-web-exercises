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

update();
$("button").on('click', function (e) {
    update();
})