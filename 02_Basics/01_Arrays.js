// ========================
// Creating Arrays in JavaScript
// ========================

// Most common and recommended way to create an array
const myArray = [1, 2, 3, 4, 5];

// Alternative way using Array constructor
const myArr2 = new Array(1, 2, 3, 4, 5);

// Both are same in this case
// console.log(myArray);    // [1, 2, 3, 4, 5]
// console.log(myArr2);     // [1, 2, 3, 4, 5]


// ========================
// Important Array Methods
// ========================

// push() → adds one or more elements to the END of the array
myArray.push(6);
myArray.push(7);
myArray.push(20);
// After pushes → myArray = [1, 2, 3, 4, 5, 6, 7, 20]

// pop() → removes and returns the LAST element
myArray.pop();           // removes 20
// Now myArray = [1, 2, 3, 4, 5, 6, 7]


// unshift() → adds one or more elements to the BEGINNING of the array
myArray.unshift(9);      // adds 9 at index 0
// Now myArray = [9, 1, 2, 3, 4, 5, 6, 7]


// shift() → removes and returns the FIRST element
myArray.shift();         // removes 9
// Now myArray = [1, 2, 3, 4, 5, 6, 7]


// ========================
// Searching / Checking Methods
// ========================

console.log(myArray.includes(3));     // true
console.log(myArray.includes(10));    // false

console.log(myArray.indexOf(3));      // 2    (index starts from 0)
console.log(myArray.indexOf(99));     // -1   (not found)


// ========================
// join() → converts array to string
// ========================

const newArr = myArray.join();          // default separator is comma
console.log(newArr);                    // "1,2,3,4,5,6,7"

const newArrWithDash = myArray.join(" - ");
console.log(newArrWithDash);            // "1 - 2 - 3 - 4 - 5 - 6 - 7"

console.log("Original array remains unchanged:", myArray);
// [1, 2, 3, 4, 5, 6, 7]


// ========================
// Very Important: slice() vs splice()
// ========================

console.log("\n--- Before any slice/splice ---");
console.log("Original array:", myArray);  
// [1, 2, 3, 4, 5, 6, 7]

// slice(start, end) → returns new array, ORIGINAL array NOT changed
// end index is NOT included
const mynarr1 = myArray.slice(1, 3);
console.log("A) slice(1,3)  :", mynarr1);     // [2, 3]
console.log("B) Original after slice:", myArray); 
// [1, 2, 3, 4, 5, 6, 7]  ← unchanged


// splice(start, deleteCount, item1, item2, ...) 
// → removes/replaces elements, MODIFIES original array
const mynarr2 = myArray.splice(1, 3);     // start at index 1, delete 3 elements
console.log("C) splice(1,3)  :", mynarr2);    // [2, 3, 4]  ← removed elements
console.log("D) Original after splice:", myArray); 
// [1, 5, 6, 7]  ← original array is modified!
