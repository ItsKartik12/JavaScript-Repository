let number = parseInt(Math.random() * 100) + 1;
const userInput = document.querySelector("#Guess");
const submit = document.querySelector("#submit");
const previousGuess = document.querySelector("#PreviousGuess");
const remaining = document.querySelector("#GuessRemaining");
const lowhigh = document.querySelector("#lowOrHi");
const lowhigh2 = document.querySelector("#lowOrHii");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");
let preGuesses = [];
let guessCount = 1;
let playGame = true;

submit.addEventListener("click", function (e) {
    e.preventDefault();

    // ADD THIS CHECK:
    if (playGame) {

        const guess = parseInt(userInput.value);
        validateGuess(guess);
    }
});

function validateGuess(guess) {
    //
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    }
    else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
    }
    else {
        preGuesses.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}
function checkGuess(guess) {
    // 1. First, handle the proximity hint (Message 2)
    if (Math.abs(guess - number) <= 10 && guess !== number) {
        displayMessage2("You're very close!");
    } else {
        displayMessage2(""); // Clear the "close" hint if they aren't close or they won
    }

    // 2. Then, handle the core game logic (Message 1)
    if (guess === number) {
        displayMessage(`Congratulations! You guessed the number in ${guessCount - 1} guesses!`);
        endGame();
    } else if (guessCount > 10) {
        // If they didn't win and it was the 10th guess
        displayMessage(`Game Over! The number was ${number}`);
        endGame();
    } else if (guess < number) {
        displayMessage("Too low! Try again.");
    } else {
        displayMessage("Too high! Try again.");
    }
}
function displayGuess(guess) {
    userInput.value = "";
    previousGuess.innerHTML += `${guess} `;
    guessCount++;
    remaining.innerHTML = `${11 - guessCount} guesses remaining`;
}
function displayMessage(message) {
    lowhigh.innerHTML = `<h2>${message}</h2>`;
}
function displayMessage2(message) {
    lowhigh2.innerHTML = `<h2>${message}</h2>`;
}
function displayLowOrHi() {
    //
}
function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<button id="newGame">New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function () {
        number = parseInt(Math.random() * 100) + 1;
        preGuesses = [];
        guessCount = 1;
        previousGuess.innerHTML = "";
        remaining.innerHTML = `${11 - guessCount} guesses remaining`;
        userInput.removeAttribute("disabled");
        lowhigh.innerHTML = "";
        lowhigh2.innerHTML = "";
        startOver.removeChild(p);
        playGame = true;
    });
}
