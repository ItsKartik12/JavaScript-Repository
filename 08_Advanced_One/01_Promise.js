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