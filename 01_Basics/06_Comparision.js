// Comparison between string and number → string "2" is coerced to number 2
console.log("2" > 1);       // true
// Reason: "2" → 2    →  2 > 1 = true

// null is coerced to 0 in numeric comparisons (>, <, >=, <=)
console.log(null > 0);      // false
// Reason: null → 0    →  0 > 0 = false

// == (loose equality) does not convert null to 0
console.log(null == 0);     // false
// Reason: null is only loosely equal to undefined
//         null == 0 is false

// null is coerced to 0 in >= comparison
console.log(null >= 0);     // true
// Reason: null → 0    →  0 >= 0 = true

// undefined is never equal to any value (except itself) with ==
console.log(undefined == 0); // false
// Reason: undefined is only == to null

// undefined in numeric comparison → becomes NaN
console.log(undefined > 0);  // false
// Reason: undefined → NaN   →  NaN > 0 = false

// Same as above — any comparison with NaN returns false
console.log(undefined < 0);  // false
// Reason: undefined → NaN   →  NaN < 0 = false

// === is strict equality → compares value AND type
console.log("2" === 2);     // false
// Reason: different types (string vs number)
// "2" === 2 is false even though the content looks similar