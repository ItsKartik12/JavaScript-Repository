class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername(Username) {
        this.Username = Username;
        return `${this.username.toUpperCase()}`;
    }
}

const User1 = new User("Kartik", "kg0192421@gmail.com", "123");
console.log(User1.encryptPassword());
console.log(User1.changeUsername("ItsKark"));

// behind scene

function User12(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

}

User12.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}
User12.prototype.changeUsername = function () {
    return `${this.password}abc`;
}

const MyUser = new User12("MyWorld", "MyWorld123@gmail.com", "1123");
console.log(MyUser.encryptPassword());
console.log(MyUser.changeUsername());

