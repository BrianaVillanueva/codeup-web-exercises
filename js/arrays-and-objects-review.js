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
//      -A method is the term used for a function inside an Object.

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
// function filterNumbers(inputArray) {
//     var bucket = [];
//
//     inputArray.forEach(function(item) {
//         if (typeof item === "number"){
//             bucket.push(item)
//         }
//     });
//     bucket.sort(function(a,b){
//         return a - b;
//     });
//     return bucket;
// }
//
//
// console.log(filterNumbers(["fred", true, 5, 3]));
// console.log([1, 30, 4, 21, 1000000, true, "string"]);


// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
//
var dogs =  [
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
    // console.log(dogs);

    function getOlder(arr) {
        dogs.forEach(function(dog,index){
            dogs[index].age +=1;
            // return dogs.age +=1;
        });
        // console.log(dogs);
    }



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
//        var cars =     [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: true
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: true
//                  }
//             ];
//             console.log(cars);


            // function washCars(cars) {
            //     cars.forEach(function(car, index){
            //         cars[index].isDirty = false
            //     });
            //     console.log(cars);
            // }
            //
            //
//             // Example output:
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





// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//


//        var admins =   [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              },
//              {
//                  isAdmin: false,
//                  email: 'user3@email.com'
//              }
//          ];
// /
//
// //        // Example Output (before refactor): 2
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
//     ```
//
// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//
//     ```js
//         //     Example Input:
//
//          var breads  = [
//              "white",
//              "wheat",
//              "rhy",
//              "white"
//          ];
//
//          var fillings = [
//              "pb&j",
//              "ham",
//              "cheese steak",
//              "tuna"
//          ];
//
//          makeSandwichObjects(breads, fillings) // example call to the function
//     ```
//     ```js
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
//     ```
