let humanScore = 0;
let computerScore = 0;

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
    return choice;
}

function playRound(humanChoice, computerChoice) {
    const humanLower = humanChoice.toLowerCase();
    if (humanLower == "rock" && computerChoice == "Scissors" ||
        humanLower == "scissors" && computerChoice == "Paper" ||
        humanLower == "paper" && computerChoice == "Rock")  {
        return `You win! ${humanLower.charAt(0).toUpperCase()+humanLower.substring(1)} beats ${computerChoice}!`;
    } else (humanLower == "rock" && computerChoice == "Paper" ||
        humanLower == "scissors" && computerChoice == "Rock" ||
        humanLower == "paper" && computerChoice == "Scissors")
        return `You lose! ${humanLower.charAt(0).toUpperCase()+humanLower.substring(1)} loses to ${computerChoice}!`;   
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));