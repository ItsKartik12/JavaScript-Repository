//for of

// ["", "", ""]
// [{}, {}, {}]
const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
    //console.log(i);

}
const greetings = 'Hello World';
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);

}

const map1 = new Map();
map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);
map1.set("d", 4);

console.log(map1);

for (const [key, value] of map1) {
    console.log(key, ":-", value);

}