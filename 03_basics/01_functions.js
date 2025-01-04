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

console.log(loginUserMessage("dhruv"));
console.log(loginUserMessage());
