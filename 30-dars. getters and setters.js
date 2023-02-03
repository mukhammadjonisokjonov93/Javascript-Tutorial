// --- Javascript Getter --- //

// In Javascript, getter method is used to access the property of object.

const student = {
    // data property
    firstName: 'Jasur',

    // accessor property (getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName);      // Jasur
// accessing getter method
console.log(student.getName);        // Jasur
// trying to access as a method
// console.log(student.getName());      // Error



// --- Javascript Setter --- //

// In Javascript, setter method is used to change the value of object.

const friend = {
    firstName: 'John',
    // accessor property (setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(friend.firstName);

// change object property using a setter
friend.changeName = 'Ali';

console.log(friend.firstName);



// --- Object.defineProperty() --- //

// In Javascript, you can also use "Object.defineProperty()" method to add getters and setters.

const pupil = {
    firstName: 'Bilol'
}

// getting property
Object.defineProperty(pupil, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(pupil, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(pupil.firstName);

// changing the property value
pupil.changeName = 'Akmal';

console.log(pupil.firstName);