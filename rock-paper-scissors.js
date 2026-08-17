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

function playRound(hChoice, cChoice) {
    if (hChoice === cChoice) {
            return "Tie";
    } else if (hChoice == "Rock" && cChoice == "Scissors" ||
        hChoice == "Scissors" && cChoice == "Paper" ||
        hChoice == "Paper" && cChoice == "Rock") {
            return "Human";
    } else if (hChoice == "Rock" && cChoice == "Paper" ||
        hChoice == "Scissors" && cChoice == "Rock" ||
        hChoice == "Paper" && cChoice == "Scissors") {
            return "Computer";
        }
}

let humanScore = 0;
let computerScore = 0;


function playGame(button) {
    let humanChoice = button;
    let computerChoice = getComputerChoice();
    let winner = playRound(humanChoice, computerChoice);

    if (winner == "Human") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else if (winner == "Computer") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    } else if (winner == "Tie") {
        console.log("It's a tie!")
    }
    
    if (humanScore > computerScore) {
        console.log(`You win by a score of ${humanScore} to ${computerScore}!`);
    } else if (computerScore > humanScore) {
        console.log(`You lost by a score of ${humanScore} to ${computerScore}!`);
    } else {console.log(`It's a tie! ${humanScore} to ${computerScore}`);}
}

let buttonValue = ""

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
document.body.appendChild(rockButton);
rockButton.addEventListener('click', () => {
    buttonValue = "Rock";
    playGame(buttonValue);
})

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
document.body.appendChild(scissorsButton);
scissorsButton.addEventListener('click', () => {
    buttonValue = "Scissors";
    playGame(buttonValue);
})

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
document.body.appendChild(paperButton);
paperButton.addEventListener('click', () => {
    buttonValue = "Paper";
    playGame(buttonValue);
})