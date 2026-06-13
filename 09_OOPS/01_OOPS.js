const user12 = {
    userName: "Kartik",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        console.log(`Username: ${this.username}`);
        console.log("Current Context:", this);

    }
}
console.log(user12.userName);
console.log(user12.getUserDetails());


function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn
    return this;
}

const user1 = new User("Kartik", 8, true);
const user2 = new User("Rahul", 5, false);
console.log(user1);
console.log(user2);
console.log(user1.constructor);
console.log(user1 instanceof User);
