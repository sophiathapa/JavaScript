// let computerMove = '';     //global variable

const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// if (!score){
//   score = {
//     win : 0,
//     losses : 0,
//     tie : 0
//   };
// }

updateScoreElement();

function pickComputerMove() {
  randomNum = Math.random();
  let computerMove = "";
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  console.log(computerMove);
  return computerMove;
}

function playGame(playerMove) {
  let result = "";
  const computerMove = pickComputerMove();

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else {
      result = "You won.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You won.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You won.";
    } else {
      result = "Tie.";
    }
  }

  if (result === "You won.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  //    alert(
  //  `You picked ${playerMove}. Computer picked ${computerMove}. $ {result}
  // Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.ties}`
  //         );

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon" />  <img src="images/${computerMove}-emoji.png" class="move-icon" />Computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins :${score.wins} , Losses:${score.losses} , Ties: ${score.ties}`;
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector(".auto-play-button").innerHTML = "Stop Play";
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector(".auto-play-button").innerHTML = "Auto Play";
  }
}
