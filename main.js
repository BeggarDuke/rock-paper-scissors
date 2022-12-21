function computerSelection() {
    let choice = Math.floor(Math.random() * 3);
    return (choice === 0) ? "rock" :
    (choice === 1) ? "paper" :
    "scissors";
}

function playerSelection() { 
   for (let i = 0; i = 1;) {
        let choice = prompt("Please, enter \"rock\", \"paper\" or \"scissors\".");
        if (choice === null) {
        i = 0;
        }
        else { 
            choice = choice.toLowerCase();
            if (choice === "rock" || choice === "paper" || choice === "scissors") {
                return choice 
            } 
            else {
                alert("incorrect value");
                i = 0;
            }
        }
    }
}
let playerChoice = playerSelection();
let computerChoice = computerSelection();
let playerWin = 0;
let computerWin = 0;

function game(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        alert("Draw!");
    }

    else {
        switch (playerChoice + " " + computerChoice) {
            case "rock scissors":
                playerWin++;
                alert("You won! Rock beats scissors!");
                break;
            
            case "rock paper":
                computerWin++
                alert("You lose! Paper beats rock!");
                break;

            case "paper rock":
                playerWin++;
                alert("You won! Paper beats rock!");
                break;
            
            case "paper scissors":
                computerWin++;
                alert("You lose! Scissors beats paper!");
                break;  

            case "scissors paper":
                playerWin++;
                alert("You won! Scissors beats paper!");
                break;
            
            case "scissors rock":
                computerWin++;
                alert("You lose! Rock beats scissors!");
                break;
        }
    }
}
    
game(playerChoice, computerChoice);