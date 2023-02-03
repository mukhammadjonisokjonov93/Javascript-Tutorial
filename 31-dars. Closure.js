// --- Nested Function --- //

// In Javascript, a function can also contain another function. This is called a nested function.

// outer function
function greet(name) {
    // inner function
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // calling inner function
    displayName();
}

// calling outer function
greet('John');



// --- Returning a Function --- //

// In Javascript, you can aslo return a function within a function.

function greet(name) {
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // returning a function
    return displayName;
}

const g1 = greet('Jane');
console.log(g1);
g1();



// --- Javascript Closure --- //

// Closure means that an inner function always has access to the variable of its outer function, even after the outer function has returned.

function OuterFunction() {
    // variable definded outside the inner function
    let name = 'Sarah';

    function InnerFunction() {
        // accessing OuterFunction name variable
        return 'Hi' + ' ' + name;
    }

    return InnerFunction;
}

var innerFunc = OuterFunction();

console.log(innerFunc);
console.log(innerFunc());