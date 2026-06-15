function setUsername(username) {
    this.username = username;
    console.log("called");
    
}

function createUser(username, email,password){
    setUsername.call(this,username),
    this.email = email;
    this.password = password
}

const user1 = new createUser("Kartik", "kg0192421@mail", "1012");
console.log(user1);
