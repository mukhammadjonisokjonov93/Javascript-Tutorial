// The concat() method creates a new array by merging existing arrays:
const array1 = [1, 4, 11];
const array2 = [2, 3, 7];
const result = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(result);

// Merging three arrays
const arr1 = ["Lucy", "Lone"];
const arr2 = ["Emil", "Tom", "Jane"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

// find() array ichidagi elementni qidirishda foydalaniladi
const findValue = (number) => number === 2;
const foundValue = result.find(findValue);
console.log(foundValue);

//  filter() berilgan shartni bajargan elementlarni saralab olib, yangi massiv yaratadi
const filterValues = (number) => number > 5;
const filteredValues = result.filter(filterValues);
console.log(filteredValues);

// map() har bir massiv uchun berilgan funksiyani chaqirib, yangi array yaratadi
const mapValues = (number) => `Son: ` + number;
const mappedValues = result.map(mapValues);
console.log(mappedValues);

// The sort() method sorts an array alphabetically:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
console.log(fruits2);

// The reverse() method reverses the elements in an array.
// You can use it to sort an array in descending order:
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.reverse();
console.log(fruits3);

// Use a compare function to sort an array ascending:
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function (a, b) {
  return a - b;
});
console.log(points1);

// Use the same trick to sort an array descending:
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function (a, b) {
  return b - a;
});
console.log(points2);

// The join() method also joins all array elements into a string.
const joinValues = result.join();
console.log(joinValues);

// The toString() method converts an array to a string of (comma separated) array values.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const meva = fruits.toString();
console.log(meva);

// The splice() method adds new items to an array.
const cars = ["BMW", "Toyota", "Apple", "Mango"];
cars.splice(2, 0, "Lemon", "Jeep");
console.log(cars);

// You can use splice() to remove elements:
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(0, 1);
console.log(fruit);

// The slice() method slices out a piece of an array into a new array.
// This example slices out a part of an array starting from array element 1 ("Orange"):
const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1.slice(1);
console.log(citrus);
