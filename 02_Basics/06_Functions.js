// -------------------
// BASIC FUNCTION - Printing name letter by letter (good for understanding function declaration)
// -------------------

// Individual console logs (not recommended - just for learning)
console.log("K");
console.log("a");
console.log("r");
console.log("t");
console.log("i");
console.log("k");

// Better approach: wrap repeated behavior inside a function
function sayMyName() {
    console.log("K");
    console.log("a");
    console.log("r");
    console.log("t");
    console.log("i");
    console.log("k");
}

// sayMyName();    // Uncomment to call the function

// -------------------
// FUNCTION WITH PARAMETERS + TYPE CHECKING
// -------------------

/**
 * Adds two numbers and returns the result
 * Includes basic type checking to ensure both inputs are numbers
 * @param {number} Num1 - First number
 * @param {number} Num2 - Second number
 * @returns {number|undefined} Sum of two numbers or undefined if types are wrong
 */
function addTwoNumbers(Num1, Num2) {
    // Check if both arguments are of type number
    if (typeof Num1 === "number" && typeof Num2 === "number") {
        // console.log("Both are numbers");   // optional debug line
    } else {
        console.log("Both are not numbers → cannot add");
        return;   // early return → function ends here
    }

    const Num3 = Num1 + Num2;     // better to use const/let (modern practice)
    return Num3;

    // Anything written after return will NEVER execute
    console.log("This will not be executed");
}

// Test cases
addTwoNumbers(5, 10);          // works → 15 (but result not captured)
addTwoNumbers("5", 10);        // fails type check
addTwoNumbers(3, "a");         // fails type check

const result = addTwoNumbers(7, 8);
console.log(result);           // 15


// -------------------
// DEFAULT PARAMETERS + Handling undefined
// -------------------

/**
 * Greets user with login message
 * Demonstrates default parameter value
 * @param {string} [Name="MyName"] - Name of the user (optional)
 * @returns {string} Login message
 */
function PrintName(Name = "MyName") {
    // Old way of checking undefined (before default parameters were common)
    if (Name === undefined) {
        console.log("Please enter a Name");
        return;
    }

    // Template literal (modern string formatting)
    return `${Name} just logged in to the system`;
}

console.log(PrintName("Kartik"));   // Kartik just logged in...
console.log(PrintName());           // MyName just logged in...


// -------------------
// REST PARAMETER (...)
// Used to accept variable number of arguments
// -------------------

/**
 * Collects all passed numbers into an array
 * Demonstrates rest parameter syntax
 * @param {...number} num1 - any number of numeric arguments
 * @returns {number[]} Array containing all passed numbers
 */
function calculateCarPrice(...num1) {
    return num1;   // returns array of all arguments
}

console.log(calculateCarPrice(10));            // [10]
console.log(calculateCarPrice(10, 20, 30));    // [10, 20, 30]


// -------------------
// PASSING OBJECT AS ARGUMENT
// Very common pattern in real JavaScript projects
// -------------------

const Users = {
    UserName: "Kartik",
    Age: 19,
    City: "Delhi",
};

/**
 * Displays user information from an object
 * Shows how to access object properties safely
 * @param {Object} AnyObject - Object containing user details
 */
function HandleObject(AnyObject) {
    console.log(`UserName is ${AnyObject.UserName}`);
    console.log(`Age is ${AnyObject.Age}`);
    console.log(`City is ${AnyObject.City}`);
}

HandleObject(Users);

// You can also pass object directly (anonymous object)
HandleObject({
    UserName: "Rahul",
    Age: 22,
    City: "Mumbai"
});


// -------------------
// PASSING ARRAY + ACCESSING ELEMENT BY INDEX
// -------------------

const newArray = [200, 400, 600, 800];

/**
 * Returns the second element of any array (index 1)
 * Demonstrates array indexing
 * @param {Array} Array - Any array
 * @returns {*} Second element of the array
 */
function returnSecondElement(Array) {
    return Array[1];   // index 0 = first, index 1 = second
}

console.log(returnSecondElement(newArray));          // 400

// Bonus: what happens if array is too short?
console.log(returnSecondElement([5]));               // undefined