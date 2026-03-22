const coding = ['js', 'java', 'ruby', 'python', 'cpp'];
// coding.forEach(function (val) {
//     console.log(val);

// })
// coding.forEach((item) => {
//     console.log(item);

// })
function printme(item) {
    //console.log(item);

}
coding.forEach(printme);
coding.forEach((item, index) => {
    console.log(index);
})

