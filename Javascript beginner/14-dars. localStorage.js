// --- localStorage --- //

// localStorage is a way to store data with no expiration date in the web browsers.
// In other words, the data stored in the browsers will persist even after you close the browser windows.
// You can access the localStorage via the property of the window object: window.localStorage
// When you type the upper code in the Console, you will see the following object: Storage {length: 0}

// setItem(key, value)
// const name = "Ahror";
// let age = 25;
// localStorage.setItem("name", name);
// localStorage.setItem("age", age);

// getItem(key)
// const getAge = localStorage.getItem("age");
// console.log(getAge);

// removeItem(key)
// localStorage.removeItem('name');

// clear
// localStorage.clear();

// setItem
const names = ["Ahror", "Sardor", "Ali"];
localStorage.setItem("names", JSON.stringify(names));

// getItem
const getNames = JSON.parse(localStorage.getItem("names"));
console.log(getNames);

