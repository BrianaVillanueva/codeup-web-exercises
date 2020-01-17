"use strict";

let reindeer = [
    {
        name: "Dot",
        age: 5,
        isGold: false
    },{
        name: "Dasher",
        age: 16,
        isGold: false
    },{
        name: "Patch",
        age: 5,
        isGold: false
    },{
        name: "Rocket",
        age: 5,
        isGold: false
    },{
        name: "Rocket",
        age: 5,
        isGold: false
    },{
        name: "Rocket",
        age: 5,
        isGold: false
    },{
        name: "Rocket",
        age: 5,
        isGold: false
    },
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



//-----3.) how to get all the fur colors together// this will be a map in a map, not just include in a result but push into a waiting zone. breaking down functional programming-----//
let furColors = [];
hamsters.map(hamster => {
    hamster.fur.map(color =>furColors.push(color) );
});

console.log(furColors);

//-----4.) the function we pass in will return true or false. get golden ones//using FILTER to see to leave it in or toss out-----//
let goldReindeer = reindeer.filter(deer => deer.isGold); //is deer.isGold is true, will return

console.log(goldReindeer);

//-----5.) reduce average height of hamsters-----// reduce is just a restructure from old ways
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
