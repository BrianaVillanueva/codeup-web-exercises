var a = 1;
//undefined


var b = a++;
//undefined


var c = ++a;
//undefined


var d = "hello";
//undefined


var e = false;
//undefined


d++;
//NaN


e++;
//0


var perplexed;
//undefined


perplexed + 2;
//NaN


var price = 2.7;
//undefined


price.toFixed(2);
//"2.70"


isNaN(0)
//false


isNaN(1)
//false


isNaN(" ")
//false


isNaN("0")
//false


isNaN("1")



isNaN("3.145")
//false


isNaN(Number.MAX_VALUE)
//false


isNaN(Infinity)
//false


isNaN("true")
//true


isNaN(true)
//false


isNaN("false")
//true


isNaN(false)
//false


NaN == NaN
//false


!true
//false


!false
//true


!!true
//true


!!false
//false


!!0
//false


!!-0
//false


!!1
//true


!!-1
//true


!!0.1
//true


!!"hello"
//true


!!""
//false


!!" "
//true


!!' '
//true


!!''
//false


!!"false"
//true


!!"0"
//true


//Take note that you can update a variable that holds
// a string to contain a different string but the original
// string object is NOT changed. all of the methods above
//will NOT modify the original string, instead they will
// produce a new string. Example below.

// var myString = 'javascript is cool!';
// myString.toLocaleUpperCase(); // output is -> 'JAVASCRIPT IS COOL!'
// myString; // output is -> 'javascript is cool!'



//Exercise 2
var sample = "Hello Codeup";
//undefined

//use .length to find the number of characters in the string.
console.log(sample.length)
//output is -> 12

//make the sample string all upper or all lower case.


//update the variable sample via concatenation so that it contains "Hello Codeup Students"


//Replace "Students" with "Class"

//Find the index of "c" using .indexOf()
//What do you observe?


//Find the index of "c" using .indexOf()

//Retrieve a substring that contains only the word "Codeup"
//by using indexOf()  and substring()


//Exercise 3
//Describe the following scenarios by
//writing js code that is variables and operators.
//Understand how real world conditions can be represented with code.




//You have rented some movies for your kids: The little mermaid
// (for 3 days), Brother Bear (for 5 days, they love it), and
// Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?





// you're working as a contractor for 3 companies: Google, Amazon and
//Facebook, they pay you a different rate per hour. Google pays $400,
// Amazon $380, and Facebook $350. How much will you receive in payment
// for this week? You worked 10 hours for Facebook, 6 hours for Google
//and 4 hours for Amazon.





//A student can be enrolled in a class only if the class is not full
//and the class schedule does not conflict with her current schedule.




//A product offer can be applied only if a person buys more than 2
// items, and the offer has not expired. Premium members do not
//need to buy a specific amount of products.





//Exercise 4
//use the following code to follow the instructions below.
// var username = 'codeup';
// var password = 'notastrongpassword';


//Create a variable that holds a boolean value
//for each of the following conditions:
//the password must be at least 5 characters
//the password must not include the username
//the username must be no more than 20 characters
//neither the username or password can start or end with whitespace








