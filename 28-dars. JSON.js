// --- JSON --- //

// JSON stands for Javascript Object Notation.
// JSON is a text-based data format that's used to store and transfer data.

// JSON syntax
//      {
//          "name": "John",
//          "age": 22,
//          "gender": "male"
//      }


// --- JSON Data --- //

// JSON data consists of key/value pairs similar to Javascript object properties.

// JSON data
//       "name": "John"


// --- JSON Object --- //

// The JSON object is written inside curly braces {}.
// JSON objects can contain multiple key/value pairs.

// JSON object
//      { "name": "John", "age": 22 }


// --- JSON Array --- //

// JSON array is written inside square brackets [].
// JSON data can contain objects and array.
// However, unlike Javascript objects, JSON data cannot contain functions as values.

// JSON array
//      ["apple", "mango", "banana"]

// JSON array containing objects
//      [
//          { "name": "John", "age": 22},
//          { "name": "John", "age": 22},
//          { "name": "John", "age": 22}
//      ]


// --- Accessing JSON Data --- //

// You can access JSON data using the dot notation.
// You can also use square bracket syntax [] to access JSON data.

// JSON object
const data = {
    name: 'John',
    age: 22,
    hobby: {
        reading: true,
        gaming: false,
        sport: 'football'
    },
    class: ['Javascript', 'HTML', 'CSS']
};

// accessing JSON object
console.log(data["name"]);
console.log(data.hobby);
console.log(data.hobby.sport);
console.log(data.class[1]);



// --- JSON to Object --- //

// You can convert JSON data to a Javascript object using the built-in JSON.parse() function.

// JSON object
const jsonData = '{ "name": "Jack", "age": 25}';

// converting to Javascript object
const json = JSON.parse(jsonData);

// accessing the data
console.log(json.name);



// --- Object to JSON --- //

// You can also convert Javascript objects to JSON format using the Javascript built-in JSON.stringify() function.

// Javascript object
const objData = { "name": "Jane", "age": 27};

// converting to JSON
const obj = JSON.stringify(objData);

// accessing the data
console.log(obj);
