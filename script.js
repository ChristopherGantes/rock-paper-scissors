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

// probability testing
/* 
let choices = [];
for (let i = 0; i < 30000; i++) {
    choices.push(getComputerChoice());
}

choices.sort();

for (let i = 0; i < choices.length; i++) {
    console.log(choices[i]);
}
*/

function getPlayerChoice() {
  let choice = prompt("Choose!: Rock, Paper, or Scissors");
  choice = choice.trim();
  choice = choice.toLowerCase();
  choice = choice.slice(0, 1).toUpperCase() + choice.slice(1);
  return choice;
}
