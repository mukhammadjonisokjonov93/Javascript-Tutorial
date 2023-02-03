// --- Javascript Exceptions --- //

// Errors that occur during runtime are called exceptions.
// There are two types of errors: "Syntax errors" and "Runtime errors"
// Syntax error (error in the syntax: consol.log('Ali');)
// Runtime error (calling an invalid function or a variable)


// --- try...catch --- //

// The try...catch statement is used to handle exceptions.

const numerator = 100, denominator = 'a';
try {
    console.log(numerator/denominator);

    // forgot to define variable a
    console.log(a);
}
catch(error) {
    console.log('An error caught');
    console.log('Error message: ' + error);
}

// --- try...catch...finally --- //

// You can also use the "try...catch...finally" statement to handle exceptions.
// The "finally" block executes even though the code runs successfully or an error occurs.

const item1 = 100, item2 = 'a';
try {
    console.log(item1/item2);

    // forgot to define variable a
    console.log(a);
}
catch(error) {
    console.log('An error caught');
    console.log('Error message: ' + error);
}
finally {
    console.log('Finally will execute every time');
}


// --- throw with try...catch --- //

const number = 40;
try {
    if(number > 50) {
        console.log('Success');
    } else {
        // user-defined throw statement
        throw new Error('The number is low');
    }
    // if throw executes, the below code does not execute
}
catch(error) {
    console.log('An error caught');
    console.log('Error message: ' + error);
}
