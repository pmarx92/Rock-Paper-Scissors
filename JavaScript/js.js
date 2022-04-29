const items = ["Rock", "Paper", "Scissors"];
const playerInput = parseInt(prompt("1 for Rock, 2 for Paper or 3 for Scissors?"));

function computerPlay() {
  return items[~~(Math.random() * items.length)];
}

function playerChoice() {

  if (playerInput === 1) {
    return items[0];
  } else if (playerInput === 2) {
    return items[1];
  } else if (playerInput === 3) {
    return items[2];
  }
}


function playRound() {
  let playerSelection = playerChoice();
  computerSelection = computerPlay();

  alert("The Player choose: " + playerSelection);
  alert("The computer choose: " + computerSelection);


  if (playerSelection === computerSelection) {
    alert("Tie!");
  } else if (playerSelection === items[0] && computerSelection === items[2]) {
    alert("You Win! Rock beats Scissors.");
  } else if (playerSelection === items[1] && computerSelection === items[0]) {
    alert("You Win! Paper beats Rock.");
  } else if (playerSelection === items[2] && computerSelection === items[1]) {
    alert("You Win! Scissors beat Paper.");
  } else {
    alert("You Lose!");
  }
  console.log("The Player choose: " + playerSelection);
  console.log("The computer choose: " + computerSelection);
}



/*
game();
function game() {
  for (let i = 1; i < 6; i++) {
    console.log(i);
    playRound();

  }
}
*/

// buttons is a node list. It looks and acts much like an array.
