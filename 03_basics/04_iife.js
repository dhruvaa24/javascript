// Immediately Invoked Function Expression (IIFE) - a function that gets immediately invoked and helps in preventing global scope pollution problem within a function

(function chai(){
    //this is a named iife
    console.log(`DB Connected`);  
})(); // we need to write a semicolon necessarily after defining a iife function

// ()() // first parenthesis is for function definition and the second one is for function call which before we were doing by writing hte name of function behind it.

// iife can also be written as a arrow function
( (name) => {
    //this is a unnamed iife
    console.log(`DB Connected Two ${name}`);
})("Dhruv");