"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

    if(isAdmin){
    //show admin navbar
    //showAdminNavbar() <- function
}

//TODO Together: Send a 20% off coupon if its users birthday
    if(isBirthday){
        //send the 20% off coupon
        //sendBirthdayEmail() <- function
    }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

if(isRainy){
    alert("It's raining!");
}

//TODO Together: Write an if statement that alerts the user whether or not they have
// enough money to buy a new item. Assume there are no hidden fees or taxes.

var itemCost = 100; //<- 100 can change to test output
var currentBalance = 200;

if(itemCost <= currentBalance) {
    alert("You have enough money!");
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

var numberOfLives = 0;

if(numberOfLives === 0) {
    alert("Sorry, game over!");
}

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

var Weather = "snowing"; //write variables first

if(weather === "snowing") {
    alert("It's snowing!");
}


//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

var numberInput = 20; //random number
if(numberInput > 10) {
    alert("true");
}


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.




// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

var isAdmin = true;

if(isAdmin) {
    //show specific navbar
    alert("User is an admin");
} else {
    //show a different navbar
    alert("User is a regular user ");
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true,
// else return "have a nice day!"

var isRainy = false; //false can be true or false to test output

if(isRainy) {
    alert("It's raining");
} else {
    alert("Have a nice day!");
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0,
// else alert "Next Level!"

var numberOfLives = 5;

if(numberOfLives === 0) {
    alert("Sorry, game over!");
} else {
    alert("Next Level!");
}
//refactor to a function, example down below//

function checkIfGameIsOver(numberOfLives) {
    if(numberOfLives === 0) {
        return "Sorry game is over!"; //with function you have a return
    } else {
        return "Next Level!";
    }
    //now call function w a console.log
    console.log(checkIfGameIsOver(numberOfLives:0));

//OR//

function checkIfGameIsOver(numberOfLives) {
    var returnMessage;
    if(numberOfLives === 0) {
    returnMessage = "Sorry game is over!";
} else {
    returnMessage = "Next Level!";
}
return returnMessage;



//TODO: Write an if statement that alerts "It's snowing!" if weather is
// equal to "snowing", else alert "Check back later for more details!"

  var weather = "sunny";

  if(weather === snowing); {
  alert("It's snowing!");
} else {
  alert("Check back later for more details!");
}

//TODO: Write an if statement that alerts true if numberInput is greater
// than 10, else alert "the number is less than 10"

    var numberInput = 5;
     if(numberInput > 10) {
     alert("true");
} else {
     alert("The number is less than 10");
}

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that
// accepts numberOfLives and returns "Sorry, game over" if numberOfLives
// is 0, else return "Next Level!.



//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE

    var weShouldDeleteStuff = confirm("Are you sure you want to delete everything?");
    console.log("The value of the confirm is: " + weShouldDeleteStuff);

    if (weShouldDeleteStuff) {
        // delete all the things...
        alert("delete everything");
    } else {
        alert("Operation Canceled!");
    }


//TODO: Write a confirm asking the user if they are 13 years of age or older.
// If they are, alert "You may proceed", if they are not, alert
// "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!"
// if weather is equal to "snowing", alerts "It's raining" if weather is equal
// to "raining", alerts "have a nice day" for all other cases

    var weather = "snowing";

    if(weather === "snowing") {
    alert("It's snowing!");
} else if (weather === "raining") {
    alert("It's raining!");
} else if (weather === "sunny") {
    alert("It's sunny!");
} else {
    alert("Have a nice day!");
}

//TODO Together: refactor the above statement as a function

    function checkWeather(weather) {

    if(weather === "snowing") {
    return("It's snowing");
} else if (weather === "raining") {
    return("It's raining");
} else if (weather === "sunny") {
    return ("It's sunny");
} else {
    return("Have a nice day!");
    }

console.log(checkWeather(weather: "sunny"));


// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color
// as an input. When this function is called, it should return a message
// informing the user what to do when approaching that color light at an intersection.








// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.







// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


//Below is a ternary example only fo if/else//
var success = true;
var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
console.log(message)
//if true, Operation was successful from tern is output.
// if var success is false, Oops, something went wrong from tern is the output




//TODO: Refactor the following conditional as a ternary

var weather = "sunny";
var weatherMessage;

if(weather === "rainy"){
    weatherMessage = "It's raining!";
 } else {
     weatherMessage = "Have a nice day!";
 }

//WRITE YOUR TERNARY STATEMENT HERE!

var weatherMessage = (weather === "rainy") ? "it's raining" : "Have a nice day";
//(weather === "rainy") is our conditional that we bring down, now console.log
console.log(weatherMessage);


// =============== SWITCH STATEMENT ================ //used only for when its equal to
//TODO Together:

 var pizzaPreference = prompt("What kind of pizza do you like?");

 switch(pizzaPreference) { //switch() is wht you're comparing
     case "pineapple and hot sauce": //you write case and what you're comparing it to from switch()
         alert("What a coincidence, that's my favorite!");
         break; //you NEED the break to stop rest from running once you hit a true condition.
     case "cheese":
         alert("Just plain cheese? Okay...");
         break;
     default: //if nothing evaulates to true this is what runs
         alert(pizzaPreference + " isn't my favorite, but let's order some!");
         break;
 }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

var weather = "rainy"; //first start with a variable

switch(weather) { //what you're evaluating goes in ()
    case "rainy":
        alert("it's raining");
        break;
    case "sunny":
        alert("it's sunny");
        break;
    case "snow":
        alert("its snowing");
        break;
    default:
        alert("have a nice day!");
        break;
}

//write as a function//

function checkWeather(weather){
    var weatherMessage;

    switch (weather) {
        case "rainy":
            weatherMessage = "it's raining";
            break;
        case "sunny":
            weatherMessage = "its sunny";
            break;
        case "snow":
            weatherMessage = "it's snowing";
            break;
        default:
            weatherMessage = "have a nice day!";
            break;
    }

    return weatherMessage;
}

console.log(checkWeather(weather:"sunny"));


//TODO: Rewrite the intersection function from earlier as a switch statement.

//function checkTrafficLight(trafficLight){
    //if(trafficLight === "green"){
        //return "keep going!";
    //} else if (trafficLight === "yellow"){
        //return "slow down";
    //} else if (trafficLight === "red"){
        //return "stop";
    //} else {
        //return "proceed with caution";
    //}
//}
//console.log(checkTrafficLight("green"));


function checkTrafficLight(trafficLight) {
    var colorMessage;

    switch(trafficLight){
         case "green":
             colorMessage = "keep going!";
             break;
          case "yellow":
              colorMessage = "slow down";
            break;
     case "red":
            colorMessage = "stop";
            break;
        default:

 }

}






// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output
 // these are in MDN docs - conditionals for further reading

// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html
//if shopping has been done
// text is child gets $10
//else
// text is child gets $5

// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

//if weather is sunny,
// It is nice and sunny outside today. Wear shorts! Go to the beach, or the
// park, and get an ice cream.

//else if weather is rainy
//Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.

//else if weather is snowing
//The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate,
// or go build a snowman.

//else if weather is outcast
//It isn't raining, but the sky is grey and gloomy; it could turn any minute,
// so take a rain coat just in case.

//else
// send default if weather doesn't match any of the given


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
// if theme equals white
//background color goes white and text color goes black
// else theme equal black
//background color goes black and text color goes white
