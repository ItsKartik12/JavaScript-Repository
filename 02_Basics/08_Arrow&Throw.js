// -------------------------------
// 1. Object literal + 'this' in regular method
// -------------------------------
const user = {
    username: 'Kartik',
    price: 999,

    // Regular function (method) → 'this' points to the object (user) when called as user.welcomeMessage()
    welcomeMessage: function () {
        console.log(`${this.username} welcome to the world of JavaScript!`);
    },

    // Arrow function method → 'this' would point to outer scope (usually window/global in non-strict mode)
    // Try uncommenting to see the difference
    /*
    welcomeArrow: () => {
        console.log(`${this.username} welcome from arrow function!`); // this.username → undefined
    }
    */
};

user.username = 'Harman';           // Update property
console.log(user.username);         // → Harman

user.welcomeMessage();              // → Harman welcome to the world of JavaScript!
// user.welcomeArrow();             // would print: undefined welcome from arrow function!


// -------------------------------
// 2. 'this' inside regular function (called standalone)
// -------------------------------
function chai() {
    let userName = 'Kartik';

    // 'this' in normal function (not method, not constructor) → global object (window in browser, global in Node)
    console.log(this.userName);     // → undefined  (window.userName doesn't exist)
    console.log(this === globalThis); // true in most environments
}

chai();                             // undefined


// -------------------------------
// 3. 'this' inside arrow function
// -------------------------------
const code = () => {
    let userName = 'Kartik';

    // Arrow functions do NOT have their own 'this'
    // → they inherit 'this' from the surrounding (lexical) scope
    console.log(this.userName);     // → undefined  (same as outside)
    console.log(this);              // → whatever 'this' was outside the arrow function
};

code();                             // undefined


// -------------------------------
// 4. Arrow functions – different return styles
// -------------------------------
const code2 = (num1, num2) => num1 + num2;           // implicit return (single expression)

// or with parentheses (very common when returning object)
const code3 = (num1, num2) => ({ userName: 'Kartik' }); // must wrap object in () otherwise {} is interpreted as function body

console.log(code2(5, 10));          // → 15
console.log(code3(5, 10));          // → { userName: 'Kartik' }


// ────────────────────────────────────────────────
// EXTRA: Very common real-world examples people add next
// ────────────────────────────────────────────────

// 5. Trying to fix 'this' problem – common interview question
const user2 = {
    username: "Priya",
    greet: function () {
        console.log(`Hello ${this.username}`);

        // setTimeout with regular function loses 'this'
        setTimeout(function () {
            console.log(this.username);           // → undefined
        }, 1000);

        // Solution 1: arrow function (most popular nowadays)
        setTimeout(() => {
            console.log(this.username);           // → Priya
        }, 1000);

        // Solution 2: store this (old-school)
        const that = this;
        setTimeout(function () {
            console.log(that.username);           // → Priya
        }, 1000);
    }
};

user2.greet();


// 6. Quick one-liner arrow variations people love
const square = n => n * n;
const add = (a, b) => a + b;
const sayHi = name => `Hi ${name}!`;
const getUser = () => ({ id: 101, name: "Aman" });  // returning object

console.log(square(7));             // 49
console.log(sayHi("Kartik"));       // Hi Kartik!
console.log(getUser());             // { id: 101, name: 'Aman' }