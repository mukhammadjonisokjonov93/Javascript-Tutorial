// concat() ikki yoki undan ortiq array'larni birlashtirib, natijani qaytaradi
const array1 = [1, 4, 11];
const array2 = [2, 3, 7];
const result = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(result);

// find() array ichidagi elementni qidirishda foydalaniladi
const findValue = (number) => number === 2;
const foundValue = result.find(findValue);
console.log(foundValue);

//  filter() berilgan shartni bajargan elementlarni saralab olib, yangi massiv yaratadi 
const filterValues = number => number > 5;
const filteredValues = result.filter(filterValues);
console.log(filteredValues);

// map() har bir massiv uchun berilgan funksiyani chaqirib, yangi array yaratadi
const mapValues = number => `Son: ` + number;
const mappedValues = result.map(mapValues);
console.log(mappedValues);

// sort() elementlarni alfavit tartibida, satrlar sifatida va o'sish tartibida tartiblaydi
result.sort();
console.log(result);

const sortValues = (number1, number2) => number1 - number2;
result.sort(sortValues);
console.log(result);