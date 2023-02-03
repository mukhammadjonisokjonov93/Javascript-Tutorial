// --- Promises --- //

// Promise is a good way to handle asynchronous operations.
// It is used to find out if the asynchronous operation is successfully completed or not.
// A promise may have one of three states: Pending, Fulfilled, Rejected.
// A promise starts in a pending state. That means the process is not complete.
// If the operation is successful, the process ends in a fulfilled state.
// And, if an error occurs, the process ends in a rejected state.


// To create a promise object, we use the Promise() constructor.

let promise = new Promise(function(resolve, reject) {
    // do something
});


// Below is an asynchronous program. Then the program can be handled by using a promise.

const count = true;
let countValue0 = new Promise(function(resolve, reject) {
    if (count) {
        resolve("There is a count value");
    } else {
        reject("There is no count value");
    }
});
console.log(countValue0);


// Promises are useful when you have to handle more than one asynchronous task one after another.
// For that, we use promise chaining.
// You can perform an operation after a promise is resolved using methods then() and catch().


// The "then()" method is used with the callBack when the promise is successfully fulfilled or resolved.
// You can chain multiple then() methods with the promise.

// return a promise
let countValue1 = new Promise(function(resolve, reject) {
    resolve("Promise resolved");
});
// Executes when promise is resolved successfully
countValue1
.then(function successValue1(result1) {
    console.log(result1);
})
.then(function successValue2() {
    console.log("You can call multiple functions this way");
})


// The "catch()" method is used with the callBack when the promise is rejected or if an error occurs.

// returns a promise
let countValue2 = new Promise(function (resolve, reject) {
    reject('Promise rejected');
});
// executes when promise is resolved successfully
countValue2.then(
    function successValue2(result2) {
        console.log(result2);
    },
)
// executes if there is an error
.catch(
    function errorValue2(result2) {
        console.log(result2);
    }
);

