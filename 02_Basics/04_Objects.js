// -----------------------------
// Creating an empty object using constructor (less common way)
const tinderUser = new Object();

// Adding properties one by one
tinderUser.id = "123abc";
tinderUser.name = "Kartik";
tinderUser.isLoggedIn = false;

// Alternative (more common) way using object literal
// const tinderUser = {
//     id: "123abc",
//     name: "Kartik",
//     isLoggedIn: false
// };

console.log(tinderUser);
// Output: { id: '123abc', name: 'Kartik', isLoggedIn: false }


// -----------------------------
// Nested objects – very common in real-world data (like API responses)
const regularUser = {
    email: "kg0192421@gmail.com",
    fullName: {                    // nested object
        userfullName: {            // another level of nesting
            firstName: "Kartik",
            lastName: "Goyal"
        }
    }
};

// Accessing deeply nested properties
console.log(regularUser.fullName.userfullName.firstName); // "Kartik"

// Optional chaining (safer way – modern JS)
// console.log(regularUser?.fullName?.userfullName?.firstName);


// -----------------------------
// Merging / Combining objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// Method 1: Object.assign() – modifies target object
// const obj3 = Object.assign(obj1, obj2);  // ← this changes obj1 !
const obj3 = Object.assign({}, obj1, obj2); // safe way – creates new object
console.log(obj3);
// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// Method 2: Spread operator (...) – most popular & clean way (ES6+)
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);
// Output: same as above → { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// Note: If keys clash, later object overwrites earlier one
// Example:
// const a = { x: 10 };
// const b = { x: 20 };
// console.log({ ...a, ...b });   // { x: 20 }


// -----------------------------
// Array of objects – very common pattern (users list, products, etc.)
const users = [
    {
        id: 1,
        email: "kg0192421@gmail.com"
    },
    {
        id: 2,                    // ← note: IDs are different now
        email: "kartik.goyal@example.com"
    }
];

// Accessing array of objects
console.log(users[1].email);      // "kartik.goyal@example.com"


// -----------------------------
// Very useful Object methods for debugging / looping / checking

console.log(tinderUser);
// Whole object

console.log(Object.keys(tinderUser));
// → ["id", "name", "isLoggedIn"]   (array of keys)

console.log(Object.values(tinderUser));
// → ["123abc", "Kartik", false]     (array of values)

console.log(Object.entries(tinderUser));
// → [ ["id", "123abc"], ["name", "Kartik"], ["isLoggedIn", false] ]

// Check if property exists (own property, not inherited)
console.log(tinderUser.hasOwnProperty("name"));       // true
console.log(tinderUser.hasOwnProperty("age"));        // false