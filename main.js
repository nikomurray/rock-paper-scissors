const options = ["✊", "✋", "✌️"];
let playerWins = 0;
let cpuWins = 0;
let weapons = document.querySelectorAll(".weapon");
 

// UI
let score = document.getElementById("score");
let scoreInfo = document.getElementById("scoreInfo");
let playerScore = document.getElementById("playerScore");
let cpuScore = document.getElementById("cpuScore");
let playerChoice = document.getElementById("playerChoice");
let cpuChoice = document.getElementById("cpuChoice");
let username = document.getElementById("username");
let signContainer = document.getElementById("signContainer");
let restartGameBtn = document.getElementById("restartGameBtn")

function getRandomChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function checkWinner(player, cpu) {
  if (player == cpu) {
    scoreInfo.textContent = "TIE!";
  } else if (
    (player == "✊" && cpu == "✌️") ||
    (player == "✋" && cpu == "✊") ||
    (player == "✌️" && cpu == "✋")
  ) {
    playerWins++;
    scoreInfo.textContent = `Player win ${player} beats ${cpu}`;
    score.innerHTML = `${playerWins} : ${cpuWins}`;
    playerScore.innerHTML = playerWins;
    cpuScore.innerHTML = cpuWins;
  } else {
    cpuWins++;
    scoreInfo.textContent = `CPU win ${cpu} beats ${player}`;
    score.innerHTML = `${playerWins} : ${cpuWins}`;
    playerScore.innerHTML = playerWins;
    cpuScore.innerHTML = cpuWins;
  }
}

function showSign() {
  signContainer.style.display = "block";
}

function blockButtons() {
  weapons.forEach((weapon) => {
    weapon.style.display = "none";
  });
}

function stopGame() {
  if (playerWins == 5 || cpuWins == 5) {
    showSign();
    blockButtons();
    document.querySelector(
      ".score-value"
    ).textContent = `${playerScore.textContent} : ${cpuScore.textContent}`;
  }
}

function restartGame() {
  signContainer.style.display = "none";
  cpuWins = 0;
  playerWins = 0;
  playerScore.innerHTML = "0";
  score.innerHTML = "0 : 0";
  scoreInfo.innerHTML = "First to score 5 wins!";
  weapons.forEach((weapon) => {
    weapon.style.display = "block";
  });
}

weapons.forEach((weapon) => {
  weapon.onclick = () => {
    playerChoice.textContent = weapon.textContent;
    cpuChoice.textContent = getRandomChoice();
    checkWinner(playerChoice.textContent, cpuChoice.textContent);
    if (playerWins == 5 || cpuWins == 5) {
      stopGame();
    }
    restartGameBtn.addEventListener("click",()=>{
      restartGame()
    })
  };
});
