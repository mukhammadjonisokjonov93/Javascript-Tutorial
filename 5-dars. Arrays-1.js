// --- Literal Arrays --- //

// --- Empty array --- //
const emptyArray = [];
console.log(emptyArray);

// --- Number array --- //
const numberArray = [1, 2, -5, 9];
console.log(numberArray);

// --- String array --- // 
const stringArray = [`JavaScript`, `Java`, `Phyton`];
console.log(stringArray);

// --- Mixed array --- //
const mixedArray = [`Java`, 2, false, null];
console.log(mixedArray);

// 1. Array elementini olish
const helloArray = [`h`, `e`, `l`, `l`, `o`];
console.log(helloArray[0]);
console.log(helloArray[2]);

// 2. Array'ga element qo'shish
// push() metodi yordamida array oxiriga element qo'shish mumkin
let languages = [`Phyton`, `Java`];
languages.push(`go`);
console.log(languages);
// unshift() yordamida array boshiga element qo'shish mumkin
let program = [`Phyton`, `Java`];
program.unshift('go');
console.log(program);

// 3. Array elementini o'zgartirish
let language = [`Java`, `Phyton`, `React`];
language[1] = `Vue`;
console.log(language);

// 4. Array elementini o'chirish
// pop() metodidan foydalanib array ichidagi oxirgi elementni o'chirish mumkin
const some = [`Java`, `Phyton`, `Vue`, `Swift`];
console.log(some);
const deletedSome = some.pop();
console.log(some);
console.log(deletedSome);
// shift() metodidan foydalanib array ichidagi birinchi elementni o'chirish mumkin
const any = [`Java`, `Phyton`, `Vue`, `Swift`];
console.log(any);
const deletedAny = any.shift();
console.log(any);
console.log(deletedAny);

// 5. Array uzunligini aniqlash
const other = [`Java`, `Phyton`, `Vue`];
console.log(other.length);

