// Object - a non-primitive data type that allows you to store multiple collections of data.

// Here dasturchi is an object that stores values such as strings and numbers. 

const dasturchi = {
    ism: `Ulug'bek`,
    yosh: 24
}
console.log(dasturchi);
console.log(typeof dasturchi);
console.log(dasturchi.ism);
console.log(dasturchi.yosh);

// Nested object

const developer = {
    ism: `John`,
    yosh: 25,
    manzil: {
        mamlakat: `Uzbekistan`,
        shahar: `Tashkent`,
        uy: 7
    }
}
console.log(developer.manzil.shahar);


// Object method

const player = {
    name: `Jack`,
    age: 24,
    greeting: function() {
        console.log(`Salom!`);
    }
}
console.log(player.greeting());


let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function() {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
console.log(person.getFullName());