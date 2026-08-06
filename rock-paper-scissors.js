function getComputerChoice() {
    let num = Math.random();
    if (num <= 0.33) {
        return "Rock";
    } else if (num <= 0.66) {
        return "Scissors";
    } else {return "Paper"}
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.substring(1);
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice == "Rock" && computerChoice == "Scissors" ||
        humanChoice == "Scissors" && computerChoice == "Paper" ||
        humanChoice == "Paper" && computerChoice == "Rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Paper" ||
        humanChoice == "Scissors" && computerChoice == "Rock" ||
        humanChoice == "Paper" && computerChoice == "Scissors") {
            console.log(`You lose! ${humanChoice} loses to ${computerChoice}!`);
            computerScore++;
        }
    console.log(`The current score is User: ${humanScore} to Computer: ${computerScore}!`)
    if (humanScore + computerScore == 5 && humanScore > computerScore) {
        return console.log(`The game is over! You win ${humanScore} to ${computerScore}!`);
    } else if (humanScore + computerScore == 5 && computerScore > humanScore) {
        return console.log(`The game is over! You lose ${humanScore} to ${computerScore}!`);
    } else playGame();
}

playGame();