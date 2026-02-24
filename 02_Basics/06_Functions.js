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
        //console.log("Both are numbers");

    }
    else {
        console.log("Both are not numbers");
        return;
    }
    Num3 = Num1 + Num2;
    return Num3;
    console.log("This will not be executed");
}
addTwoNumbers(5, 10);
addTwoNumbers("5", 10);
addTwoNumbers(3, "a");
const result = addTwoNumbers(7, 8);
console.log(result);
function PrintName(Name = "MyName") {
    if (Name === undefined) {
        console.log("Please enter a Name");
        return;
    }
    return `${Name} just logged in to the system`;
}
console.log(PrintName("Kartik"));
console.log(PrintName());
function calculateCarPrice(...num1) {
    return num1;
}
console.log(calculateCarPrice(10));
console.log(calculateCarPrice(10, 20, 30));
const Users = {
    UserName: "Kartik",
    Age: 19,
    City: "Delhi",
}
function HandleObject(AnyObject) {
    console.log(`UserName is ${AnyObject.UserName}`);
    console.log(`Age is ${AnyObject.Age}`);
    console.log(`City is ${AnyObject.City}`);

}
HandleObject(Users);

const newArray = [200, 400, 600, 800];
function returnSecondElement(Array) {
    return Array[1];
}
console.log(returnSecondElement(newArray));
