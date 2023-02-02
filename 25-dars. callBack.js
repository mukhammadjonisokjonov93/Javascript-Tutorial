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

