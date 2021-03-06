//the following functions will be useful for solving more complicated functions! These were taken from previous exercises! You will also notice that I use some concepts from es6, although it is not absolutely necessary, it usually results in simpler and/or more eloquent functions.



// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.

function isNegative(num) {
    return num < 0;
}

// Write a function named `isTen` that accepts a number and returns a boolean

function isTen(num) {
    return num === 10;
}

// Write a function named `double` that accepts a number and returns the number
// doubled.

function double(num) {
    return (num * 2);
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// write a function named remove3s that accepts and array of numbers and returns an array with all all of the same numbers except for 3

function removes(numbers) {

    var numberArray = [];

    numbers.forEach(function (num) {
        if( num !== 3){
            numberArray.push(num)
        }

    });
    return numberArray
}


// console.log(removes([1,2,3,4,5,3,3,3]))

// write a function named sumAll that returns the sum of all numbers in an array

function sumAll(array) {

    var total = 0;

    for(var i = 0; i<array.length; i++){
        array[i] = parseFloat(array[i]);
        total += array[i];
    }
    return total;
}

// console.log(sumAll([1,2,3,4,5,6,7,8,9,10]))



// once we have the sum of all numbers in an array we can use it for further math problems.


// write a function named countEvens that accepts an array of nums and returns the number of even numbers in the array.

function countEvens(arr) {
    var evenCount = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            evenCount += 1;
        }
    }
    return evenCount;
}

// console.log(countEvens([1,1,2,2,2]))

// Write a function named totalSales that accepts an array of employee objects. Each object has a 'name' property and a 'sale' property. Return the total sales

// name: 'string'
// sale: 34567



function totalSales(arr) {
    var totalSales = 0;
    for(var i = 0; i<arr.length; i++){
        var empSales = parseFloat(arr[i].sales);
        totalSales += empSales;
    }
    return totalSales
}

// console.log(totalSales([
//     {name: 'snoopy', sales: 100},
//     {name: 'milhouse', sales: 50},
//     {name: 'snoopy', sales: 150},]))


//write a function named AsAndBs that accepts a string and returns a count of how many a's and b's is contains

function AsAndBs(str) {
    var letterCount = 0;
    var string = str.toString();
    string = string.toLowerCase();
    for(var i = 0; i <= string.length - 1; i++){
        if(string.charAt(i) === 'a' || string.charAt(i) === "b") {
            letterCount += 1;
            // console.log(string);
        }
    }
    return letterCount
}

// console.log(AsAndBs('Anaconda'));
// console.log(AsAndBs('abba'));
// console.log(AsAndBs('banana'));
// console.log(AsAndBs(345678));
// console.log(AsAndBs(true));

// Write a function called StringLength that returns the length of a string, if the input is not a string, return false
function stringLength(str) {
    return str.length
}

console.log(stringLength("doggo"))
console.log('doggo'.length)


//write a function that accepts a string and returns an object with the original string, the length of the string, as well as the number of a's and b's

function analyzeWord(str) {
    var word = {};
    word.word = str;
    word.numberOfLetters = stringLength(str);
    word.numberOfAsAndBs = AsAndBs(str);
    return word;
}

// console.log(analyzeWord('dog'));
// console.log(analyzeWord('banana'));
// console.log(analyzeWord('mississippi'));


// Write a function thataccepts an array or strings and returns an array of those words analyzaed similarly

function analyzeAllWords(arr) {
    var analyzedWords = [];
    for(var i = 0; i<arr.length; i++){
        analyzedWords.push(analyzeWord(arr[i]));
    }
    return analyzedWords;
}
console.log(analyzeAllWords(['dog', 'banana', 'mississippi']))
