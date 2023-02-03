// Javascript method - funksiya qiymatiga ega bo'lgan obyekt xususiyati

const dasturchi = {
    ism: `Ulug'bek`,
    yosh: 24,
    salomlashish: function() {
        console.log(`Salom!`);
    }
}
console.log(dasturchi.salomlashish());

// this keyword - metod ichida obyektning xususiyatlarini ishlatish uchun "this" kalit so'zidan foydalaniladi

const developer = {
    name: `John`,
    age: 24,
    greeting: function() {
        console.log(`Salom! Mening ismim ` + this.name);
    }
}
developer.greeting();

//  Object.keys() - berilgan obyektning kalitlar ro'yhatini qaytaruvchi maxsus funksiya

const student = {
    name: `Jack`,
    age: 25
}
console.log(Object.keys(student));

// Object.values() - berilgan obyektning qiymatlar ro'yhatini  qaytaruvchi maxsus funksiya

const pupil = {
    name: `Aziz`,
    age: 23
}
console.log(Object.values(pupil));