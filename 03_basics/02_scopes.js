var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30 
    console.log("Inner: ", a);
       
}

console.log("Outer: ", a);
// console.log(b);
console.log(c); // var shouldnt be used as it always has global scope