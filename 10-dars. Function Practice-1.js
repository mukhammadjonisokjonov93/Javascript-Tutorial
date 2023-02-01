// --- Function Practice --- //

// 1. Berilgan sonning juft yoki toq ekanligini tekshiradigan funksiya

// --- Function declaration --- //

// function evenOrOddDec(number) {
//     if (number % 2 === 0) {
//         console.log('${number} is even');
//     } else {
//         console.log('${number} is odd');
//     }
// }
// evenOrOddDec(2);


// --- Function expression --- //

// const evenOrOddExp = function(number) {
//     if (number % 2 === 0) {
//         console.log('${number} is even');
//     } else {
//         console.log('${number} is odd');
//     }
// }
// evenOrOddExp(3);


// --- Arrow function --- //

// const evenOrOddArrow = number => {
//     if (number % 2 === 0) {
//         console.log('${number} is even');
//     } else {
//         console.log('${number} is odd');
//     }
// }
// evenOrOddArrow(3);


// 2. Berilgan ikki sondan kattasini qaytaradigan funksiya yozing

// --- Function declaration --- //

// function maxDec(number1, number2) {
//     if (number1 >= number2) {
//         return number1;
//     } else
//     return number2;
// }
// console.log(maxDec(2, 3));


// --- Function expression --- //

// const maxDec = function(number1, number2) {
//     if (number1 >= number2) {
//         return number1;
//     } else
//     return number2;
// }
// console.log(maxDec(4, 7));


// --- Arrow function --- //

// const maxArrow = (number1, number2) => {
//     if (number1 >= number2) {
//         return number1;
//     } else
//     return number2;
// }

// console.log(maxArrow(3, 4));
// console.log(maxArrow(20, 11));


// 3. Berilgan sonni teskarisiga o'girish

// --- Function declaration --- //

// function reverseDec(number) {
//     const numberStr = String(number);
//     const reversedStr = numberStr.split('').reverse().join('');
//     return Number(reversedStr);
// }
// console.log(reverseDec(15));


// --- Function expression --- //

// const reverseExp = function(number) {
//     const numberStr = String(number);
//     const reversedStr = numberStr.split('').reverse().join('');
//     return Number(reversedStr);
// }
// console.log(reverseExp(23));


// --- Arrow function --- //

// const reverseArrow = number => {
//     const numberStr = String(number);
//     const reversedStr = numberStr.split('').reverse().join('');
//     return Number(reversedStr);
// }
// console.log(reverseArrow(1467));