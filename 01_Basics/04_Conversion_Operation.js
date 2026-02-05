// Type conversion examples in JavaScript

let score = 45;
console.log(typeof score);        // number

score = "33";
console.log(typeof score);        // string

// String → Number
let valueInNumber = Number(score);
console.log(valueInNumber);       // 33

// Invalid number string → NaN
score = "Kartik";
valueInNumber = Number(score);
console.log(valueInNumber);       // NaN
console.log(typeof valueInNumber); // number   (NaN is still a number type)

// Number → String
let valueInString = String(valueInNumber);
console.log(valueInString);       // "NaN"

// Number → Boolean
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(isLoggedIn);          // 1
console.log(booleanIsLoggedIn);   // true

// Boolean → Number
let booleanValue = true;
let numberValue = Number(booleanValue);

console.log(booleanValue);        // true
console.log(numberValue);         // 1
/*
  JavaScript Type Conversion Rules:

  Number("123")     → 123
  Number("12.5")    → 12.5
  Number("")        → 0
  Number(" ")       → 0
  Number("abc")     → NaN
  Number(null)      → 0
  Number(undefined) → NaN
  Number(true)      → 1
  Number(false)     → 0

  Boolean(1)        → true
  Boolean(0)        → false
  Boolean("")       → false
  Boolean("hi")     → true
  Boolean(null)     → false
  Boolean(undefined)→ false

  String(123)       → "123"
  String(true)      → "true"
  String(null)      → "null"
  String(NaN)       → "NaN"
*/