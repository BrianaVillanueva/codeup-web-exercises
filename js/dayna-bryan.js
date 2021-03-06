<!doctype html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport"
content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bryan's Arrays and Objects Review</title>
</head>
<body>
<script>
"use strict";
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
//for loop version
function remove3s(numbersArray){
    var numberBucket = [];
    for(var i = 0; i < numbersArray.length; i++){
        if(parseInt(numbersArray[i]) !== 3){
            numberBucket.push(numbersArray[i]);
        }
    }
    return numberBucket;
}
console.log(remove3s([1, 2, 3, 3, 3, 6, 6, 7, 8])); //[1, 2, 6, 6, 7, 8]
//for each version
function removeThrees(numbersArray){
    var numberBucket = [];
    numbersArray.forEach(function (num) {
        if(parseInt(num) !== 3){
            numberBucket.push(num);
        }
    });
    return numberBucket;
}
console.log(removeThrees([1, 2, 3, 3, 3, 6, 6, 7, 8])); //[1, 2, 6, 6, 7, 8]
//BRYANS CODE
// [1, 2, 3, 4, 5] //array, integars
// {}//object, varies in type
//  function remove3s(arr){
//      let bucket = [];
//      arr.forEach(function(num){
//          if (num !==3) { //condition
//              bucket.push(num);
//          }
//      });
//      return bucket
//  }
// console.log(remove3s([1, 2, 3, 3, 3, 6, 6, 7, 8]));
//##############################################################################################################
// write a function named sumAll that returns the sum of all numbers in an array
//for loop version
function sumAll(numbersArray){
    var sumOfArray = 0;
    for(var i = 0; i < numbersArray.length; i++){
        sumOfArray += numbersArray[i];
    }
    return sumOfArray;
}
console.log(sumAll([1, 9, 5])); //15
//forEach version
function sumOfAll(numbersArray){
    var sumOfArray = 0;
    numbersArray.forEach(function (num){
        sumOfArray += num;
    });
    return sumOfArray;
}
console.log(sumOfAll([1, 9, 5])); //15
//BRYANS CODE
//when they want you to
//for loop example of the answer.
// function sumAll(arr) {
//     var total = 0;
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = parseFloat(arr[i]);
//         total += arr[i];
//     }
//     return total;
// }
// function sumAll(arr){
//     var total = 0;
//     arr.forEach(function(num){
//         num = parseFloat(num);
//         total += num;
//     });
//     return total;
// }
// console.log(sumAll([1, 9, 5]));
// once we have the sum of all numbers in an array we can use it for further math problems.
//##############################################################################################################
// write a function named countEvens that accepts an array of nums and returns the number of even numbers in the array.
//for loop version
function countEvens(numbersArray){
    var totalEvens = 0;
    for(var i = 0; i < numbersArray.length; i++){
        if(numbersArray[i] % 2 === 0){
            totalEvens += 1;
        }
    }
    return totalEvens;
}
console.log(countEvens(([1, 1, 2, 2, 2])));
//forEach version
function evensCount(numbersArray){
    var totalEvens = 0;
    numbersArray.forEach(function(num){
        if(num % 2 === 0){
            totalEvens += 1;
        }
    });
    return totalEvens;
}
console.log(evensCount(([1, 1, 2, 2, 2])));
//BRYANS CODE
// function countEvens(arr) {
//     var evenCount = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenCount += 1;
//         }
//     }
//     return evenCount
// }
// function countEvens(arr) {
//     var countEvens = 0;
//     arr.forEach(function (num) {
//         if (num % 2 === 0) {
//             countEvens++;
//         }
//     });
//     return countEvens;
// }
// console.log(countEvens(([1, 1, 2, 2, 2])));
//##############################################################################################################
// Write a function named totalSales that accepts an array of employee objects. Each object has a 'name' property and a 'sale' property. Return the total sales
//name: "string"
//sale: 34567
//for loop version
function totalSales(employeesArray){
    var moneyCount = 0;
    for(var i = 0; i < employeesArray.length; i++){
        moneyCount += employeesArray[i].sales;
    }
    return moneyCount;
}
console.log(totalSales([
    {name: 'snoopy', sales: 100},
    {name: 'milhouse', sales: 50},
    {name: 'elmer', sales: 150}
]));
//forEach version
function salesTotal(employeesArray){
    var moneyCount = 0;
    employeesArray.forEach(function(employee){
        moneyCount += employee.sales;
    });
    return moneyCount;
}
console.log(salesTotal([
    {name: 'snoopy', sales: 100},
    {name: 'milhouse', sales: 50},
    {name: 'elmer', sales: 150}
]));
//BRYANS CODE
//     function totalSales () {
//         var totalSales = 0;
//         for (var i = 0; i < arr.length; i++) {
//             var empSales = parseFloat(arr[i].sales);
//             totalSales += empSales;
//         }
//         return totalSales;
//     }
//     console.log(totalSales([
//         {name: 'snoopy', sales: 100},
//         {name: 'milhouse', sales: 50},
//         {name: 'elmer', sales: 150}
//     ]));
//300
//##############################################################################################################
//write a function named AsAndBs that accepts a string and returns a count of how many a's and b's is contains
function AsAndBs(inputString){
    var letterCount = 0;
    var stringArray = inputString.toLowerCase().split("");
    for(var i = 0; i < stringArray.length; i++){
        if(stringArray[i] === "a" || stringArray[i] === "b"){
            letterCount += 1;
        }
    }
    return letterCount;
}
console.log(AsAndBs("banana")); //4
console.log(AsAndBs("Abba")); //4
console.log(AsAndBs("345678")); //0
console.log(AsAndBs("true")); //0
//forEach version
function countAB(inputString){
    var letterCount = 0;
    var stringArray = inputString.toLowerCase().split("");
    stringArray.forEach(function(str){
        if(str === "a" || str === "b"){
            letterCount += 1;
        }
    });
    return letterCount;
}
console.log(countAB("Banana")); //4
console.log(countAB("Abba")); //4
console.log(countAB("345678")); //0
console.log(countAB("true")); //0
//BRYANS CODE
//45678990 -> '45678990;
//     function AsAndBs(str) {
//         var letterCount = 0;
//         var string = str.toString();
//         string = string.toLowerCase();
//         for (var i = 0; i <= string.length - 1; i++) {
//             if (string.charAt(i) === "a" || string.charAt((i) === "b")){
//                 letterCount += 1;
// // console.log(strong);
//             }
//         }
//         return letterCount;
//     }
//     console.log(AsAndBs("banana"));
//     console.log(AsAndBs("abba"));
//     console.log(AsAndBs("345678"));
//     console.log(AsAndBs("true"));
//##############################################################################################################
// Write a function called StringLength that returns the length of a string, if the input is not a string, return false
function stringLength(str){
    if(typeof str === "string"){
        return str.length;
    } else {
        return false;
    }
}
console.log(stringLength("doggo")); //5
console.log(stringLength(52)); //false
console.log(stringLength(true)); //false
//BRYANS CODE
//     function stringLength(str){
//         return str.length;
//     }
// console.log(stringLength("doggo"));
// console.log(('doggo').length);
//##############################################################################################################
//write a function that accepts a string and returns an object with the original string, the length of the string, as well as the number of a's and b's
function stringToObject(str){
    var newObject = {
        original: str,
        length: stringLength(str),
        count: AsAndBs(str)
    };
    return newObject;
}
console.log(stringToObject("dog"));
console.log(stringToObject("banana"));
console.log(stringToObject("mississippi"));
//BRYANS CODE
//     function analyzeWord(str) {
//         var word = {};
//         word.word = str;
//         word.numberOfLetters = StringLength(str);
//         word.numbofAsAndBs = AsAndBs(str);
//         return word;
//     }
//     console.log(analyzeWord("dog"));
//     console.log(analyzeWord("banana"));
//     console.log(analyzeWord("mississippi"));
//##############################################################################################################
// Write a function that accepts an array of strings and returns an array of those words analyzed similarly
//for loop version
function multipleWords(arrayOfStrings){
    var arrayOfObjects = [];
    for(var i = 0; i < arrayOfStrings.length; i++){
        arrayOfObjects.push(stringToObject(arrayOfStrings[i]));
    }
    return arrayOfObjects;
}
console.log(multipleWords(['dog', 'banana', 'mississippi']));
//forEach version
function moreWords(arrayOfStrings){
    var arrayOfObjects = [];
    arrayOfStrings.forEach(function (str){
        arrayOfObjects.push(stringToObject(str));
    });
    return arrayOfObjects;
}
console.log(moreWords(['dog', 'banana', 'mississippi']));
//BRYANS CODE
//     function analyzeAllWords(arr){
//         for (var i = 0; i < arr.length; i++){
//             analyzeWords.push(analyzeWord(arr[i]));
//         }
//         return analyzeWords;
//     }
//
//     console.log(analyzeAllWords(['dog', 'banana', 'mississippi']));
</script>
</body>
</html>
