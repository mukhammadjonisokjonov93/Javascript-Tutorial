// --- localStorage --- //

// localStorage is a way to store data with no expiration date in the web browsers.
// In other words, the data stored in the browsers will persist even after you close the browser windows.
// You can access the localStorage via the property of the window object: window.localStorage
// When you type the upper code in the Console, you will see the following object: Storage {length: 0} 

// setItem(key, value) 
localStorage.setItem('theme', 'dark');

// removeItem(key)
localStorage.removeItem('theme');

// getItem(key)
localStorage.getItem('theme');

// length
console.log(localStorage.length);