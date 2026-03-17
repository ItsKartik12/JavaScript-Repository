function stepThree() {
    console.log("3. Inside stepThree (Top of the stack)");
    // At this point, the stack is: Global -> stepOne -> stepTwo -> stepThree
}

function stepTwo() {
    console.log("2. Inside stepTwo");
    stepThree();
    console.log("4. Back in stepTwo (stepThree is finished)");
}

function stepOne() {
    console.log("1. Inside stepOne");
    stepTwo();
    console.log("5. Back in stepOne (stepTwo is finished)");
}

// Start the process
stepOne();