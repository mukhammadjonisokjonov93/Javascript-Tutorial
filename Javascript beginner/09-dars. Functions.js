// --- Javascript Function --- //

// A function is a block of code that performs a specific task. 
// A function is a relationship between inputs where each input is related to exactly one output.

// In JavaScript, the template literals (` `) and ${expression} as placeholders perform the string interpolation.


// --- declaring and calling a function --- //

// A function is declared using the function keyword.
// To use the function named greet(), we need to call it.

// declaring a function named greet()
function greet() {
    console.log("Hello there!");
}
// calling function
greet();


// --- function parameters --- //

// A function can also be declared with parameters.

// program to add two numbers using a function
// declaring a function
function add(a, b) {
    console.log(a + b);
}
// calling function
add(3, 4);


// --- function return --- //

// The return statement can be used to return the value to function call.
// The return statement denotes that the function has ended.
// Any code after return is not executed.

// program to add two numbers using a function
// declaring a function
function add(a, b) {
    return a + b;
}
// calling function
let result = add(3, 4);
// display the result
console.log("The sum is " + result);



// --- Arrow Function --- //

// Arrow function is one of the features introduced in the ES6 version of Javascript.
// Arrow function is a simple and short way of function expression.

// function expression
let x = function(x, y) {
    return x + y;
}

// using arrow function
let a = (a, b) => {
    return a + b;
}

// --- arrow function with no argument --- //

let salom = () => console.log('Hello');
salom();


// --- arrow function with one argument --- //

let item = x => console.log(x);
item('Hello world');


// --- multiline arrow functions --- // 

let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5, 7);
console.log(result1);