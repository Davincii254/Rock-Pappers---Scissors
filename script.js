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

// --- GAME LOGIC ---
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;

    resultDisplay.classList.remove("green", "red");

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "IT'S A TIE!";
    } else if (winConditions[playerChoice] === computerChoice) {
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
}