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

// playerChoice = playerSelection();
// computerChoice = computerSelection();

function game(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        console.log(playerChoice, computerChoice);
        alert("Draw!");
    }
    else if (playerChoice === "rock") {
        console.log(playerChoice, computerChoice);
        computerChoice === "scissors" ? 
            alert("You are won! Rock beats scissors!") :
            alert("You are loose! Paper beats rock!");
    }
    else if (playerChoice === "paper") {
        console.log(playerChoice, computerChoice);
        computerChoice === "rock" ? 
            alert("You are won! Paper beats rock!") :
            alert("You are loose! Scissors beats paper!");
    }
    else {
        console.log(playerChoice, computerChoice);
        computerChoice === "paper" ? 
            alert("You are won! Scissors beats paper!") :
            alert("You are loose! Rock beats paper!");
    }
}

game(playerSelection(), computerSelection());