//for
// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log("Element is", element);

// }
for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 5; j++) {
        //console.log(`Inner loop value ${j} & inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i * j);
    }

}