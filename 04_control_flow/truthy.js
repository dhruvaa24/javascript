const userEmail = "dhruv@gmail.com"

// if(userEmail){ // this string is assumed to have true value so truthy value
//     console.log("got user email");
// } else{
//     console.log("dont have user email");
// }

const arr = [];
// if(arr){ // this is worng way as it will give true even thoough there is nothing in the array rather perform below code
//     console.log("not empty array");
// } else {
//     console.log("empty array");
// }

// if(arr.length === 0){
//     console.log("array is empty");
// }

//flasy values - 
// 1) false
// 2) 0
// 3) -0
// 4) BigInt - 0n
// 5) ""
// 6) null
// 7) undefined
// 8) NaN

// truthy values -
// 1) "0"
// 2) 'false'
// 3) " "
// 4) []
// 5) {}
// 6) function (){}

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is Empty");
// }

// Nullish Coalescing Operator (??): null undefined -  used to handle values when null or undefined is incoming

let val1;
// val1 = 5 ?? 10;
// val2 = null ?? 10;
// val3 = undefined ?? 15
// val4 = null ?? 10 ?? 15
// console.log(val4);
// console.log(val3);
// console.log(val2);
// console.log(val1);

// terninanry operator (?)
// condition ? true : false

const iceTea = 100
iceTea >=80 ? console.log("More than 80") : console.log("Less than 80")





