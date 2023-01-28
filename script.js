var computerSelection;
let playerSelection = window.prompt("Rock, Paper or Scissors?").toLowerCase();

function getComputerChoice () {
    var arrayrps = ["rock", "paper", "scissors"];
    let randomnum3 = Math.floor(Math.random()*3);
    computerSelection = arrayrps[randomnum3];
    return computerSelection;
    }
getComputerChoice();
console.log(computerSelection);


function winner () {
    if (playerSelection == computerSelection) {
        window.alert("Draw! Go again!")
    }
    else if ((computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")) {
        window.alert(`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beat${computerSelection == "scissors" ? "" : "s"} your ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}!`)
    }
    else {
        window.alert(`You win! Your ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beat${playerSelection == "scissors" ? "" : "s"} ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`)
    }
}
winner();

//winner prints out you win when anything but rok paper scissors is typed in
//need to fix that before continuing