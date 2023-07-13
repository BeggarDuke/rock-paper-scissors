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
    let choice;
    do {
        choice = prompt("Please, enter \"rock\", \"paper\" or \"scissors\".");
        choice = choice.toLowerCase();

    }
    while (choice === null || (choice !== "rock" && choice !== "paper" && choice !== "scissors"));
    return choice;
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

function gameStart() {
    let gameMode;
    do {
        gameMode = prompt("Type \"1\" to play just 1 game, type \"5\" to play 5 games in a row");
        gameMode === "5" ? game5() :
        gameMode === "1" ? game() :
        gameMode === null ? alert("Reload page if you will want to play again") :
        alert("You need to choose game mode");
    }
    while (gameMode !== null);



}
gameStart();