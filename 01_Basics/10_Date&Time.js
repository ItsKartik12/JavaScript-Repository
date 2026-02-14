// // Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 1 , 14, 12, 30, 0);
// console.log(myCreatedDate.toString());
let myDate = Date.now();
// console.log(myDate);
let variate = 10;
// for (let i = 0; i < 1; i++) {
//     // some code
//     variate += i;
// }
// for (let i = 0; i < 1000000000; i++) {
//     // some code
//     variate += i;
// }
// let newDate = Date.now();
// console.log(newDate);
// let diff = newDate - myDate;
// console.log(diff);
console.log(Date.now()/1000); // in seconds but there will  be some decimal value as well
// we can also use Math.floor() to get the whole number of seconds
console.log(Math.floor(Date.now()/1000)); // in seconds without decimal value
let myDate1 = new Date();
console.log(myDate1);
console.log(myDate1.getMonth()+1); // month starts from 0 to 11
console.log(myDate1.getDate());
console.log(myDate1.getDay()); // day starts from 0 to 6
console.log(myDate1.toLocaleString());