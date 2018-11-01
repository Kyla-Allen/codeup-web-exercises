"use strict";

const wait = (num) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          return resolve();
      }, num);
  });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



// Create a function that accepts a github username, and returns a promise that resolves with
// the date of the last commit that user made. Reference the github api documentation to achieve this.


let button = document.getElementById("button");

const getCommit = (user) =>  {
    let request = fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': '8b1b24c4a67f44f2087204711583d14a99114fca'}});
    request
        .then( (response) => response.json())
        .then(data => {
            console.log(data);
            let commits = data.filter(data => data.type === "CommitType");
            console.log(commits);
            // document.getElementById("data").innerHTML = displayData(data[0].created_at);
        });
};


const displayData = data => `<label for="data_found"> Last Commit Was... </label><h4 id="data_found">${data}</h4>`;



button.addEventListener('click', function (e) {
    e.preventDefault();
    let user = document.getElementById("input_user").value;
    getCommit(user);

});




