const randomColor = function () {
    const hex = '0123456789abcdef';
    let color = '#';

    // Loop 8 times (6 for Color + 2 for Random Opacity)
    for (let i = 0; i < 8; i++) {
        let num = Math.floor(Math.random() * 16);

        // Log the Hex character being picked
        console.log(`Position ${i + 1}: ${hex[num]}`);

        color += hex[num];
    }

    console.log(`Final 8-digit Hex: ${color}`);
    return color;
}

let change;

const startChangingColor = function () {
    if (!change) {
        console.log("Starting Random Color & Opacity...");
        change = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
}

const stopChangingColor = function () {
    console.log("Stopping...");
    clearInterval(change);
    change = null;
}

document.getElementById('start').addEventListener('click', startChangingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);