// --- Async & Await --- //

// We use the async keyword with a function to represent that the function is an asynchronous function.
// The async function returns a promise.

//         async function name(parameter1, parameter2, ...parameterN) {
//             // statements
//         }
//         name - name of the function
//         parameters - parameters that are passed to the function
 

// async function --- //

// async function example
async function f() {
    console.log('Async function');
    return Promise.resolve(1);
}
f();

// As this function returns Promise, you can use chaining method "then()".
async function f() {
    console.log('Async function');
    return Promise.resolve(1);
}
f().then(function(result) {
    console.log(result);
});


// --- await keyword --- //

// The await keyword is used inside the async function to wait for the asynchronous operation.
// The use of await pauses the async function until the promise returns a result value.

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('Promise resolved')}, 4000);
// });
// async function asyncFunc() {
//     // async function waits until the promise resolves
//     let result = await promise;
//     console.log(result);
//     console.log('hello');
// }
// // calling the async function
// asyncFunc();

// In the previous program, a Promise object is created and it gets resolved after 4000 milliseconds.
// Here, the asyncFunc() function is written using the async function.
// The await keyword waits for the promise to be complete (resolve or reject).
// Hence, hello is displayed only after promise value is available to the result variable.


// --- Error Handling --- //

// While using the async function, you write the code in a synchronous manner.
// You can handle an error by using "try/catch" block.

// promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise resolved')}, 4000);
});
// async function
async function asyncFunc() {
    try {
        // wait until the promise resolves
        let result = await promise;
        console.log(result);
    }
    catch(error) {
        console.log(error);
    }
}
// calling the async function
asyncFunc();


// --- Benefits of using async function --- //

// The code is more readable than using a callback or a promise.
// Error handling is simpler.
// Debugging is easier.

