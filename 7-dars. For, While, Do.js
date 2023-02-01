// --- First way --- //
// for (let i = 0; i < 10; i++) {
//     console.log(i);    
// }

// --- Second way --- //
// let i = 0;
// do {
//     console.log(i);
//     i++
// }while(i < 10)

// --- Third way --- //
// let i = 0
// while(i < 10) {
//     console.log(i);
//     i++
// }


let answers = []
let questions = [
    'What is your name?',
    'Your phone number',
    'How old are you?'
]
for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i]);    
}
console.log(answers)


// let answers = []
// let questions = [
//     'What is your name?',
//     'Your phone number',
//     'How old are you?'
// ]
// let i = 0;
// do {
//     answers[i] = prompt(questions[i]);
//     i++
// } while (i < questions.length);
// console.log(answers);


// let answers = []
// let questions = [
//     'What is your name?',
//     'Your phone number',
//     'How old are you?'
// ]
// let i = 0;
// while (i < questions.length) {
//     answers[i] = prompt(questions[i]);
//     i++
// }
// console.log(answers)