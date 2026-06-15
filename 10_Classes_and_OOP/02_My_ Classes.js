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
