// ────────────────────────────────────────────────
// PART 1: Combining arrays — common beginner mistakes
// ────────────────────────────────────────────────

const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dcHeroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];

// ─── Method 1: push() — WRONG way to merge arrays ────────────────────────────
marvelHeroes.push(dcHeroes);   // ← you are pushing the whole array as one item!

console.log(marvelHeroes);
// Result:
// [
//   'Iron Man',
//   'Captain America',
//   'Thor',
//   'Hulk',
//   'Black Widow',
//   [ 'Superman', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman' ]   ← nested array!
// ]

console.log(marvelHeroes.length);     // → 6   (not 10!)

// ─── Method 2: concat() — correct, but does NOT modify original ──────────────
const combined = marvelHeroes.concat(dcHeroes);
// or: const combined = marvelHeroes.concat(dcHeroes[0], dcHeroes[1], ...);

console.log(combined);
// → ['Iron Man','Captain America','Thor','Hulk','Black Widow','Superman',...]

console.log(marvelHeroes);   // ← original still unchanged!

// ─── Best modern way: spread operator (...) ─────────────────────────────────
const allHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes);
// → clean flat array with 10 heroes

// You can also do:
marvelHeroes.push(...dcHeroes);   // ← spread here makes push add individual items
console.log(marvelHeroes);        // now has 10 items (modified original)
const anyArray = [1, 2, 3, [4, 5, [7, 8, 9, [10, 11]]], 6];

const flatArray = anyArray.flat(Infinity);
console.log(flatArray);
// → [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 6]   ← perfect!

// Alternatives you might see:
// anyArray.flat(1)   → only one level     → [1,2,3,4,5,[7,8,9,[10,11]],6]
// anyArray.flat(2)   → two levels         → [1,2,3,4,5,7,8,9,[10,11],6]
// anyArray.flat(Infinity) → all levels (most useful)
console.log(Array.isArray("Kartik"));
console.log(Array.from("Kartik"));
console.log(Array.from({name: "Kartik"}));
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.llog(Array.of)