/*let score = 45;
console.log(typeof score); // number
score = "33";
console.log(typeof score); // string
let valueInNumber = Number(score); // convert string to number
console.log(valueInNumber); // 33
//when we convert string to number, if the string is a valid number, it will convert to that number, otherwise it will convert to NaN (Not a Number)
score = "Kartik";
valueInNumber = Number(score);
console.log(valueInNumber); // NaN
console.log(typeof valueInNumber); // number
let valueInString = String(valueInNumber); // convert number to string
console.log(valueInString); // "NaN"
*/
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn); // convert number to boolean
console.log(isLoggedIn); // print the original value of isLoggedIn
console.log(booleanIsLoggedIn);//print the boolean value of isLoggedIn
// can we do reverse conversion? yes we can
let booleanValue = true;
let numberValue = Number(booleanValue); // convert boolean to number
console.log(booleanValue); // print the original value of booleanValue
console.log(numberValue); // print the number value of booleanValue
// There we found the change in the value of isLoggedIn and booleanIsLoggedIn, 

