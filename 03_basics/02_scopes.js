var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30 
    // console.log("Inner: ", a);
       
}

// console.log("Outer: ", a);
// console.log(b);
// console.log(c); // var shouldnt be used as it always has global scope


function one(){
    const username = "dhruv"

    function two(){
        const website = "youtube"
        console.log(username);        
    }
    // console.log(website); //will give error as website is not in its scope
    two()
}
// one()

if(true){
    const username = "dhruv"
    if(username === "dhruv"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  // error 
}
// console.log(username); // error

/*************interesting*************/
console.log(addOne(5));
function addOne(val){ // this is a basic function
    return val+1;
}

console.log(addTwo(5)); // this will give error but above method wont when accessing before the function declarartion itself
const addTwo = function(num){ // this can be called a expression
    return num+2
}

