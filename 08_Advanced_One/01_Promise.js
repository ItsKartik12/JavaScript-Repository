const promiseOne = new Promise((resolve, reject) => {
    //Do an sync task
    //DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});
promiseOne.then(() => {
    console.log("Promise Consumed");
})
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task 2');

    }, 1000);
}).then(() => {
    console.log('Promise 2 consumed');
})
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: 'Kartik', email: 'kg0192421@gmail.com' })
    })
})
promiseThree.then((data) => {
    console.log(data);
});
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Kartik", email: "kg0192421@gmail.com" });
        }
        else {
            reject('Error: Something went wrong');
        }
    }, 1000);
})
promiseFour.then((user) => {
    console.log(user);
    return user.username;

}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Promise is either resolved or rejected');
})
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "JavaScript", password: "123" });
        }
        else {
            reject('Error: JS went wrong');
        }
    }, 1000);
});
// wap in js to create a promise that excute error when two random number are chose A & B & if A is greater than B then resolve the promise otherwise reject the promise & make use of then, catch & finally to consume the promise.
const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let A = Math.floor(Math.random() * 100);
        let B = Math.floor(Math.random() * 100);
        if (A > B) {
            resolve({ A, B, message: "A is greater than B" });
        } else {
            reject({ A, B, message: "A is not greater than B" });
        }
    }, 1000);
});
promise1.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Promise Six is either resolved or rejected');
});
