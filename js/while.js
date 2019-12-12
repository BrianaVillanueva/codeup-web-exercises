"use strict";


// Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// var x = 2;
//
// while (x <= 65526) {
//     console.log(x);
//     x *= 2; //or here, you can say: x = x * 2; //
// }

// An ice cream seller can't go home until she sells all of her cones.' +
// 'Write a JS program that generates a random number between 50 and 100' +
// 'representing the amount of cones to sell. Your code should generate' +
// 'numbers between 1 and 5, simulating the amount of cones being bought' +
// 'by her clients. Use a do-while loop to log to the console the amount' +
// 'of cones sold to each person. This is how you get the random numbers.


//1. first generate total amount of cones - happens one time -> allCones
//2. Customer wants to buy x amount of cones -> conesPurchased
//3. We need to check to see if we have that amount of cones available
//4. If not (sad path) -> sorryMessage
//5. If we do have enough cones (happy path) -> happyConesMessage
//6. Subtract the amount of cones sold from allCones
//7. Repeat until i dont have any cones left. repeat until ->allCones > 0


// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;



// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do{
//     //This is how many cones are purchased by each customer
//     var conesPurchased = Math.floor( x:Math.random() * 5) + 1;
//     //checks if i have enough cones to sell
//     if(conesPurchased > allCones) {
//         //sad path - i cant sell you cones because i dont have enough
//         var sadConesMessage = "cannot sell you " + conesPurchased + "I only have " + allCones + "....";
//
//         console.log(sadConesMessage);
//     } else {
//         //happy - path I can sell you cones! because i have enough
//         allCones -= conesPurchased;
//
//         var happyConesMessage = conesPurchased + "cones sold ..." + allCones + "cones to go";
//         console.log(happyConesMessage);
//     }
// } while (allCones > 0);
//
// console.log("Yay i sold all the cones");