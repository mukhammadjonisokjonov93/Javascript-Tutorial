// --- Recursive function --- //

// Recursion is a process of calling itself. A function that calls itself is called a recursive function.

//          function recurse() {
//              // function code
//              recurse();
//              // function code
//          }
//          recurse();

// A recursive function must have a condition to stop calling itself.
// Otherwise, the function is called indefinitely.
// Once the condition is met, the function stops calling itself. This is called a base condition.

// To prevent infinite recursion, you can use "if...else statement" where one branch makes the recursive call, and the other doesn't.

//          function recurse() {
//              if (condition) {
//                 recurse();
//              } else {
//                  // stop calling recurse()
//              }
//          }
//          recurse();


// program to find the factorial of a number
function factorial(x) {
    // if number is 0
    if (x === 0) {
        return 1;
    }
    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if(num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}


// This process continues until the number becomes 1. Then when the number reaches 0, 1 is returned.

//      factorial(3) returns 3 * factorial(2)
//      factorial(2) returns 3 * 2 * factorial(1)
//      factorial(1) returns 3 * 2 * 1 * factorial(0)
//      factorial(0) returns 3 * 2 * 1 * 1