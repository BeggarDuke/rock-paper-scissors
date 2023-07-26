let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

function computerSelection() {
  let choice = Math.floor(Math.random() * 3);
  return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
}

function game() {
  computerChoice = computerSelection();
  if (playerChoice === computerChoice)
    result.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}.`;
  else {
    switch (playerChoice + " " + computerChoice) {
      case "rock scissors":
        result.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}.`;
        ++playerScore;
        break;

      case "rock paper":
        result.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}.`;
        ++computerScore;
        break;

      case "paper rock":
        result.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}.`;
        ++playerScore;
        break;

      case "paper scissors":
        result.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}.`;
        ++computerScore;
        break;

      case "scissors paper":
        result.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}.`;
        ++playerScore;
        break;

      case "scissors rock":
        result.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}.`;
        ++computerScore;
        break;
    }
    scoreboard.textContent = `Player score = ${playerScore} | Computer score = ${computerScore}`;
  }
  if (playerScore === 5) {
    scoreboard.textContent = `Player score = ${playerScore} | Computer score = ${computerScore}`;
    result.textContent = "You won!";
  } else if (computerScore === 5) {
    result.textContent = "You lose!";
    scoreboard.textContent = `Player score = ${playerScore} | Computer score = ${computerScore}`;
  }
}

const buttonRock = document.createElement("button");
const buttonScissors = document.createElement("button");
const buttonPaper = document.createElement("button");
const divForInput = document.createElement("div");
const divForOutput = document.createElement("div");
const body = document.querySelector("body");
const scoreboard = document.createElement("p");
const result = document.createElement("h2");

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";

divForInput.style.cssText =
  "margin:2% 20%; display: flex; justify-content: center;";
divForOutput.style.cssText = "margin:2% 20%;";

divForInput.appendChild(buttonRock);
divForInput.appendChild(buttonPaper);
divForInput.appendChild(buttonScissors);

divForOutput.appendChild(scoreboard);
divForOutput.appendChild(result);

body.appendChild(divForInput);
body.appendChild(divForOutput);

buttonPaper.setAttribute("id", "paper");
buttonRock.setAttribute("id", "rock");
buttonScissors.setAttribute("id", "scissors");

scoreboard.style.textAlign = "center";
result.style.textAlign = "center";
scoreboard.textContent = `Player score = ${playerScore} |  Computer score = ${computerScore}`;
result.textContent = "";

const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.style.cssText =
    "max-width: 100px; min-width: 80px; margin: 10px; padding: 10px; flex: 1 1 auto;";

  item.addEventListener("click", () => {
    if (playerScore >= 5 || computerScore >= 5) {
      playerScore = 0;
      computerScore = 0;
      scoreboard.textContent = `Player score = ${playerScore} | Computer score = ${computerScore}`;
    }
    playerChoice = item.id;
    game();
  });
});
