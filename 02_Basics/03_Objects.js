//    singleton
//   object literal
const user = {
    name : "Kartik",
    "full name" : "Kartik Goyal",
    age : 19,
    location : "India",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
    email: "kg0192421@gmail.com",

}
console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);