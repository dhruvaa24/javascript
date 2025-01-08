const userEmail = "dhruv@gmail.com"

if(userEmail){ // this string is assumed to have true value so truthy value
    console.log("got user email");
} else{
    console.log("dont have user email");
}

const arr = [];
// if(arr){ // this is worng way as it will give true even thoough there is nothing in the array rather perform below code
//     console.log("not empty array");
// } else {
//     console.log("empty array");
// }

if(arr.length === 0){
    console.log("array is empty");
}

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