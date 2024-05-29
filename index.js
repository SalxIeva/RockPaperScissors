// console.log 'Hello World!' to check if index.js is linked and working
// console.log('Hello World!');

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
// console.log(getComputerChoice());


// Create a new function named getHumanChoice.
let getHumanChoice = () => {
    // Use the prompt method to get the user’s input.
    // Convert user input to lover case
    while (true) {
        let userInput = prompt("Please enter 'Rock', 'Paper' or 'Scissors'.");
        if (userInput === null) {
            alert("Okey then, byeeeee..");
            return null;
        }
        userInput = userInput.toLowerCase();
    // console.log(userInput)
    // const userInputLowerCase = userInput.toLowerCase();

    // Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
        if (userInput === "rock") {
            return "Rock"
        } else if (userInput === "paper") {
            return "Paper"
        } else if (userInput === "scissors") {
            return "Scissors"
        } else {
            alert("Please enter a valid input.");
        }
    }
}
// Test what your function returns by using console.log.
// console.log(getHumanChoice());


// Create two new variables named humanScore and computerScore in the global scope and initialize them with value of 0.
let humanScore = 0;
let computerScore = 0;


// Create a new function named playGame.
let playGame = () => {
    // Create a new function named playRound with two parameters: humanChoice and computerChoice.
    let playRound = (humanChoice, computerChoice) => {
        if (humanChoice === null) {
            return "Game cancelled";
        }
        // Make function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
        humanChoice = humanChoice.toLowerCase();
        // console.log(typeof humanChoiceLowerCase);
        let result;
        // console.log('lower case: ' + humanChoiceLowerCase)

        // Write the code for playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
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
        let humanChoice = getHumanChoice();
        if (humanChoice === "Please enter a valid input.") {
            console.log(humanChoice);
            // repeat the round if input is not valid.
            i--;
        } 

        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log(`Human: ${humanChoice}`);
        console.log(`Computer: ${computerChoice}`);
        const result = playRound(humanChoice, computerChoice);
        console.log(result);
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
