/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];


const name = 'Kyla';
const email = 'kja.kyla.allen@gmail.com';
const languages = ["css","html","javascript","c-sharp"];




users.push({
  name,
  email,
  languages
});


let emails = [];
let names = [];



users.forEach(user => emails.push(user.email));

users.forEach(user => names.push(user.name));




let developers = [];
users.forEach(function(user) {
    let {name, email, languages} = user;
    let info =  `${name}'s email is ${email}. ${name} knows ${languages}`;
});

let list = '<ul>';


for (let developer of developers){
    let html = `<li> ${developer} </li>`;
}
list += '</ul>';
