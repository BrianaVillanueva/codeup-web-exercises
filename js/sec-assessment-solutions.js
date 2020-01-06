"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
* 1. Define a function named `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.*/
function isBoolean(input) {
    return typeof input == "boolean";
}

















/* 1. Define a function named `isString` that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.*/

 function isString(x) {

     if (typeof x === "string")

         return true;
 else {

     return false;

 }
 }














/* 1. Define a function named `isNotString` that accepts an input and returns `true` or `false` based on whether an input is not a string. Numeric strings will count as strings and should return `false`.*/

function isNotString (x) {



    if (typeof x !== "string") {

        return true

    } else

        return false
}







 /*1. Define a function named `isEmptyString` that will return `true` when passed an argument with the value of "", i.e. an empty string. All other arguments should return false.*/

function isEmptyString (x) {

   return x === ""}









/* 1. Define a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is less than zero.*/


function isNegative(x) {

    var x = (parseFloat(x));

    if ((x < 0) && (typeof x == "number")) {

        return true;

    } else {

        return false;

    }
}













/*1. Define a function named `isPositive` that accepts an input and returns `true` or `false` based on whether the input is above zero. Any non-numeric input should return false*/
function isPositive(x){

    var x = (parseFloat(x));

    if (x > 0)

    return true

    else {

        return false;
    }
}











/* 1. Define a function named `isZero` that will return `true` when passed an argument of the numeric value `0`, and return `false` for all other arguments.*/
function isZero(x) {

    var x = (parseFloat(x));

    if(typeof x === 0)

        return true;

    else {

        return false;
    }
}







/* 1.Define a function named `isArray` that takes in an input and returns a boolean whether or not that input is an array or not.*/

var isArray = function (input){
    return Array.isArray(input)}


/*1. Define a function named `upperCase` that takes in a single input.
If the input is not a string, return `false`.
If the input is a non-numeric string, then return it with all the letters capitalized.*/

var upperCase = function(input) {

    if (input == null || parseFloat(input) == input) return false;

    if (typeof input === "string")

        return input.toUpperCase()

 else return false}




/*1. Write a function named `containsVowel` that takes in a single input as its argument.
If the argument is not a string, then return `false`. If the argument is a string, then return true if the string contains any of the vowels 'a', 'e', 'i', 'o', or 'u' either uppercased or lowercased. Ignore 'y'. If the string does not contain any of these vowels, then return `false`. */

var containsVowel = function (input) {
    if (typeof input !== "string") return false;

    else {
        var lower = input.toLowerCase();

        return (lower.includes('a') ||
            lower.includes('e') ||
            lower.includes('i') ||
            lower.includes('o') ||
            lower.includes('u'))
    }
}

    }
}

function containsVowel (input) {
    if (type of input !== "string");
    return false;
} else {
    input.match(/[aeiouAEIOU]/) return true;
else return false
}
}