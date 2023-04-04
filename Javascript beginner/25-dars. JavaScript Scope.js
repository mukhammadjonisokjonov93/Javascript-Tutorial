// --- Scope --- //

// Scope determines the accessibility of variables, objects, and functions from different parts of the code.
// JavaScript has 3 types of scope: Block scope, Function scope, and Global scope.

// --- Block Scope --- //

// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
}
// x can NOT be used here

// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.
{
  var x = 2;
}
// x CAN be used here

// --- Local/Function Scope --- //

// Variables declared within a JavaScript function, become LOCAL to the function.
// They can only be accessed from within the function.

// code here can NOT use carName
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// code here can NOT use carName

// --- Global Scope --- //
// A variable declared outside a function, becomes GLOBAL.
// Global variables can be accessed from anywhere in a JavaScript program.

let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}

// --- Automatically Global --- //
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
// This code example will declare a global variable carName, even if the value is assigned inside a function:

myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}

// --- Strict Mode --- //
// In "Strict Mode", undeclared variables are not automatically global.

// --- Global Variables in HTML --- //

// In JavaScript, the global scope is the JavaScript environment.
// In HTML, the global scope is the window object.

// Global variables defined with the "var" keyword belong to the window object:

var autoName = "Volvo";
// code here can use window.carName

// Global variables defined with the let keyword do not belong to the window object:

let autoName = "Volvo";
// code here can not use window.carName

