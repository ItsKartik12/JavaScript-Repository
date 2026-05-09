const user = {
    userName: "Kartik",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        console.log(`Username: ${this.username}`);
        console.log("Current Context:", this);

    }
}
console.log(user.userName);
console.log(user.getUserDetails());

