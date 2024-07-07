
// Function getComputerChoice
let getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    // getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

// Create two new variables named humanScore and computerScore in the global scope and initialize them with value of 0.
let humanScore = 0;
let computerScore = 0;
// Adding a round counter
let roundCount = 0; 

// PlayGame function
let playGame = () => {
    
    // Create buttons and append to the DOM
    const btnDiv = document.createElement("div");
    btnDiv.id = "buttons"
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";
    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    
    btnDiv.appendChild(rockBtn);
    btnDiv.appendChild(scissorsBtn);
    btnDiv.appendChild(paperBtn);
    document.body.appendChild(btnDiv);


    // Creating and appending score and result display elements
    const score = document.createElement("div");
    score.id = "score";
    document.body.appendChild(score);
    
    const result = document.createElement("div");
    result.id = "result";
    document.body.appendChild(result);

    const roundSect = document.createElement("div");
    const humanChoiceSect = document.createElement("div");
    const compChoiceSect = document.createElement("div");

    document.body.appendChild(roundSect);
    document.body.appendChild(humanChoiceSect);
    document.body.appendChild(compChoiceSect);
    
    // PlayRound function
    let playRound = (humanChoice) => {
        if (roundCount >= 5) {
             // Do nothing if 5 rounds have already been played
            return;
        }
        let computerChoice = getComputerChoice();
        
        roundSect.textContent = `Round ${roundCount + 1}:`;
        humanChoiceSect.textContent = `Human: ${humanChoice}`;
        compChoiceSect.textContent = `Computer: ${computerChoice}`;

        // Determine the winner of the round
        if (humanChoice.toLowerCase() === "rock" && computerChoice === "Paper") {
            result.textContent = "You lose! Paper beats Rock";
            computerScore++;
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "Scissors") {
            result.textContent = "You win! Rock beats Scissors";
            humanScore++;
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "Rock") {
            result.textContent = "You win! Paper beats Rock";
            humanScore++;
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "Scissors") {
            result.textContent = "You lose! Scissors beats Paper";
            computerScore++;
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "Paper") {
            result.textContent = "You win! Scissors beats Paper";
            humanScore++;
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "Rock") {
            result.textContent = "You lose! Rock beats Scissors";
            computerScore++;
        } else {
            result.textContent = "It's a tie!";
        }

        score.textContent = `Current Score - Human: ${humanScore}, Computer: ${computerScore}`;
        
        roundCount++; // Increment the round counter

        // Check if 5 rounds have been played
        if (roundCount >= 5) {
            // Declaring the overall winner
            if (humanScore > computerScore) {
                score.textContent += ` You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`;
            } else if (humanScore < computerScore) {
                score.textContent += ` You lose the game! Final score: Human ${humanScore} - Computer ${computerScore}`;
            } else {
                score.textContent += ` The game is a tie! Final score: Human ${humanScore} - Computer ${computerScore}`;
            }
            
            // Disable the buttons after 5 rounds
            rockBtn.disabled = true;
            scissorsBtn.disabled = true;
            paperBtn.disabled = true;
        }
    };

    // Add event listeners to the buttons
    rockBtn.addEventListener("click", () => playRound("Rock"));
    scissorsBtn.addEventListener("click", () => playRound("Scissors"));
    paperBtn.addEventListener("click", () => playRound("Paper"));
};

// Call playGame function
playGame();
