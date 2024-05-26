// console.log 'Hello World!' to check if index.js is linked and working
console.log('Hello World!');

// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.
// ----- Write the logic to get the computers choice. -----

// Create a new function named getComputerChoice.
let getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    // Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }
}
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
console.log(getComputerChoice());

// ----- Write the logic to get the human choice ------
// Your game will be played by a human player. You will write a function that takes the user choice and returns it.

// Create a new function named getHumanChoice.
// Use the prompt method to get the user’s input.
let getHumanChoice = () => {
    const userInput = prompt("Please enter 'Rock', 'Paper' or 'Scissors'.");
    console.log(userInput)
    // Convert user input to lover case
    const userInputLowerCase = userInput.toLowerCase();
    // Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
    if (userInput === "rock") {
        return "You selected 'Rock'"
    } else if (userInput === "paper") {
        return "You selected 'Paper'"
    } else if (userInput === "scissors") {
        return "You selected 'Scissors'"
    } else {
        return "Please select a valid input."
    }
}
// Test what your function returns by using console.log.
console.log(getHumanChoice());
// ------ Declare the players score variables -----
// Your game will keep track of the players score. You will write variables to keep track of the players score.

// Create two new variables named humanScore and computerScore in the global scope and initialize them with value of 0.
let humanScore = 0;
let computerScore = 0;

// ----- Write the logic to play a single round -----
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

// ----- Write the logic to play a single round -----
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.