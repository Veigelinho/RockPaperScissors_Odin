var RPS = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;
var playerSelection;

function getComputerChoice () {
    let randomnum3 = Math.floor(Math.random()*3);
    return RPS[randomnum3];
    }


    
const button = document.querySelectorAll("button");

    button.forEach(function(button) {
        button.addEventListener("click", () => {
        playerSelection = button.className;
        playRound();
        })
    })
    
const body = document.body;
const divGameTextGroup = document.createElement("div");
divGameTextGroup.setAttribute("class", "gametext")

body.append(divGameTextGroup)
// const divGameTextGroup2 = document.divGameTextGroup


const divResult = document.createElement("div");
const divComputerSelection = document.createElement("div");
const divScore = document.createElement("div");
const divWinner = document.createElement("div");
console.log(document.querySelector("divResult"))


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
        body.append(divRestartButton)
    }
}


const divRestartButton = document.createElement('button');
divRestartButton.innerText = "Try Again!";

const restartGame = divRestartButton.addEventListener('click', () => {
    divRestartButton.remove();
    divComputerSelection.innerText = "";
    divScore.innerText = "";
    divWinner.innerText = "";
    divResult.innerText = "";
    playerScore = 0;
    computerScore = 0;
});


divGameTextGroup.appendChild(divResult);
divGameTextGroup.appendChild(divComputerSelection);
divGameTextGroup.appendChild(divScore);
divGameTextGroup.appendChild(divWinner);
