// ────────────────────────────────────────────────
// PART 1: Combining arrays — common beginner mistakes & best practices
// ────────────────────────────────────────────────

const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dcHeroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];

// ─── ❌ Common MISTAKE: Using push() directly with an array ────────────────────
// push() adds the argument **as a single element** — even if it's an array!
marvelHeroes.push(dcHeroes);

console.log(marvelHeroes);
// Result:
// [
//   'Iron Man',
//   'Captain America',
//   'Thor',
//   'Hulk',
//   'Black Widow',
//   [ 'Superman', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman' ]  ← nested!
// ]

console.log(marvelHeroes.length);  // → 6   (not 10 — very common surprise!)

// Reset for next examples
marvelHeroes.length = 5;  // restore original array

// ─── ✅ Classic safe way: concat() ─────────────────────────────────────────────
// Returns a **new array**, does NOT modify originals
const combined = marvelHeroes.concat(dcHeroes);
// Alternative: marvelHeroes.concat("Deadpool", "Joker")

console.log(combined);
// → ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Superman', ...]

console.log(marvelHeroes);         // still original 5 items
console.log(dcHeroes);             // unchanged

// ─── ✅ Modern & recommended way (most of the time): Spread operator ───────────
const allHeroes = [...marvelHeroes, ...dcHeroes];
// You can mix freely: [...marvelHeroes, "Deadpool", ...dcHeroes, "Joker"]

console.log(allHeroes);
// → clean flat array with 10 heroes

// Bonus: Modify original array with spread + push
marvelHeroes.push(...dcHeroes);
console.log(marvelHeroes);        // now has 10 items
console.log(marvelHeroes.length); // → 10

// ────────────────────────────────────────────────
// Flattening deeply nested arrays
// ────────────────────────────────────────────────

const nested = [1, 2, 3, [4, 5, [6, 7, [8, 9]]], 10];

console.log(Array.of);          // prints the function itself
// or better – actually use it:
console.log(Array.of(1, 2, 3)); // prints [1, 2, 3]

console.log(nested.flat(2));
// → [1, 2, 3, 4, 5, 6, 7, [8,9], 10]

console.log(nested.flat(Infinity));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   ← usually what you want

// ────────────────────────────────────────────────
// Array.from() — useful conversions
// ────────────────────────────────────────────────

console.log(Array.isArray("Kartik"));            // → false

console.log(Array.from("Kartik"));               // → ['K','a','r','t','i','k']

console.log(Array.from({ name: "Kartik" }));     // → [] (empty!)

console.log(Array.from({ name: "Kartik", age: 25 }));           // → []
console.log(Array.from(Object.keys({ name: "Kartik", age: 25 }))); // → ['name', 'age']

// Also great for: NodeList, arguments, Set, Map.keys(), etc.

// ────────────────────────────────────────────────
// Array.of() vs Array() — important difference
// ────────────────────────────────────────────────

let a = 7;
let b = 100;
let c = 300;

console.log(Array.of(a));                // → [7]
console.log(Array(a));                   // → [ <7 empty items> ]  ← length 7, very confusing!

console.log(Array.of(b, c));             // → [100, 300]
console.log(Array.of("hi", true, null)); // → ['hi', true, null]

// ────────────────────────────────────────────────
// Quick modern summary (2025 best practices)
// ────────────────────────────────────────────────
// Merge arrays (new)        →  [...a, ...b]
// Merge into existing       →  arr.push(...other)  or  arr.splice(arr.length, 0, ...other)
// Flatten everything        →  arr.flat(Infinity)
// String → char array       →  [...str]  or  Array.from(str)
// Safe array from values    →  Array.of(1, 2, 3)
// Avoid                     →  Array(number)   ← creates empty slots!

console.log("Happy coding! 🚀");