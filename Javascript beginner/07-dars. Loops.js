// --- for loop --- //

// The Javascript for loop iterates the elements for the fixed number of times.
// It should be used if number of iteration is known. The syntax of the for loop is:

//          for (initializer; condition; iteration) {
//          // body
//          }


 // looping from i = 1 to 5
 for (let i = 1; i < 5; i++) {
    console.log('I love Javascript.');
 }



//  --- while loop --- //

// while loop iterates the elements for the infinite number of times.
// It should be used if number of iteration is not known. The syntax is given below:

//          while (condition) {
//              // body of loop
//          }


// initialize the variable
let a = 1, b = 5;

while (a < b) {
    console.log(a);
    a += 1;
}



// --- do...while loop --- //

// do...while loop iterates the elements for the infinite number of times like while loop.

//          do {
//              // body of loop
//          } while (condition);


let i = 1, n = 5;

// do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i < n);



// --- for...in loop --- //

// The for...in loop in Javascript allows you to iterate over all property keys of an object.
// The syntax of the for...in loop is:

//          for (key in object) {
//              // body of for...in
//          }


const string1 = 'code';

// using for...in loop
for (let i in string1) {
    console.log(string1[i]);
}



// --- for...of loop --- //

// The for...of loop in Javascript allows you to iterate over iterable objects.
// The syntax for the for...of loop is:

//          for (element of iterable) {
//              // body of for...of
//          }


// string
const string2 = 'code';

// using for...of loop
for (let i of string2) {
    console.log([i]);
}