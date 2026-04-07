const number = parseInt(Math.random() * 100) + 1;
const userInput = document.querySelector("#Guess");
const submit = document.querySelector("#submit");
const previousGuess = document.querySelector("#PreviousGuess");
const remaining = document.querySelector("#GuessRemaining");
const lowhigh = document.querySelector("#lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");
let preGuess = [];
let guessCount = 1;
let playGame = true;
if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}
function validateGuess() {
    //
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    }
    else if (gueess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
    }
    else {
        preGuess.push(guess);
        if (guessCount === 11) {
            displayMessage(`Game Over! The number was ${number}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
    function checkGuess() {
        //
    }
    function displayGuess() {
        //
    }
    function displayMessage() {
        //
    }
    function displayLowOrHi() {
        //
    }
    function endGame() {
        //
    }
    function newGame() {
        //
    }