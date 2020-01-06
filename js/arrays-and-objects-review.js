// #Loops, Arrays, & Objects
//
// ##Basic Review
//
// 1. What is an array in Javascript?
//     -An array is an ordered collection of data.
//     -Each slot in an array can hold any type of data.
//
// 2. What is an object in Javascript?
//     -A person, place or thing defined by properties.
//     -An object is an unordered collection of data.
//     -
//
// 3. What is the difference between an array and an object?
//      -
//      -
//
// 4. What is a property? A method?
//      -A property is listed in an object to list details of the object.
 // -A method is the term used for a function inside an Object.

// 5. Why are loops useful when dealing with arrays?
//      -Loops are useful in arrays to
//
// 6. What is an index?
//      -An index is
//
// 7. What is the difference between dot and bracket notation?
//      -A dot notation calls.
//      -A bracket notation begins the list of properties in an object.





// ## Practice Problems
//
//
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//
//     ```js
//         filterNumbers(["fred", true, 5, 3]) //[3, 5]
//     ```
// Write the function
// parameter is an array
// since we have an array i need to loop --> for each
//check to see if its a number. (if  typeof  eachNumber === "number")
// if it is a number push number to bucket array
// //in an ascending order --> .sort method
// returning an array []
//
function filterNumbers(inputArray) { //step one
    var numberBucket = []; //step two

    inputArray.forEach(function(item) { //step three for each loop
        if (typeof item === "number"){ //step four, conditional statement
            numberBucket.push(item)
        }
    });
    return numberBucket.sort(function(a, b){ //step 6 & 7
        return a - b;
    });
}


// console.log(filterNumbers(["fred", true, 5, 3]));
// console.log(filterNumbers([1, 30, 4, 21, 1000000, true, "string"]));


// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
//
// 1. Write a function called getOlder
// 2. Add a parameter after that called dogs. -> function getOlder(dogs)
// 3. Deaking with an array so you need a for each loop to get each individual dogs and add one -> dog.age += 1 //++ is the same as +=
// 4. return dogs
// 5.


var dogList =  [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];


    function getOlder(dogs) {
        dogs.forEach(function(dog) {
            dog.age += 1; // This line is saying, dog . age = dog age + 1// you can also use-> dog.age++;
        });
       return dogs
    }

    // console.log(getOlder(dogList));


   //  //Example output age
   //   [
   //      {
   //           name: "Chompers",
   //           breed: "Pug",
   //           age: 8
   //       },
   //       {
   //           name: "Freddy",
   //           breed: "Lab",
   //           age: 5
   //       },
   //       {
   //           name: "Mr. Pig",
   //           breed: "Mastif",
   //           age: 11
   //       }
   //   ];






//
// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false
//
// 1. Write a function called washCars
// 2. Have it take in array w a parameter called cars -> washCars(cars)
// 3. For each Loop -. for each car set isDirty = false;
// 4. return cars // returning the array out
//
//
//
//
       var carList =     [
                 {
                     make: 'Volvo',
                     color: 'red',
                     year: 1996,
                     isDirty: true
                 },
                 {
                     make: 'Toyota',
                     color: 'black',
                     year: 2004,
                     isDirty: false
                 },
                 {
                     make: 'Ford',
                     color: 'white',
                     year: 2007,
                     isDirty: true
                 }
            ];


            function washCars(cars) {
                cars.forEach(function(car){
                    car.isDirty = false;
                });
                return cars;
            }

            // console.log(washCars(carList));// now call the function//


            // Example output:
//              [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: false // changed to false
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false // stays the same
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: false // changed to false
//                  }
//              ]
//     ```
//
//      4. Write a function, `adminList()` that takes in an array of user objects and returns
//         a count of all admins based on the isAdmin property. Refactor to return an array of
//         admin-only user emails. Refactor again to return an array of user objects that are admins.
//      PART ONE
//      1. write a function called adminList
//      2. have it take in an array of user obects -.function adminList(users)
//      3. have a var of totalAdminCount and set it equal to 0 -> var totalAdminCount = 0; //
//      4. loop through all the users -> for each ->
//      5. if(userAdmin){
//          totalAdmin += 1;
//          }
//      4. return totalAdminCount
//
//
//
       var userList =   [
             {
                 isAdmin: true,
                 email: 'user1@email.com'
             },
             {
                 isAdmin: true,
                 email: 'user2@email.com'
             },
             {
                 isAdmin: false,
                 email: 'user3@email.com'
             }
         ];
//
//
//
//
//       // Example Output (before refactor): 2
// //
// //
// //         // Example Output (after 1st refactor):
// //         [
// //             'user1@email.com',
// //             'user2@email.com'
// //         ]
// //
// //
// //         // Example Output (after 2nd refactor):
// //         [
// //              {
// //                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]
//
//      function adminList(users){
//           var totalAdminCount = 0; // when needing to keep track of an ongoing count for a total you NEED to make a var = 0 as your counter
//           users.forEach(function(user) {
//               if(user.isAdmin) {                  totalAdminCount += 1;
//             }


            //PART TWO//
             // 1. Refactor to return an array of admin-only user emails.
              //2. Write a function adminList(users)
              //3. va adminEmailBucket = []
              //4. loop through users -> for each user if isAdmin we need to push the email to the bucket
             // 5. after we loop through everything and push them we need to return our email bucket
              //6. now write it out

              // function adminList(users) {
              //     var adminEmailBucket = [];
              //     if (user.isAdmin) {
              //         adminEmailBucket.push(user.email) //you need to get to the emails so put a parameter of user.email to grab user which you used for your individual items then . email
              //     }
              // })

              // return adminEmailBucket;
     // }

                 // console.log(adminList(userList));

              //PART THREE//
//              1. refactor again to retun an array of user objects that are admins.
//              2. write a function adminList(users)
//              3. var adminBucket = []
//              4. loop through users-> for each user if isADmin push user to the bucket
//              5. return adminBucket
//
//                 function adminList(users) {
//                     var adminBucket = [];
//
//                     users.forEach((function (user) {
//                         if(user.isADmin) {
//                             adminBucket.push(user);
//                         }
//                     });
//                     return adminBucket;
//                 }

        // console.log(adminList(userList));



//      5. Create a function, `makeSandwichObjects()` that takes in two array of strings,
//      breads and fillings and returns an array of sandwichObjects that contain properties
//      for bread and filling and values correspond to the same order of the two passed in arrays.
//      Assume the two array inputs are the same length.
//
//      1. write a function called makeSandwichObjects, parameter(breads, fillings)-> function makeSandwichObjects(breads, fillings)
//      1.5 We need to creat sandwichBucket = [];
//      2. We have to loop-> for loop[i]
//      3. We need to create a sandwich object for each of the pairings
//      4. We need to return sandwichBucket
//      5.
//      6.
//      7.
//      8.
//
//         //     Example Input:
//
//          var breadList  = [
//              "white",
//              "wheat",
//              "rhy",
//              "white"
//          ];
//
//          var fillingList = [
//              "pb&j",
//              "ham",
//              "cheese steak",
//              "tuna"
//          ];
//

        // ONE FUNCTION//

        // function makeSandWichObjects(breads, fillings) {
        //     var sandwichBucket = [];
        //     for(var i = 0; i < breads.length; i++){
        //       var  sandwichObject = { //now need to create sandwich object
        //             bread: breads[i],
        //           fillings: fillings[i]
        //       }
        //       sandwichBucket.push(sandwichObject); // now need to push object
        //     }
        //     return sandwichBucket;
        // }
        //     console.log(makeSandWichObjects((breadList, fillingList));
            //
            // second metthod
            // sandwichBucket.push({
            //     bread: breads[i],
            //     filling: fillings[i]
            // }};
        // }
        // return sandwichBucket;
// }



//          makeSandwichObjects(breads, fillings) // example call to the function
//
//         // Example Output:
//            [
//              {
//                  bread: "white",
//                  filling: "pb&j"
//              },
//              {
//                  bread: "wheat",
//                  filling: "ham"
//              },
//              {
//                  bread: "rhy",
//                  filling: "cheese steak"
//              },
//              {
//                  bread: "white",
//                  filling: "tuna"
//              }
//          ]
//
//


     // TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"


// 1. Write a function called keepYellow parameter of strings
//2. var yellowBucket = []
//3. for each / loop through strings array-> for each string check to see if it is equal === to the string "yellow"
//4. If it is equal to the "string" yellow, push that string to the bucket.
//5. return yellowBucket



function keepYellow(strings){
    var yellowBucket = [];

    strings.forEach(function(str){
        if(str === "yellow"){
            yellowBucket.push(str);
        }
    })
    return yellowBucket;
}


console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));
