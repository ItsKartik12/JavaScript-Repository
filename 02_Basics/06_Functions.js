// console.log("K");
// console.log("a");
// console.log("r");
// console.log("t");
// console.log("i");
// console.log("k");

function sayMyName() {
    console.log("K");
    console.log("a");
    console.log("r");
    console.log("t");
    console.log("i");
    console.log("k");

}
//sayMyName();
function addTwoNumbers(Num1, Num2) {
    if (typeof Num1 == "number" && typeof Num2 == "number") {
        console.log("Both are numbers");
    }
    else {
        console.log("Both are not numbers");
        return;
    }
    Num3 = Num1 + Num2;
    console.log(Num3);
}
addTwoNumbers(5, 10);
addTwoNumbers("5", 10);
addTwoNumbers(3, "a");
