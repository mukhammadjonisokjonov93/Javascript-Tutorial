// --- Arrow Function VS Regular Function --- //

// --- "this" value --- //

// Inside a regular JavaScript function, "this" value is dynamic.
// The dynamic context means that the value of this depends on how the function is invoked.

// The arrow function resolves this lexically.
// The biggest difference between an arrow function and regular function is that "this" value inside of an arrow function always equals to "this" from the outer function.
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
// Then inside of the regular function "this" equals to the global object, which is window in a browser environment.

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

// --- Can be class method --- //

// Regular functions are the usual way to define methods on classes or objects.
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }
  logName() {
    console.log(this.heroName);
  }
}
const batman = new Hero("Batman");

// Sometimes you'd need to supply the method as a callback, for example to "setTimeout()"" or an event listener. In such cases, you might encounter difficulties accessing "this" value.
// After 1 second, undefined is logged to console. setTimeout() performs a simple invocation of logName (where this is the global object). That's when the method is separated from the object.
// For example, let's use use logName() method as a callback to setTimeout():
setTimeout(batman.logName, 1000);

// Let's bind "this" value manually to the right context:
setTimeout(batman.logName.bind(batman), 1000);

// "batman.logName.bind(batman)"" binds "this" value to "batman" instance. Now you're sure that the method doesn't lose the context.
// Binding "this" manually requires boilerplate code, especially if you have lots of methods. There's a better way: the arrow functions as a class field.

// Arrow Functions can also be used as methods inside classes.
// Now, in contrast with regular functions, the method defined using an arrow binds "this" lexically to the class instance.
class Hero2 {
  constructor(heroName) {
    this.heroName = heroName;
  }
  logName = () => {
    console.log(this.heroName);
  };
}
const batman2 = new Hero2("Batman2");

// Now you can use batman.logName as a callback without manual binding of this.
// The value of "this" inside logName() method is always the class instance:
setTimeout(batman2.logName, 1000);

// Fat arrow methods bind this value to the class instance.
// Anyhow the fat arrow method is invoked, "this" always equals the class instance, which is useful when the methods are used as callbacks.

// --- Cannot be object method --- //
// A method is a special function attached to an object. Inside a method, "this" value equals to the object on which the method was invoked.
// Regular Functions can be used as methods inside objects.
const collection = {
  items: [1, 2, 3],
  isEmpty() {
    this === collection; // => true
    console.log(this);
    return this.items.length === 0;
  },
};
console.log(collection.isEmpty());

// However, "this" inside of an arrow function equals to "this" value from the outer scope. That's why we normally cannot use an arrow function as a method:
const collection2 = {
  items: [1, 2, 3],
  isEmpty: () => {
    this === collection2; // => false
    this === window; // => true
    console.log(this);
    return this.items.length === 0;
  },
};
console.log(collection2.isEmpty()); // throws "TypeError: this.items is undefined"

// --- Arrow Functions cannot be Constructor --- //
// A regular function can be a constructor of instances.
// However, the arrow function cannot be used as a constructor.
