// Step 1: Create a Symbol (unique key that can't be accidentally accessed by string)
const mySym = Symbol("key1");   // Symbol keys are completely unique, even if they have the same description


// Step 2: Object literal creation (most common way to create objects in JS)
const user = {
    name: "Kartik",                    // normal property (accessed with dot or bracket)
    "full name": "Kartik Goyal",       // key with space → must use quotes and bracket notation
    age: 19,
    [mySym]: "Mykey1",                 // computed property name using Symbol (hidden from normal loops)
    location: "India",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],  // array as value
    email: "kg0192421@gmail.com"
};


// Accessing properties in different ways
console.log(user.email);                // dot notation → kg0192421@gmail.com
console.log(user["email"]);             // bracket notation (useful when key is in variable)
console.log(user["full name"]);         // must use brackets for keys with spaces
console.log(user[mySym]);               // only way to access Symbol-keyed property
console.log(typeof user[mySym]);        // "string"  (not "object" — maybe you expected Symbol?)

// Updating property value
user.email = "ItsKartik@gmail.com";
console.log(user.email);                // ItsKartik@gmail.com   ← value changed successfully


// Step 3: Freeze the object → makes it immutable (can't add, delete, or modify properties)
Object.freeze(user);                    // Now user is frozen (shallow freeze only)

// This will NOT work — but it won't throw error in non-strict mode
user.email = "AbbaJabbaDabba";          // change is silently ignored

console.log(user.email);                // Still "ItsKartik@gmail.com" (freeze prevented change)
console.log(user);                      // shows the object (still has old email)


// Step 4: Trying to add new methods after freeze → also ignored
user.greeting = function() {
    console.log("Hello User");
};

user.another_function = function() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
};


// These will show undefined or errors because functions were never actually added
console.log(user.greeting);             // undefined   (method was not added)
console.log(user.greeting());           // TypeError: user.greeting is not a function

console.log(user.another_function);     // undefined
// console.log(user.another_function());   // would also throw TypeError