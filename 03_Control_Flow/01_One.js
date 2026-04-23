const isloggedin = true;

if (isloggedin) {
    console.log("User is logged in.");

}
const temp = 41;
if (temp < 50) {
    console.log("Temperature is lesser than 50");
    console.log(`Temperature is ${temp}`);

}
else {
    console.log("Temperature is more than 50");
}
/*<, >, <=, >=, ==, !=, === */
const balance = 1000;
if (balance > 500) {
    console.log("You have sufficient balance");

}
if (balance > 500) console.log(`Your Balance: ${balance}`);

const userloggedIn = true;
const debitCard = true;
const loggedFromGoogle = false;
const loggedFromEmail = true;
if (userloggedIn && debitCard) {
    console.log("Allow to buy course");
}
if (loggedFromEmail || loggedFromGoogle) {
    console.log("User is loggedin");
}
