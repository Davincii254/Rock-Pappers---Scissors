// --- SETUP ---
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

const choices = ["rock", "paper", "scissors"];

const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

let playerScore = 0;
let computerScore = 0;

// --- CALLBACK FUNCTION ---
const updateGameUI = (result, playerChoice, computerChoice) => {
    playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;

    // Reset colors
    resultDisplay.classList.remove("green", "red");

    // Update UI based on result
    if (result === "tie") {
        resultDisplay.textContent = "IT'S A TIE!";
    } else if (result === "win") {
        resultDisplay.textContent = "YOU WIN!";
        resultDisplay.classList.add("green");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        resultDisplay.textContent = "YOU LOSE!";
        resultDisplay.classList.add("red");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
};

// --- GAME LOGIC ---
const playGame = (playerChoice, callback) => {
    
    // NESTED FUNCTION 1: Gets the computer's random choice
    const getComputerChoice = () => {
        return choices[Math.floor(Math.random() * choices.length)];
    };

    // NESTED FUNCTION 2: Determines the outcome of the match
    const determineResult = (player, computer) => {
        if (player === computer) return "tie";
        if (winConditions[player] === computer) return "win";
        return "lose";
    };

    // Execute nested functions
    const computerChoice = getComputerChoice();
    const result = determineResult(playerChoice, computerChoice);

    // Execute the callback function to update the DOM
    callback(result, playerChoice, computerChoice);
};