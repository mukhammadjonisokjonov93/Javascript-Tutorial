// --- forEach --- //

// The forEach() method calls a function and iterates over the elements of an array.

let students = ['Ali', 'Aziz', 'Bobur'];

students.forEach(display);

function display(odam) {
    console.log(odam);
}



// --- setInterval() --- //

// The setInterval() method repeats a block of code at every given timing event.
// setInterval(function, milliseconds);


// Display a text once every 3 seconds

// function greet() {
//     console.log('Salom Dunyo');
// }
// setInterval(greet, 9000);


// clearInterval() method is used to stop setInterval() function.

let count = 0;
// function creation
let interval = setInterval(function() {
    // increasing the count by 1
    count += 1;

    if (count === 3) {
        clearInterval(interval);
    }

    // display the current time
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
}, 1000);


// You can pass additional arguments to the setInterval() method.
// setInterval(function, milliseconds, parameter1, ... parameterN);

// function greet(name, lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName);
// }
// setInterval(greet, 6000, 'John', 'Doe');



// --- setTimeout() --- //

// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.
// setTimeout(function, milliseconds);


// Display a text once after 3 seconds

// function greet() {
//     console.log('Hello World');
// }
// setTimeout(greet, 4000);


// clearTimeout() method is used to stop this function call.

let son = 0;
// function creation
function increaseSon() {
    // increase the son by 1
    son += 1;
    console.log(son);
}
let id = setTimeout(increaseSon, 3000);
// clearTimeout
clearTimeout(id);
console.log('setTimeout is stopped.');


// You can pass additional arguments to the setTimeout() method.
// setTimeout(function, milliseconds, parameter1, ... parameterN);

// function greet(name, lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName);
// }
// setTimeout(greet, 2000, 'John', 'Doe');
