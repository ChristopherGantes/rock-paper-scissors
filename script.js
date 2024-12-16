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
    console.log("Tied!");
  }

  if (
    (playerChoice == "Rock" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Rock")
  ) {
    computerScore = computerScore + 1;
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  }
  else {
    playerScore = playerScore + 1;
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getPlayerChoice());
  }
  console.log(`Computer score: ${computerScore}\nPlayer score: ${playerScore}`);
}

playGame();
