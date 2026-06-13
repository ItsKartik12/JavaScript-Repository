let myName = "Kartik";

let myHeroes = ["Superman", "Batman", "Spiderman"];
let heroPower = {
    Superman: "Super Strength",
    Batman: "Rich",
    Spiderman: "Spider Sense",
    getSpidy: function () {
        return `Spiderman is the best Hero.\nHis superpower is ${this.Spiderman}`;
    }
}

Object.prototype.kartik = function () {
    return "This is a property added to the Object prototype.";
}

console.log(myName.kartik());
console.log(myHeroes.kartik());
console.log(heroPower.kartik());
console.log(heroPower.Spiderman);
console.log(heroPower.getSpidy());
myHeroes.push("Ironman");
console.log(myHeroes.kartik());

Array.prototype.getLastHero = function () {
    return this[this.length - 1];
}

console.log(myHeroes.getLastHero());
myHeroes.pop();
myHeroes.push("Thor");
console.log(myHeroes.getLastHero());

// heroPower.getLastHero();//getLastHero is only  exist in array myHeroes not in object

//Inheritance
const User = {
    name: "Kartik",
    email: "kg0192421@gmail.com"
}
const teacher = {
    makeVideoes: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
teacher.__proto__ = User;
//Modern Syntax
Object.setPrototypeOf(TeachingSupport, teacher);
console.log(User);

let anotherUsername = "Kartik     ";
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`${this.name}`),
        console.log(`True length is: ${this.trim().length}`)
}
anotherUsername.trueLength();