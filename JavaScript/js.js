const items = ["Rock", "Paper", "Scissors"];
const winOrLose = document.querySelector('h1');
const btn = document.querySelector('button');
const restartBtn = document.getElementById('restart');
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const gameStatus = document.getElementById("gameStatus");

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
    gameStatus.innerHTML = "Game: " + "Tie!";
    round++;
  } else if (playerSelection === items[0] && computerSelection === items[2]) {
    playerScore++;
    round++;
    gameStatus.innerHTML = "Game: " + "You Win! Rock beats Scissors.";
    document.getElementById("playerScore").textContent = playerScore;
  } else if (playerSelection === items[1] && computerSelection === items[0]) {
    playerScore++;
    round++;
    gameStatus.innerHTML = "Game: " + "You Win! Paper beats Rock.";
    document.getElementById("playerScore").textContent = playerScore;
  } else if (playerSelection === items[2] && computerSelection === items[1]) {
    playerScore++;
    round++;
    gameStatus.innerHTML = "Game: " + "You Win! Scissors beat Paper.";
    document.getElementById("playerScore").textContent = playerScore;
  } else {
    computerScore++;
    round++;
    gameStatus.innerHTML = "Game: " + "You Lose!";
    document.getElementById("computerScore").textContent = computerScore;
  }
  document.getElementById("player").innerHTML = "Player: " + playerSelection;
  document.getElementById("computer").innerHTML = "Computer: " + computerSelection;
  document.getElementById("round").innerHTML = round;
}
function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}
function enableButtons() {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}
function restart() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  document.getElementById("playerScore").textContent = 0;
  document.getElementById("computerScore").textContent = 0;
  document.getElementById("round").innerHTML = 0;
  winOrLose.innerHTML = "Rock, Paper, Scissors";
  winOrLose.classList.remove("win");
  winOrLose.classList.remove("lose");
  enableButtons();
}

restartBtn.addEventListener('click', restart());

function game() {
  if (playerScore == 5) {
    winOrLose.innerHTML = "You Won!!"
    disableButtons()
    winOrLose.classList.add("win");
  } else if (computerScore == 5) {
    winOrLose.innerHTML = "Sad, you lost! :("
    disableButtons()
    winOrLose.classList.add("lose");

  }
}
