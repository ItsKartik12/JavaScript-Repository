const mySym = Symbol("key1");

const user = {
    name: "Kartik",
    "full name": "Kartik Goyal",
    age: 19,
    [mySym]: "Mykey1",          // now works
    location: "India",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
    email: "kg0192421@gmail.com",
};

// console.log(user.email);                // kg0192421@gmail.com
// console.log(user["email"]);             // kg0192421@gmail.com
// console.log(user["full name"]);         // Kartik Goyal
// console.log(user[mySym]);               // Mykey1
// console.log(typeof user[mySym]);                   // object
user.email = "ItsKartik@gmail.com";
// console.log(user.email);
// Object.freeze(user);                   // freezes the object, can't change any value
user.email = "AbbaJabbaDabba";
// console.log(user.email);
// console.log(user);
user.greeting = function() {
    console.log("Hello User");
}
user.another_function = function() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
}
console.log(user.greeting());              // [Function: greeting]
console.log(user.greeting);                // Hello User
console.log(user.another_function());      // [Function: another_function]