function sayMyName(){ 
    console.log("D");
    console.log("h");
    console.log("r");
    console.log("u");
    console.log("v");
}

// sayMyName; //reference
// sayMyName() //execution

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2); 
// }

// addTwoNumbers(3,4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, null)

// const result = addTwoNumbers(3,5) // console log doesnt return the vale and so the value of result is undefined here 
// console.log("Result: ", result);

function addTwoNumbers(number1, number2){
    let result = number1+number2; 
    return result;
    // or we can do
    return number1+number2;
}

const result = addTwoNumbers(3,5)
//console.log("Result: ",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please a enter a username");  
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("dhruv"));
// console.log(loginUserMessage());

// when number of parameters are unknown

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 300, 500, 2000)); // gives an array as output whose values can be added using loops

const user = {
    username: "dhruv",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

// handleObject(user);
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 600, 100]

function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,100,600]));

