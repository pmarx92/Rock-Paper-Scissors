const items = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 0;

function computerPlay() {
  return items[~~(Math.random() * items.length)];
}

function playerChoice(playerInput) {
  if (playerInput == 0) {
    return items[0];
  } else if (playerInput == 1) {
    return items[1];
  } else if (playerInput == 2) {
    return items[2];
  }
}

function playRound(playerInput) {

  let playerSelection = playerChoice(playerInput);
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    document.getElementById("gameStatus").innerHTML = "Game: " + "Tie!";
    round++;
  } else if (playerSelection === items[0] && computerSelection === items[2]) {
    playerScore++;
    round++;
    document.getElementById("gameStatus").innerHTML = "Game: " + "You Win! Rock beats Scissors.";
    document.getElementById("playerScore").textContent = playerScore;
  } else if (playerSelection === items[1] && computerSelection === items[0]) {
    playerScore++;
    round++;
    document.getElementById("gameStatus").innerHTML = "Game: " + "You Win! Paper beats Rock.";
    document.getElementById("playerScore").textContent = playerScore;
  } else if (playerSelection === items[2] && computerSelection === items[1]) {
    playerScore++;
    round++;
    document.getElementById("gameStatus").innerHTML = "Game: " + "You Win! Scissors beat Paper.";
    document.getElementById("playerScore").textContent = playerScore;
  } else {
    computerScore++;
    round++;
    document.getElementById("gameStatus").innerHTML = "Game: " + "You Lose!";
    document.getElementById("computerScore").textContent = computerScore;
  }
  document.getElementById("player").innerHTML = "Player: " + playerSelection;
  document.getElementById("computer").innerHTML = "Computer: " + computerSelection;
  document.getElementById("round").innerHTML = round;
}

function game() {
  if (playerScore == 5) {

    alert("You Won!");
  } else if (computerScore == 5) {
    alert("You Lost!");
  } else {

  }

}
