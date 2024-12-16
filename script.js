function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "Rock";
  }
  if (choice == 1) {
    return "Paper";
  }
  if (choice == 2) {
    return "Scissors";
  }
}

function getPlayerChoice() {
  let choice = prompt("Choose!: Rock, Paper, or Scissors");
  choice = choice.trim();
  choice = choice.toLowerCase();
  choice = choice.slice(0, 1).toUpperCase() + choice.slice(1);
  return choice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(computerChoice, playerChoice) {
  if (playerChoice == computerChoice) {
    alert("Tied!");
  }
  if (
    (playerChoice == "Rock" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Rock")
  ) {
    alert(`You lose! ${computerChoice} beats ${playerChoice}`);
  }
  if (
    (computerChoice == "Rock" && playerChoice == "Paper") ||
    (computerChoice == "Paper" && playerChoice == "Scissors") ||
    (computerChoice == "Scissors" && playerChoice == "Rock")
  ) {
    alert(`You win! ${playerChoice} beats ${computerChoice}`);
  }
}

let computerChoice = getComputerChoice();
// console.log(computerChoice);
let playerChoice = getPlayerChoice();

playRound(computerChoice, playerChoice);