// Primitive type
// 7 types : String, Number, Boolean, BigInt, null, undefined, Symbol

/* const score = 100;
console.log(typeof score);

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id == id2);

const bigNumber = 11231213435654675n
console.log(typeof bigNumber); */


// Refrence type or Non primitive
// Arrays, Objects, Functions

/* const heroes = ["ironman", "batman", "hulk", "thor"];

let myObj = {
    name: "Dhruv",
    age: 22,
    email: "dhruvagrawal247@gmail.com"
}

const myFunction = function (){
    console.log("Hello World !");    
}

console.log(typeof null); // Return object as it is unique
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction); // It returns function that means it is a function object */

// ************Types of Memory**********//

// Stack(Primitive) and Heap(Non primitive) 

let myName = "dhruv agrawal"
let anotherName = myName
anotherName = "Dhruvaa24"
//console.log(myName);
//console.log(anotherName);

let userOne = { 
    email: "dhruvagrawal247@gmail.com",
    upi: "dhruvaa24"
};

let userTwo = userOne;

userTwo.email = "dhruv@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);