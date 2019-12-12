"use strict";

//
var car = {  ///this portion needs to not be commented un order for the last example to work //
    make: "mazda",
    model: "6",
    year: "2008",
    isTitled: true,
    options: ["Steering wheel", "Tires", "engine", "radio"],
    goGoGo: function (key) {
        if (key == "key") {
            console.log("We're getting there!");
        } else {
            console.log("try again tomorrow!");
        }
    }
}
//
// car.goGoGo("key");


// second example


//
// var teacher = {
//     name: 'Daniel',
//     languages: ["english", "javascript", "Java"],
//     teach: function(language) {
//         if (teacher.languages.includes(language))
//             console.log("Here is some knowledge about " +language);
//         else
//             console.log("I do not know about that " +language);
//     }
// }
// teacher.teach("Java");  //try changing to a sad path to get alternate output//



//third example//


// var truck = new Object();
//
// truck.make = "tesla";
// truck.model = "CyberTruck";
// truck.year = 2022;
// truck.gogogo = function(){
//     console.log("VROOOOM!");
// }
// console.log(truck.make);
// console.make = "Dodge";



//side example// item, second is always the index and third list//

// cars.forEach(function(item, i, list) {
//     //list[i].report();
//     item.report();
// })


//fourth example//


car.report = function(){
    console.log(this.year + " " + this.make + " " + this.model);
}


var cars = [
    car,
    {
        make:"Dodge",
        model:"Challenger",
        year: "2015",
        report: function(){
            console.log(this.year + " " + this.make + " " + this.model);
        }
    },
    {
        make:"Ford",
        model:"Shelby GT 500",
        year:"1969",
        report: function(){
            console.log(this.year + " " + this.make + " " + this.model);
        }
    },
    {
        make: "Cadillac",
        model:"Escalade",
        year:"2019",
        report: function(){
            console.log(this.year + " " + this.make + " " + this.model);
        }
    }
]
cars.report = function(){
    console.log(this.year + " " + this.make + " " + this.model);
}

cars.forEach(function(car){
    car.report();
})



