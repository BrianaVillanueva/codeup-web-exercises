"use strict";
console.log("hello from loops");
/*********************************************
*                   WHILE LOOPS
 *********************************************/
// A while loop will run WHILE a certain condition is true
//example below:

// while (condition) {
//  code runs.
// }


//TODO TOGETHER: Create a while loop that counts up to 10 (non-inclusive) by 1
// (0, 1, 2...9)

//start with keyword while then check what you should write in () for the condition
// var i = 0; //need to go add var in front of while to define i
// while(i < 10){
//     console.log(i);
//     i++; //need to increase i above 0 to not have an infinite loop. w this ine i is now 1.
// }


//TODO TOGETHER: Create a while loop that counts down from 20 to 0 (inclusive) by 1
// (20, 19, 18...0)

// var i = 20;
// while(i >= 0){
//     console.log(i);
//     i--;
// }


//TODO TOGETHER: Create a while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)


// var i = 0;
// while(i <= 20){
//     console.log(i);
//     i +=2  //take the current i and add 2 to it, loop
// }



//TODO TOGETHER: Create a while loop that asks the user to confirm: "Would you like to exit?"

// var userConfirm;
// while(!userConfirm) {
//     userConfirm = confirm("Would you like to exit?"); //continue to re-asssign userConfirm to capture value and not infinite loop
// }

//TODO: Create a while loop that counts to 100 (inclusive) in increments of ten:
// (10...20...30...)

// var i = 0;
// while(i <= 100){
//     console.log(i);
//     i +=10
// }
//TODO: Create a while loop that counts down from 50 to 1 (inclusive) in increments of 1:
// (50, 49, 48, 47, 46 .... 1)

// var i = 50;
// while(i >= 1){
//     console.log(i);
//     i --;
// }

/*********************************************
 *               DO-WHILE LOOPS
 *********************************************/
// A do/while loop will run at least once.

// do {
//  Code to be run.
// } while (condition)


// var i = 10;
//
// while (i < 10) {
// 	console.log('while loop iteration #' + i);
// 	i++;
// }
// TODO TOGETHER: Why doesnt the example above run?
//  >>Answer: Because the condition i < 10 is never true


// TODO TOGETHER: Refactor the example above using a do-while loop. What behavior do we notice?
//  >>Answer: We can see how the do block runs one time, then the condition gets checked. Since the condition is false the loop stops running.

// var i =10;
//
// do{
//     console.log('while loop iteration #' + i);
//     i++;
// } while(i < 10);

//TODO TOGETHER: Create a do-while loop that asks the user to confirm: "Would you like to exit?" What difference do you notice?
// >>Answer: we can declare the variable inside the loop, because the do block runs at least once compared to while loop

// do {
//     var userConfirm = confirm("would you like to exit");
// } while (!userConfirm)

//TODO TOGETHER: Create a do-while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)

// var i = 0;
//
// do {
//     console.log(i);
//     i+=2;
// } while (i <= 20);

//TODO: Create a do-while loop that prompts the user for a color and continues to prompt until the string passed is "blue"

// do {
//     var userColor = prompt("Please enter the color blue.");
// } while (userColor !== "blue");



/*********************************************
 *               FOR LOOPS
 *********************************************/
// For loops: Loops that are designed to run a given number of times.

// for (/*initialization*/; /*condition*/; /*increment*/) {
	// body


//TODO TOGETHER: Explore basic for loop syntax

// for (var i = 0; i < 10; i++){
//     console.log(i);
// }

// TODO TOGETHER: Write a for loop that loops through numbers 0 - 5 (inclusive);

// for (var i = 0; i <= 5; i++){
//     console.log(i);
// }

// TODO TOGETHER: Why are loops beneficial?
// TODO TOGETHER: Console.log each color from the array randomColors //ahead lesson example here.

//  var randomColors = ["red","orange","yellow","blue","green"]
// console.log(randomColors[0]);
// console.log(randomColors[1]);
// console.log(randomColors[2]);
// console.log(randomColors[3]);
// console.log(randomColors[4]);
//
// for (var i = 0; i < randomColors.length; i++); {
//     console.log(randomColors[0]);
// }


// TODO TOGETHER: Using a for loop, log all even numbers 0 - 100;

// for (var i = 0; i <= 100; i++){
//     if(i % 2 === 0){  // this line means if its an even number
//         console.log(i);
//     }
// }

// TODO: Using a for loop, log all numbers divisible by 5, from 0 - 100;

// for (var i = 0; i <= 100; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// TODO: Using a for loop, complete the FizzBuzz challenge:
//  Your program should count up to 100.
//  For numbers divisible by 3, log "Fizz"
//  For numbers divisible by 5, log "Buzz"
//  If divisible by 3 and 5, log "FizzBuzz"
//  All other cases, just log the number.

// for (var i = 1; i <= 100; i++){
//     if(i % 15 === 0){
//         console.log("FizzBuzz");
//     } else if (i % 5)
// }



/*********************************************
 *              BREAKS & CONTINUES
 *********************************************/
// We can get a loop to stop using break;

// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
// 	console.log('Loop counter is: ' + i);
//
// 	if (i === numberToStopAt) {
// 		console.log('We have reached the stopping point: break!');
// 		// use the break keyword to exit from the while loop
// 		break;
// 		// nothing after the break will get processed
// 		console.log('You will never see this line.');
// 	}
// }




// We can get an iteration to skip using continue;
// for (var i = 1; i < 100; i++) {
//
// 	if (i % 2 !== 0) {
// 		// skipping all odd numbers;
// 		continue;
// 	}
//
// 	console.log('Here is a lovely even number: ' + i);
// }
