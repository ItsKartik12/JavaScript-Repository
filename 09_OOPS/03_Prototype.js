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