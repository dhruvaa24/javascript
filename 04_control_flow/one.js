// if
const isUserLoggedIn = true
// if(2=="2"){
//     console.log("executed");
// }
// if(2==="2"){
//     console.log("terminated");
// }
// if(2!=="3"){
//     console.log("executed");
// }

// <,>,<=,>=,==,!=, === (also checks the type)

// let temp = 41
// if(temp < 50){
//     console.log("temp is less than 50");
// }else{
//     console.log("greater than 50");
    
// }

// let score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
//console.log(`User Power: ${power}`); //outseide scope so will give an error

/********Shorthand**********/
const bal = 1000
// if(bal > 500) console.log("test");

/***********nesting***********/
// if(bal < 500){
//     console.log("less than 500");
// } else if (bal < 750){
//     console.log("less than 750 more than 500");
// } else{
//     console.log("more than 750");
// }

const loggedIn = true;
const debitCard = false;

if(loggedIn&&debitCard){
    console.log("allow to buy");
}
if(loggedIn||debitCard){
    console.log("allow him");
}