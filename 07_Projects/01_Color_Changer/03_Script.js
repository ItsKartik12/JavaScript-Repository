const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const colorID = e.target.id; // Store the ID in a variable

        // Apply the background color
        body.style.backgroundColor = colorID;

        // Logic for text legibility


        console.log(`Background changed to: ${colorID}`);
    });
});