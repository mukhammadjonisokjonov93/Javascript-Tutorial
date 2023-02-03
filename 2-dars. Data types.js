// --- Data types --- //

// In Javascript, a primitive data type is data that has no methods or properties. An example of primitive data type is: string, number, boolean, undefined, null.

// Non-primitive data type is an object. The Javascript arrays and functions are also objects.


// Creating a variable in JavaScript is called "declaring a variable".
// You declare a JavaScript variable with the "var" or "let" keyword.

// let carName;

// After the declaration, the variable has no value (technically it is "undefined").
// To assign a value to the variable, use the equal sign.

// let carBrand = "Ford";

// let age = 19          // data-type = number
// let myName = "Samar"  // data-type = string
// let bool = false      // data-type = boolean
// let number;           // data-type = undefined
// console.log(number)

// console.log(a)        // data-type = null
// Null represents an empty or unknown value.


// --- Object --- //

let person = {
    name: 'Samar',
    age: 19,
    isMarried: false,
}
console.log(person)

// --- Array --- //

let arr = ['Phone', 'Mouse', 'Soap']
console.log(arr);
console.log(arr[1]);

arr[0] = 'Desktop'
console.log(arr);


// Arithmetic operators ( used to perform arithmetic on numbers)
// The numbers in an arithmetic operation are called "operands".
// The operation is defined by an "operator".

let x = 6              // "x" and "y" are operands
let y = 2
console.log(x + y)    // Addition operator
console.log(x - y)    // Subtraction operator
console.log(x * y)    // Multiplication operator
console.log(x / y)    // Division operator
console.log(x ** 2)             // Exponentiation
console.log(Math.pow(x,2))      // Exponentiation
let z = 15
console.log(z % 7)    // Division Remainder
x++
console.log(x)        // Increment operator
x--
console.log(x)        // Decrement operator

// Assignment operators ( used to assign values to JavaScript variables )

let a = 10;
console.log(a);
a += 5;
console.log(a);
a -= 1;
console.log(a);
a *= 2;
console.log(a);
a /= 4;
console.log(a);
a %= 5;
console.log(a);
a **= 3;
console.log(a);

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
console.log(text3);

let text = "What a very ";
text += "nice day!";
console.log(text);

let sum1 = 5 + 5;
console.log(sum1);
let sum2 = "5" + 5;
console.log(sum2);
let sum3 = "Hello" + 5;
console.log(sum3);

// Comparison and Logical Operators ( used to test for "true" or "false")

c = 5;
console.log(c == 8);        // equal to
console.log(c == 5);      
console.log(c == "5");
console.log(c === 5);       // equal value and equal type
console.log(c ==="5");
console.log(c != 8);        // not equal
console.log(c !== 5);       // not equal value or not equal type
console.log(c !== "5");
console.log(c !== 8);
console.log(c > 8);         // greater than
console.log(c < 8);         // less than
console.log(c >= 8);        // greater than or equal to
console.log(c <= 8);        // less than or equal to

// When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to "NaN" which is always "false".
console.log(2 < 12);
console.log(2 < "12");
console.log(2 < "John");
console.log(2 > "John");
console.log(2 == "John");
console.log("2" < "12");
console.log("2" > "12");
console.log("2" == "12");
// When comparing two strings, "2" will be greater than "12", because alphabetically 1 is less than 2.

m = 6;
n = 3;

console.log(m < 10 && n > 1);    // logical and
console.log(m < 10 && n < 1);

console.log(m == 5 || n == 5);   // logical or
console.log(m == 6 || n == 0);
console.log(m == 0 || n == 3);
console.log(m == 6 || n == 3);

console.log(!(m === n));         // logical not
console.log(!(m > n));


