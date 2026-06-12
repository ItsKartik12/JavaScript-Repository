function multiplyBy5(num) {
    return num * 5;
}
multiplyBy5.power = 5;
console.log(multiplyBy5(10));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
function createUser(username, score) {
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function () {
    this.score++;
}
const user1 = new createUser('john', 5);
const user2 = new createUser('jane', 10);
console.log(user1);
console.log(user2);
user1.increment();
console.log(user1);