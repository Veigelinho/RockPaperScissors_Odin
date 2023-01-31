var RPS = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;

function getComputerChoice () {
    let randomnum3 = Math.floor(Math.random()*3);
    return RPS[randomnum3];
    }
const computerSelection = getComputerChoice();
console.log(computerSelection);

function getPlayerChoice () {
    return window.prompt(`${RPS[0].charAt(0).toUpperCase() + RPS[0].slice(1) + ", " + RPS[1] + " or " + RPS[2]}?`).toLowerCase();
}
const playerSelection = getPlayerChoice();
console.log(playerSelection);

let bool = true

function playRound () {
    getComputerChoice();
    getPlayerChoice();
    if (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
        return(`Please choose between ${RPS[0] + ", " + RPS[1] + " or " + RPS[2]}!`)
    }
    else if (playerSelection == computerSelection) {
        return("Draw! Go again!")
    }
    else if ((computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")) {
        bool = false;
        return(`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beat${computerSelection == "scissors" ? "" : "s"} your ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}!`)
    }
    else {
        bool = true;
        return(`You win! Your ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beat${playerSelection == "scissors" ? "" : "s"} ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`)
    }
}


function game () {
    playerScore = 0;
    computerScore = 0;
    var score;
    for (let i = 0; i<5; i++) {
        playRound();
        bool ? playerScore += 1 : computerScore += 1;
        score = playerScore + ":" + computerScore;
        console.log(score);
        console.log(computerScore);

    }
(playerScore>computerScore) ? console.log("Congrats! You've won the game!") : console.log("You lost! More luck next time!");
}
game();