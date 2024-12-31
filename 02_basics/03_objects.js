// singleton - when object declared with constructor 
// Object.create(); // this is the constructor method


// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "dhruv",
    "fullname": "Dhruv Agrawal",
    [mySym]: "val1", //to have a symbol in object we write key within square brackets and it needs to declared outside the objects scope
    age: 21,
    location: "Ayodhya",
    email: "dhruv@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// accessing - 2 methods
// console.log(jsUser.email);
// console.log(jsUser["email"]); //fullname cant be accessed with dot
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySym]);


//to change values - 
jsUser.email = "dhruvagrawal247@gmail.com"

//lo freeze values - so the values cant be changed
// Object.freeze(jsUser)
// jsUser.email = "dhruvvaa@gmail.com"; // this wont be executed as object already freezed
// console.log(jsUser);

// to add a function in object
jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());