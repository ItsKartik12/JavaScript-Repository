//******************************* Operations *******************************\\

// Unary negation (making a number negative)
let value = 3;
let negValue = -value;
console.log(negValue);      // -3
// Unary minus (-) converts to number and negates it

// Exponentiation (power operator)
console.log(2 ** 3);        // 8
// ** is the exponentiation operator (2³ = 8)
// Same as: Math.pow(2, 3)

// String concatenation with +
let str = "Hello";
let str2 = "World";
let str3 = str + " " + str2;
console.log(str3);          // "Hello World"

// Very important JavaScript behavior: + operator with mixed types
console.log("1" + 2 + 2);   // "122"
// Left-to-right evaluation:
// "1" + 2  →  "12"  (string concatenation)
// "12" + 2 →  "122"

console.log(2 + 2 + "1");   // "41"
// Left-to-right evaluation:
// 2 + 2    →  4     (number addition)
// 4 + "1"  →  "41"  (number + string = string concatenation)

// Boolean values printed directly
console.log(true);          // true

// Unary plus (+) converts to number
console.log(+true);         // 1
// true → 1 (very common in calculations)

console.log(+false);        // 0
// false → 0

// Extra useful examples of unary plus (very common in real code):

console.log(+"");           // 0          (empty string)
console.log(+"   ");        // 0          (whitespace only)
console.log(+"42");         // 42         (string number → number)
console.log(+"007");        // 7          (leading zeros ignored)
console.log(+"3.14");       // 3.14
console.log(+"hello");      // NaN        (cannot convert)
console.log(+null);         // 0
console.log(+undefined);    // NaN

// Real-world usage example:
let input = "45";
let number = +input;        // quick way to convert string to number
console.log(number);        // 45
console.log(typeof number); // "number"

// Safe conversion with fallback (very common pattern)
let userInput = "abc";
let safeNumber = +userInput || 0;
console.log(safeNumber);    // 0   (because + "abc" = NaN → falsy → fallback to 0)