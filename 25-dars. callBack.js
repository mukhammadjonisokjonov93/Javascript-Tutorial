// The goal is to achieve asynchronous code.
// Async code allows multiple things to happen at the same time.
// We can achieve async code using two methods: callBacks and promises.


// --- callBacks --- //

// A function that is passed as an argument inside of another function is called a callBack function.
// The benefit of using a callBack function is that you can wait for the result of a previous function call and then execute another function call.


//function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
// callback function
function callMe() {
    console.log('I am a callback function');
}
// passing function as an argument
greet('Peter', callMe);



// --- Promise vs CallBack --- //

// In Javascript Promise
// The syntax is user-friendly and easy to read
// Error handling is easier to manage

api().then(function(result) {
    return api2();
}).then(function(result2) {
    return api3();
}).then(function(result3) {
    // do work
}).catch(function(error) {
    // handle any error that may occur before this point
});


// In Javascript CallBack
// The syntax is difficult to understand
// Error handling may be hard to manage

api(function(result) {
    api2(function(result2) {
        api3(function(result3) {
            // do work
            if(error) {
                // do something
            } else {
                // do something
            }
        });
    });
});