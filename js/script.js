/* REFERENCJE DO HTML-A */

const paperBtn = document.querySelector("#paperBtn");
const rockBtn = document.querySelector("#rockBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

const win = document.querySelector("#win");
const score = document.querySelector("#score");

/* NASŁUCHIWACZE */

paperBtn.addEventListener("click", function() {
  determinePlayerMove("papier");
});

rockBtn.addEventListener("click", function() {
  determinePlayerMove("kamień");
});

scissorsBtn.addEventListener("click", function() {
  determinePlayerMove("nożyczki");
});

/* ZMIENNE GLOBALNE */

let playerScore = 0;
let playerChoice;
let computerScore = 0;
let computerChoice;

//ruch komputera
function computerMove() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "papier";
  else if (randomNumber === 1) return "nożyczki";
  else return "kamień";
}

//ruch gracza
function determinePlayerMove(playerMove){
  computerChoice = computerMove();
  playerChoice = playerMove;
  checkWinner();
  score.innerHTML = playerScore + ":" + computerScore;
}

//wynik gry
function checkWinner() {
  if (
    (playerChoice === "kamień" && computerChoice === "nożyczki") ||
    (playerChoice === "papier" && computerChoice === "kamień") ||
    (playerChoice === "nożyczki" && computerChoice === "papier")
  ) {
    win.innerHTML = "Wygrał gracz";
    playerScore++;
  } else if (playerChoice === computerChoice) {
    win.innerHTML = "Remis";
  } else {
    win.innerHTML = "Wygrał komputer";
    computerScore++;
  }
}
