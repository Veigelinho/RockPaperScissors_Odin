var RPS = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;

function getComputerChoice () {
    let randomnum3 = Math.floor(Math.random()*3);
    return RPS[randomnum3];
    }

var playerSelection;
    
    const button = document.querySelectorAll("button");

    button.forEach(function(button) {
        button.addEventListener("click", e => {
        playerSelection = button.className;
        // console.log(playerSelection)
        playRound();
        })
    })
    


let bool = true

const divResult = document.createElement("div")
const divComputerSelection = document.createElement("div")
const divScore = document.createElement("div")
const divWinner = document.createElement('div');
const divRestartButton = document.createElement('button');
divRestartButton.innerText = "Try Again!";

function playRound () {
    if((playerScore < 5) && (computerScore < 5)) {    
        const computerSelection = getComputerChoice();
            divComputerSelection.innerText = `The computer chose ${computerSelection}!`;
            

            if (playerSelection == computerSelection) {
                divResult.innerText = "Draw! Go again!"
            }
            else if ((computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "rock")) {
                computerScore += 1;
                divResult.innerText = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beat${computerSelection == "scissors" ? "" : "s"} your ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}!`
            }
            else {
                playerScore += 1;
                divResult.innerText = `You win! Your ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beat${playerSelection == "scissors" ? "" : "s"} ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`
            }    
                divScore.innerText = `Current score: You ${playerScore} : ${computerScore} computer`;
    
        }
    if ((playerScore == 5) || (computerScore == 5)) {
        (playerScore>computerScore) ? (divWinner.innerText = "Congrats! You've won the game!") : (divWinner.innerText = "You lost! More luck next time!");
        document.body.append(divRestartButton)
    }
}

divRestartButton.addEventListener('click', () => {
    divRestartButton.remove();
    
});


document.body.append(divResult, divComputerSelection, divScore, divWinner)






// playerScore = 0;
// computerScore = 0;
//     for (let i = 0; i<5; i++) {
//         playRound();
//         bool ? playerScore += 1 : computerScore += 1;
//         score = playerScore + ":" + computerScore;
//         console.log(score);
//         console.log(computerScore);

//     }
// (playerScore>computerScore) ? console.log("Congrats! You've won the game!") : console.log("You lost! More luck next time!");



// console.log(button);