let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

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

function game() {
    selectChoices();
    if (playerChoice === computerChoice) {
        alert("Draw!");
    }

    else {
        switch (playerChoice + " " + computerChoice) {
            case "rock scissors":
                ++playerScore;
                alert("You won! Rock beats scissors!");
                break;
            
            case "rock paper":
                ++computerScore;
                alert("You lose! Paper beats rock!");
                break;

            case "paper rock":
                ++playerScore;
                alert("You won! Paper beats rock!");
                break;
            
            case "paper scissors":
                ++computerScore;
                alert("You lose! Scissors beats paper!");
                break;  

            case "scissors paper":
                ++playerScore;
                alert("You won! Scissors beats paper!");
                break;
            
            case "scissors rock":
                ++computerScore;
                alert("You lose! Rock beats scissors!");
                break;
        }
    }
}

function selectChoices () {
    playerChoice = playerSelection();
    computerChoice = computerSelection();
}

function game5 () {
    for (i = 0; i < 5; i++) {
        game();
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`)
    }
    if (playerScore === computerScore) {
        alert(`
        Draw! 
        Player score: ${playerScore} 
        Computer score: ${computerScore}
        `)
    }
    else if (playerScore > computerScore) {
        alert(`
        You won! 
        Player score: ${playerScore} 
        Computer score: ${computerScore}
        `)
    }
    else {
        alert(`
        You lose! 
        Player score: ${playerScore}
        Computer score: ${computerScore}
        `)
    }
}

let gameMode = prompt("Type \"1\" to play just 1 game, type \"5\" to play 5 games in a row");
gameMode === "5" ? game5() :
gameMode === "1" ? game() :
alert("You need to choose gamemode");