function getComputerChoice() {
  let computerChoice = "";

  let i = Math.floor(Math.random() * 3);

  if (i === 0) {
    computerChoice = "rock";
  } else if (i === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("What's your choice? Rock, paper or scissors?");

  if (humanChoice === null) return null;

  return humanChoice.trim().toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(human, computer) {
    if (human === "rock" && computer === "paper") {
      computerScore++;
      console.log("You lose! Paper beats rock.");
    } else if (human === "rock" && computer === "scissors") {
      humanScore++;
      console.log("You win! Rock beats scissors.");
    } else if (human === "paper" && computer === "rock") {
      humanScore++;
      console.log("You win! Paper beats rock.");
    } else if (human === "paper" && computer === "scissors") {
      computerScore++;
      console.log("You lose! Scissors beat rock.");
    } else if (human === "scissors" && computer === "paper") {
      humanScore++;
      console.log("You win. Scissors beat paper.");
    } else if (human === "scissors" && computer === "rock") {
      computerScore++;
      console.log("You lose! Rock beats scissors.");
    } else {
      console.log(`Tie! Both players selected ${human}.`);
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`Final Score. Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
