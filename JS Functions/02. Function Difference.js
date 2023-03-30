// --- Arrow Function VS Regular Function --- //

// --- "this" value --- //

// Inside a regular JavaScript function, "this" value is dynamic.
// The dynamic context means that the value of this depends on how the function is invoked.

// The arrow function resolves this lexically.
// The biggest difference between an arrow function and regular function is that this value inside of an arrow function always equals to this from the outer function.
// In other words, the arrow function doesn't define its own execution context.

// Arrow function

const object1 = {
  items: [1, 2],
  method() {
    console.log(this); // => object
    this.items.forEach(() => {
      console.log(this); // => object
    });
  },
};
object1.method();

// Regular function

const object2 = {
  items: [1, 2],
  method() {
    console.log(this); // => object
    this.items.forEach(function () {
      console.log(this); // => window
      console.log(this); // => window
    });
  },
};
object2.method();
// Then inside of the regular function "this" equals the global object, which is window in a browser environment.

// --- "arguments" Object --- //

// Regular Function
// Inside the body of a regular function, arguments is a special array-like object containing the list of arguments.
function myFunction() {
  console.log(arguments); // => ['A', 'B']
}
myFunction("A", "B");

// Arrow Function
// The arrow function resolves "arguments" lexically.
// The "arguments" object inside of an arrow function equals to "arguments" of the outer function.
function regular() {
  const arrow = () => {
    console.log(arguments); // => ['A', 'B']
  };
  arrow("C");
}
regular("A", "B");

// To access the direct arguments of the arrow function, then you can use "the rest parameters" feature:
function regular() {
  const arrow = (...args) => {
    console.log(args); // => ['C']
  };
  arrow("C");
}
regular("A", "B");
// "...args" rest parameter collects the execution arguments of the arrow function into an array.

// --- Can Be Asynchronous --- //
// You can make an arrow function asynchronous using the async/await syntax.



// can be class method but cannot be object method


// cannot be constructor