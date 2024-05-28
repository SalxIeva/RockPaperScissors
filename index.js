// console.log 'Hello World!' to check if index.js is linked and working
// console.log('Hello World!');

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

// Create a new function named getHumanChoice.
// Use the prompt method to get the user’s input.
let getHumanChoice = () => {
    const userInput = prompt("Please enter 'Rock', 'Paper' or 'Scissors'.");
    console.log(userInput)
    // Convert user input to lover case
    // const userInputLowerCase = userInput.toLowerCase();
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

// Create two new variables named humanScore and computerScore in the global scope and initialize them with value of 0.
let humanScore = 0;
let computerScore = 0;


// Create a new function named playGame.
let playGame = () => {
    
    // Create a new function named playRound.
    // Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
    let playRound = (humanChoice, computerChoice) => {
        // Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
        const humanChoiceLowerCase = humanChoice.toLowerCase();
        let result;
        // console.log('lower case: ' + humanChoiceLowerCase)

        // Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
        if (humanChoiceLowerCase === "rock" && computerChoice === "Paper") {
            result = "You lose! Paper beats Rock";
            // Increment the humanScore or computerScore variable based on the round winner.
            computerScore++;
        } else if (humanChoiceLowerCase === "rock" && computerChoice === "Scissors") {
            result = "You win! Rock beats Scissors";
            humanScore++;
        } else if (humanChoiceLowerCase === "paper" && computerChoice === "Rock") {
            result = "You win! Paper beats Rock";
            humanScore++;
        } else if (humanChoiceLowerCase === "paper" && computerChoice === "scissors") {
            result = "You lose! Scissors beats Paper";
            computerScore++
        } else if (humanChoiceLowerCase === "scissors" && computerChoice === "Paper") {
            result = "You win! Scissors beats Paper";
            humanScore++;
        } else if (humanChoiceLowerCase === "scissors" && computerChoice === "Rock") {
            result = "You lose! Rock beats Scissors";
            computerScore++;
        } else {
            result = "It's a tie!"
        }
        return result;
    }

    
    for (let i = 0; i < 5; i++) {
        // playRound(humanChoice, computerChoice);
        const humanChoice = getHumanChoice();

        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log(`Human: ${humanChoice}`);
        console.log(`Computer: ${computerChoice}`);
        const result = playRound(humanChoice, computerChoice);
        // console.log(result);
    }

    // Declaring the overall winner
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final score: Human ${humanScore} - Computer ${computerScore}`);
    }
};

// call playGame function
playGame();
// Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
// Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.