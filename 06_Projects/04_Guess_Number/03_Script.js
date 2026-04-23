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
    if (playGame) {
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    }
});

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        preGuesses.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    // Proximity hint
    if (Math.abs(guess - number) <= 10 && guess !== number) {
        displayMessage2("You're very close!");
    } else {
        displayMessage2("");
    }

    // Game logic
    if (guess === number) {
        displayMessage(`Congratulations! You guessed it!`);
        endGame();
    } else if (guessCount > 10) {
        displayMessage(`Game Over! The number was ${number}`);
        endGame();
    } else {
        if (guess < number) {
            displayMessage("Low! Try again.");
        } else {
            displayMessage("High! Try again.");
        }
    }
}

function displayGuess(guess) {
    userInput.value = "";
    // Added a comma for better history readability
    previousGuess.innerHTML += `${guess}${guessCount < 10 ? ', ' : ''}`;
    guessCount++;
    // Fixed the math so it shows correctly
    remaining.innerHTML = `${11 - guessCount}`;
}

function displayMessage(message) {
    lowhigh.innerHTML = `<h3>${message}</h3>`;
}

function displayMessage2(message) {
    lowhigh2.innerHTML = `<span>${message}</span>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    // Stylized the button to match your existing CSS
    p.innerHTML = `<button id="newGame" style="width:100%; margin-top:15px; background:#2b9348">Start New Game</button>`;
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
        remaining.innerHTML = `10`;
        userInput.removeAttribute("disabled");
        lowhigh.innerHTML = "";
        lowhigh2.innerHTML = "";
        startOver.removeChild(p);
        playGame = true;
    });
}