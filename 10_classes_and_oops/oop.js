// const user = {
//     username : "dhruv",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`username: ${this.username}`);  
//         console.log(this);
//     } 
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise();
// const date = new Date();

function user(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome: ${this.username}`)
    }

    return this;
}

const userOne = new user("dhruv", 12, true)
const userTwo = new user("javascript", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

//Steps when we use new keyword to initialize an object
// step 1 - whenever we use new an empty object is created 
// step 2 - constructor function is called bcz of new
//step 3 - arguments are injected in this keyword
//step 4 - we get the values