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

// --- Function Declaration --- //

// We can write the regular function in two ways: Function declaration and Function expression.
// A function declaration is simply defining a function with a function name right after the function keyword.
// They can also accept parameters.

function functionDeclaration() {
  // statement
}

// Example of function declaration
function add(a, b) {
  return a + b;
}

let total1 = add(5, 5);

console.log(total1);

// One major benefit of using a function declaration is that it allows Hoisting. it simply means our function can be called and used even before it is declared.

// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.

// Example of function declaration hoisting
let total2 = add(5, 5);
function addition(a, b) {
  return a + b;
}

console.log(total2);
// In the code example, we used the same function, but we called it before declaring it and we still got the same result in the console.

// --- Function Expression --- //

// A function expression is simply a function that is declared without a function name and is assigned to a variable at the same time.
// Unlike function declaration, you can’t call a function expression before creating it.
// Function expression should be used if we want our function to be accessible only after it has been declared

// Function expressions assigned to a variable are called using the variable name since the function expression does not have a function name.

let functionExpression = function () {
  // statement
};

functionExpression();

// Example of function expression
let add = function (a, b) {
  return a + b;
};

let total = add(5, 5);

console.log(total);

// Function expressions can be used as callback functions. These are functions that are passed into another function as an argument.
button.addEventListener("click", function () {
  console.log("Function expression is used here");
});

// Difference between function declaration and function expression

// 1. The major difference is a name difference, a function declaration is declared with a function name, which helps for a more readable code while a function expression is declared without a function name.

// 2. Function declarations are hoisted which means that they can be used before the function is declared. They are initialized at compile time while a function expression is not hoisted, they can only be called after the function is declared and read by the interpreter.

// 3. A function declaration can not be passed into another function but a function expression can be passed as an argument into another function.

// --- Arrow Function --- //

// The central symbol of an arrow function is the fat arrow "=>".
// Arrow function is one of the features introduced in the ES6 version of Javascript.
// Arrow function is a simple and short way of function expression.

// function expression
let x = function (x, y) {
  return x + y;
};

// using arrow function
let a = (a, b) => {
  return a + b;
};

// --- arrow function with no argument --- //

let salom = () => console.log("Hello");
salom();

// --- arrow function with one argument --- //

let item = (x) => console.log(x);
item("Hello world");

// --- multiline arrow functions --- //

let sum = (a, b) => {
  let result = a + b;
  return result;
};

let result1 = sum(5, 7);
console.log(result1);
