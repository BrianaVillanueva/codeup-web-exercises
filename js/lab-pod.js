"use strict"


// Write a function definition named isNegativeOdd that takes
// in a number and returns true or false if the value is both less than zero and odd.


function isNegativeOdd(x) { // function named isNegativeOdd, takes in a number.

    if(x < 0 && x % 2 !== 0) { // if the number is less than 0 and the number is odd.
        return true; //return true.
    } else {         // if it is anything else, return false.
        return false;
    }
}



// Write a function definition named isMultipleOfFive that takes in a number
// and returns true or false if the number is evenly divisible by 5.
function isMultipleOfFive(x) { //function named isMultipleofFive, takes in a number.
    if(x % 5 === 0) { // if the number is divisible by 5 and equal in value and type to 0.
        return true; //return true
    } else {         // if it is anything else, return false.
        return false;
    }
}


// Write a function definition named onlyEvenNumbers that takes in sequence
// of numbers and returns the even numbers in an array.
function onlyEvenNumbers(arr) { //function named onlyEvenNumbers, takes in an array
    var final = []; //need an empty bucket
    for(var i=0;i<arr.length;i++) { //write basic loop. index at beginning, equal to 0 and goes the full length.
        if(isEven(arr[i])) { // if each iteration is even
            final.push(arr[i]); //then you're going to push that iteration into the final array.
        }
    }
    return final;
}
