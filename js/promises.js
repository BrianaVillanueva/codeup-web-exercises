"use strict";



//1.) Write a function named wait that accepts a number as a parameter,
//and returns a promise that resolves after the passed number of milliseconds



//asynchronous js is setting up things for the future//says i'll get back to that or when it gets back to me i'll deal w it//
//--Example below--//

// const wait = (num) => {
//     for (let i=0; i<num*1000000; i++){
//
//     }
//     return "hello";
// }

/////----------------------NOW AS A PROMISE----------------//////

// const wait = (num) => {
//     return new promise((resolve) =>{
//         setTimeout(() => {
//             resolve();
//         }, num);
//     })
//
// }

// wait(1000).then(() => console.log('you\'ll see this after 1 second')); //.then is a responder. when the promise returns, .then//
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds')); //<---these go w the promise problem above//

// console.log(wait(3000)); //<-----this goes w the asynchronous problem above//


/////-------------------------NOW AS A FETCH---------------------/////
// fetch in its code says new promise and doesnt setup in api call//

const wait2 = () => {
    return fetch("https://icanhazdadjoke.com/");
};
wait2().then((data) => {
    console.log(data);
});



//2.) Generate a Personal Access Token for the GitHub API.
// We will use this so that we don't get rate limited when
//talking to the GitHub API. You can add the token to your requests like this:


fetch(url, {headers: {'Authorization': 'token'}});






//3.) Create a function that accepts a GitHub username,
//and returns a promise that resolves with the date of
//the last commit that user made. Reference the github
//api documentation to achieve this.


