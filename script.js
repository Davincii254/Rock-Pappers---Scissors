// ==========================================
// 1. SETUP & VARIABLES
// ==========================================

// We use document.getElementById() to find specific HTML elements by their "id" attribute.
// Storing them in variables (like playerDisplay) allows us to easily change their text later.
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// An array holding the three possible moves a computer can choose from.
const choices = ["rock", "paper", "scissors"];

// An object that acts as our "rulebook". 
// It tells us what each move beats. For example, rock beats scissors.
const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

// Variables to keep track of the score. 
// We use "let" instead of "const" because these numbers will change as the game is played.
let playerScore = 0;
let computerScore = 0;


// ==========================================
// 2. THE UI UPDATER (CALLBACK FUNCTION)
// ==========================================

// This is an arrow function. It takes three pieces of information (arguments) 
// to figure out what to show on the screen.
const updateGameUI = (result, playerChoice, computerChoice) => {

    // .toUpperCase() capitalizes the words. 
    // The backticks (`) allow us to insert variables directly into a string using ${}.
    playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`; 
    computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`; 

    // An if/else statement to check the result and update the screen accordingly.
    if(result === "tie") {
        // If it's a tie, just update the main text.
        resultDisplay.textContent = "IT`S A TIE";
        
    } else if (result === "win") {
        // If the player wins, update the text and increase the player's score by 1 (using ++).
        resultDisplay.textContent = "YOU WIN!";
        playerScore++; 
        // Show the new score on the screen.
        playerScoreDisplay.textContent = playerScore;
        
    } else {
        // If it's not a tie and not a win, it must be a loss.
        resultDisplay.textContent = "YOU LOSE!";
        computerScore++; // Increase computer's score by 1.
        computerScoreDisplay.textContent = computerScore;
    }
};


// ==========================================
// 3. THE CORE GAME LOGIC
// ==========================================

// This function starts the game. It needs to know what the player chose, 
// and it takes a "Callback" function (which will be updateGameUI) to run at the very end.
const playGame = (playerChoice, Callback) => {

    // --- NESTED FUNCTION 1: Get the computer's random choice ---
    const getComputerChoice = () => {
        // Math.random() generates a decimal between 0 and 1.
        // We multiply it by choices.length (which is 3).
        // Math.floor() rounds that decimal down to a whole number (0, 1, or 2).
        // Finally, we use that number to pick an item from the "choices" array.
        return choices[Math.floor(Math.random() * choices.length)];
    };

    // --- NESTED FUNCTION 2: Determine the outcome of the match ---
    const determineResult = (player, computer) => {
        // If both chose the same thing, it's immediately a tie.
        if (player === computer) return "tie";
        
        // We check our winConditions "rulebook". 
        // Example: If player chose "rock", winConditions["rock"] is "scissors".
        // If the computer actually chose "scissors", the player wins!
        if (winConditions[player] === computer) return "win";
        
        // If it's not a tie, and the player didn't win, they must have lost.
        return "lose";
    };

    // --- EXECUTING THE GAME ---
    
    // 1. Tell the computer to make its choice, and save it in a variable.
    const computerChoice = getComputerChoice();
    
    // 2. Figure out who won by comparing the two choices.
    const result = determineResult(playerChoice, computerChoice);

    // 3. Finally, trigger the Callback function we passed in (updateGameUI).
    // We hand it the result, the player's choice, and the computer's choice 
    // so it can update the screen for the user.
    Callback(result, playerChoice, computerChoice);
}