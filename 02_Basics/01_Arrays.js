// Arrays
const myArray = [1, 2, 3, 4, 5];
const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArray);
// console.log(myArr2);

// Arrays methods
myArray.push(6);
myArray.push(7);
myArray.push(20);
// console.log(myArray);
//if there is a error we can use pop to remove the last element
myArray.pop();
//console.log(myArray);
myArray.unshift(9);
//console.log(myArray);
myArray.shift();
//console.log(myArray);

// console.log(myArray.includes(3)); // true
// console.log(myArray.includes(10)); // false
// console.log(myArray.indexOf(3)); // 2
const newArr = myArray.join();
console.log(newArr); // "1,2,3,4,5,6,7,20"
console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 20]
//slice , splice
const mynarr1 = myArray.slice(1,3);
console.log("A ",mynarr1);
console.log("B",myArray);
const mynarr2 = myArray.splice(1,3);
console.log("C ",mynarr2);
console.log("D ",myArray);