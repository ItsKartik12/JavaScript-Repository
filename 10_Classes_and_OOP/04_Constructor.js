class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`USERNAME is: ${this.username}`)
    }
    static createId() {
        return `123`;
    }
}

const Kartik = new User("Kartik");
// console.log(Kartik.createId());
const K2 = new User("K2");
class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}
const iphone = new Teacher("iphone", "apple@phone123@gmail.com");
iphone.logMe();

