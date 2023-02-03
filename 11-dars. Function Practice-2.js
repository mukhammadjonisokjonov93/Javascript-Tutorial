function myFirstApp(name, age) {
    alert(`Hi my name is ${name} and I am a Front-end developer`)

    function showSkills() {
        let skills = [`HTML`, `CSS`, `JavaScript`]
        for (let i = 0; i < skills.length; i++) {
            alert(`You have skills ${skills[i]}`)
        }
    }
    showSkills();

    function checkAge() {
        let age = prompt(`Sizni yoshiz nechida?`)

        if (age > 18) {
            alert(`Exactly data for learning IT`)
        } else {
            alert(`Super data for learning IT`)
        }
    }
    checkAge();

    function kvadrat(son) {
        return son * son;
    }
    console.log(kvadrat(5));
}

const result = myFirstApp(`Samar`, 18);
console.log(result);