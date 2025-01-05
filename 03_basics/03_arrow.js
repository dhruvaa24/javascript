const user  = {
    username : "dhruv",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  
        // console.log(this);           
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() // the current context has been changed be renaming the username to sam therefore with the help of this keyword ssam will be printed in the welcome message

// console.log(this);

// function chai(){
//     let username = "dhruv"
//     console.log(this.username);   // we are not able to use this in a function but its only usable in objects
// }
// chai()

// const chai = function(){
//     let username = "dhruv"
//     console.log(this.username);
// }
// chai()


// arrow functions === 
// const chai = () => { // basic arrow function where return is explicit
//     let username = "dhruv"
//     console.log(this);
// }
// chai()

const addTwo = (num1, num2) => (num1+num2) //this is implicit return arrow function, here {} are not used but () canbe used as when returning a object it will give error if() is not used in implicit return arrow function

const obj = () => ({username: "dhruv"})

console.log(addTwo(3,4));
console.log(obj());

// ()=>{} === explicit return arrow function
// ()=>() === implicit return arrow function