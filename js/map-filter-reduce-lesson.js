"use strict";

let reindeer = [
    {
        name: "Dot",
        age: 5,
        isGold: false
    },{
        name: "Dasher",
        age: 8,
        isGold: true
    },{
        name: "Patch",
        age: 2,
        isGold: false
    },{
        name: "Rocket",
        age: 6,
        isGold: false
    },{
        name: "Dancer",
        age: 9,
        isGold: true
    },{
        name: "Prancer",
        age: 5,
        isGold: true
    },{
        name: "Groot",
        age: 9,
        isGold: false
    },{
        name: "Vixen",
        age: 9,
        isGold: true
    },
    {
        name: "Comet",
        age: 11,
        isGold: true
    },
    {
        name: "Archie",
        age: 3,
        isGold: false
    },
    {
        name: "Cupid",
        age: 13,
        isGold: true
    },
    {
        name: "Donder",
        age: 16,
        isGold: true
    },
    {
        name: "Boots",
        age: 16,
        isGold: false
    },
    {
        name: "Blizten",
        age: 16,
        isGold: true
    }
];




let hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];


//---------------------------------------EXAMPLES DOWN BELOW-----------------------------------------//


//-----1.) lets get the names of the reindeer-----//
let reindeerNames = reindeer.map((deer) =>{
    return deer.name;
});

console.log(reindeerNames);



//-----2.) lets get the fur color for each hamsters-----//
// let furColors = hamsters.map(hamster => hamster.fur); //can leave off curly brace and "return"

// console.log(furColors);



//-----3.) how to get all the fur colors together// this will be a MAP in a map, not just include in a result but push into a waiting zone. breaking down functional programming-----//
let furColors = [];
hamsters.map(hamster => {
    hamster.fur.map(color =>furColors.push(color) );
});

console.log(furColors);

//-----4.) the function we pass in will return true or false. get golden ones//using FILTER to see to leave it in or toss out-----//
let goldReindeer = reindeer.filter(deer => deer.isGold); //if deer.isGold is true, will return

console.log(goldReindeer);

//-----5.) REDUCE average height of hamsters-----// reduce is just a restructure from old ways
let totalHamsterHeight = hamsters.reduce((hamsterStack, hamster) => {  //need to pass in more than one thing, one function, function is going to receive more than one item. also pass in a where the accumulation should start
    return hamsterStack + hamster.heightInMM; //this is growing as we go. each time we are adding hamsters height to hamster stack.
}, 0);


//lets write in a for of loop//

let hamsterStack = 0;
for (let hamster of hamsters) {
    hamsterStack += hamster.heightInMM; //+= does the same as hamster stack = hamster stack + that
}

console.log(totalHamsterHeight); //to get an average add "/ hamsters.length" after totalHamsterHeight
console.log(hamsterStack);



//-----6.)reduce -----//
const salesPeople = [
    {name: 'Kim Halpert', sales: 100}, //first time through
    {name: 'Dwight Schrute', sales: 50}, //second time through
    {name: 'Andy Bernard', sales:150}, //third time through
];

const totalSales = salesPeople.reduce((total, person) => {
    return total + person.sales;
}, 200);
console.log(totalSales);



//-----7.)take a sentence and count the number of acurrances for each word in a sentencce-----//


function countWords(sentence, counts = {}) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') { //if we havent counted this word yet, not added to list yet
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1; //if we have seen that word before, we increment it
        }
        return wordCounts;
    }, counts); // start with an empty object
    return wordCountObject;
}

let wordCounts = countWords('Mary had a little lamb little lamb little lamb');
console.log(countWords("the little monkey had a banana", wordCounts));

// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}