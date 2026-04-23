// Block scope example
if (true) {
    let a = 10;     // block-scoped → not accessible outside
    var b = 20;     // function-scoped → accessible outside
    const c = 30;   // block-scoped → not accessible outside
}

console.log(b);     // 20
// console.log(a);  // ReferenceError: a is not defined
// console.log(c);  // ReferenceError: c is not defined


// Closure / Lexical scope example
function one() {
    const username = 'Kartik';

    function two() {
        console.log(username);     // can access → 'Kartik'
        const website = 'youtube.com';
    }

    two();
    // console.log(website);     // ReferenceError: website is not defined
}

one();
// two();                       // ReferenceError: two is not defined (not hoisted outside)


// Nested block scope
if (true) {
    const username = 'Kartik';

    if (username === 'Kartik') {
        const website = 'youtube.com';
        console.log(username + website);   // Kartikyoutube.com
    }

    // console.log(website);   // ReferenceError
}


// ++++++++++++++++++++++ Interesting part – Hoisting difference ++++++++++++++++++++++

// Function declaration → hoisted completely (can be called before definition)
console.log(addone(5));       // 6     ← works!

function addone(num1) {
    return num1 + 1;
}


// Function expression → only variable is hoisted (undefined), function is NOT
// console.log(addtwo(5));    // TypeError: addtwo is not a function

const addtwo = function (num1) {
    return num1 + 2;
};

console.log(addtwo(5));       // 7     ← works after declaration


// Bonus: arrow function expression (same hoisting behavior as above)
const addthree = (num) => num + 3;

console.log(addthree(5));     // 8