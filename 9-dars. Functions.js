// In JavaScript, the template literals (` `) and ${expression} as placeholders perform the string interpolation.

// function myFunction(son1, son2) {
//     return son1 + son2;
// }
// console.log(myFunction(10, 20));    // 30
// const result = myFunction(30, 40);  // 70
// console.log(result + 10);           // 80

// 1. Function declaration

// console.log(kvadrat(2));      // 4

// function kvadrat(son) {
//     return son * son;
// }

// console.log(kvadrat(10));     // 100


// 2. Function expression

// function kvadrat(son) {
//     return son * son;
// }

// console.log(kvadrat(10));     // 100


// 3. Arrow function

// Arrow function - function expression yozishning qisqaroq ko'rinishi.

// 3.1. Function expressionga juda o'xshash bo'lib, faqatgina arrow (=>) kalit so'ziga ega bo'ladi.

// const kvadrat = (son) => {
//     return son * son;
// }
// console.log(kvadrat(10));

// 3.2. Agar funksiya tana qismi bir statement'dan iborat bo'lsa, return kalit so'zini yozmaslik mumkin.

// const kvadrat = son => son * son;
// console.log(kvadrat(10));

// 3.3. Agar funksiya hech qanday parametrga ega bo'lmasa

// const print = () => {
//     console.log("Printing...");
//     console.log("Second Printing...");
// }
// print();

// 3.4. Ikki yoki undan ko'p parametrga ega bo'lgan funksiya uchun, parametrlar qavslar ichida bo'lishi shart.

// const volume = (a, b, c) => a * b * c;
// console.log(volume(1, 2, 3));       // 6


