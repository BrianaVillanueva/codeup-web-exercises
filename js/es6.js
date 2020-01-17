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

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`

const name = 'Briana Villanueva'; //<--global scope
const email = 'briana.n.villanueva@gmail.com';
const languages = [`CSS`, `Javascript`, `jQuery`, `bootstrap`];

// TODO: rewrite the object literal using object property shorthand
users.push({  //<--object scope
  name, //<--taking in values from variables above
  email, //<--this email that was outside now is in here, "designing a room inside a building"
  languages, //<--inheriting
});
console.log(users);

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions //arrow is a new way to write functions. you dont always have to utilize it.

// users.forEach(function(user) {  <---original
//   return emails.push(user.email);
// });

users.forEach ((user) => {  //<---rewritten
  emails.push(user.email); //<--you can have "reutrn " before emails but not needed
});
console.log(emails);


// users.forEach(function(user) { <---original
//   return names.push(user.name);
// });

users.forEach ((user) => {  //<---rewritten
  names.push(user.name); //<--you can have "reutrn " before names but not needed
});
console.log(names);


// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name; <---original
  // const email = user.email;
  // const languages = user.languages;

  const {email, languages, name} = user; //<---rewritten
  console.log(user);

  // TODO: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', ')); <---original
  developers.push(`${name}'s email is ${email}, ${name}, knows, ${languages.join(', ')}`); //<---rewritten

});

console.log(developers);

// TODO: Use `let` for the following variable
 let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {

 developers.forEach( (developer) => { // <---original is asking developers to do something
   for (let developer of developers) { //<-- means we are going to grab each individual developer and od something

  // TODO: rewrite the assignment below to use template strings
//   list += '<li>' + developer + '</li>'; <---original

   list += '<li>${developer}</li>'; //<-rewritten

 };

   list += `</ul>`;

   document.getElementById("message").innerHTML = list;