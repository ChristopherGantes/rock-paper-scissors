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
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

function playRound(computerChoice, playerChoice) {
  if (playerChoice == computerChoice) {
    resultsDiv.textContent = `Round tied`;
  } else if (
    (playerChoice == "Rock" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Rock")
  ) {
    computerScore = computerScore + 1;
    resultsDiv.textContent = `Round lost`;
  } else {
    playerScore = playerScore + 1;
    resultsDiv.textContent = `Round won`;
  }

  scoreDiv.textContent = `player: ${playerScore}\n computer: ${computerScore}`;
}

function checkScore() {
  if (computerScore == 5) {
    resultsDiv.textContent = "Computer Wins!";
    computerScore = 0;
    playerScore = 0;
  }
  if (playerScore == 5) {
    resultsDiv.textContent = "Player Wins!";
    computerScore = 0;
    playerScore = 0;
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  playRound(getComputerChoice(), "Rock");
  checkScore();
});
paperBtn.addEventListener("click", () => {
  playRound(getComputerChoice(), "Paper");
  checkScore();
});
scissorsBtn.addEventListener("click", () => {
  playRound(getComputerChoice(), "Scissors");
  checkScore();
});