const user = {
    username: 'Kartik',
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} welcome to the world of JavaScript!`);
    }
}
user.username = 'Harman';
console.log(user.username);
user.welcomeMessage();
