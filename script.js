function getComputerChoice () {
    var arrayrps = ["rock", "paper", "scissors"];
    let randomnum3 = Math.floor(Math.random()*3);
    return arrayrps[randomnum3];
    }
    console.log(getComputerChoice());
    