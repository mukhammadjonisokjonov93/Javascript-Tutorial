// Object - bir nechta ma'lumotlar to'plamini saqlashga imkon beruvchi ma'lumot turi 

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