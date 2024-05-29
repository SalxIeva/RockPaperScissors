# Rock Paper Scissors Game

This is a simple Rock Paper Scissors game implemented in JavaScript. The game allows a human player to play against the computer. The game is played over 5 rounds, and the overall winner is declared at the end.

## Live Preview

https://salxieva.github.io/RockPaperScissors/

## How to Play

1. The game will prompt you to enter your choice: 'Rock', 'Paper', or 'Scissors'.
2. The computer will randomly select its choice.
3. The game will determine the winner of each round and keep track of the scores.
4. After 5 rounds, the game will display the final scores and declare the overall winner.

## Code Overview

### Functions

- **getComputerChoice**: 
Randomly returns one of the following string values: 'Rock', 'Paper', or 'Scissors'.

- **getHumanChoice**: 
Prompts the user to enter 'Rock', 'Paper', or 'Scissors'. If the input is invalid, the user is prompted to enter again. If the user cancels the input, the game ends.

- **playRound**: 
Determines the winner of a single round based on the choices of the human and the computer.

- **playGame**: 
Plays 5 rounds of the game, keeps track of the scores, and declares the overall winner.

### Variables

- **humanScore**:
Keeps track of the human player's score.

- **computerScore**:
Keeps track of the computer's score.

## Running the Game

1. Open the HTML file containing the script in a web browser.
2. Follow the prompts in the browser to play the game.
3. You can see your and computers choices in the console

