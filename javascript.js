let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    if(rand === 0){
        return "rock";
    }else if(rand === 1){
        return "paper";
    }else{ 
        return "scissors";
    }
}

function getHumanChoice(){

}


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
    }else{
        if(humanChoice != computerChoice){
            computerScore++;
        }
    }

    document.querySelector("#PS").textContent = humanScore;
    document.querySelector("#CS").textContent = computerScore;
}


function handleClick(choice){
    const computerChoice = getComputerChoice();
    playRound(choice, computerChoice);

    playerIMG.src = `image/${choice}.jpeg`;
    computerIMG.src = `image/${computerChoice}.jpeg`;
    playerIMG.style.display = "block";
    computerIMG.style.display = "block";

    stop(humanScore, computerScore);
}


function stop() {
    if (humanScore === 5) {
        win.style.display = "block";
        lose.style.display = "none";
        resetGame();
    } 
    else if (computerScore === 5) {
        lose.style.display = "block";
        win.style.display = "none";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    play.style.display = "block";
    game.style.display = "none";

    document.querySelector("#PS").textContent = humanScore;
    document.querySelector("#CS").textContent = computerScore;
}





const play = document.querySelector("#play");
const game = document.querySelector("#game");

function start(){
    play.style.display = "none";
    game.style.display = "block";
}

play.addEventListener("click", start);

document.getElementById("rock").addEventListener("click", () => handleClick("rock"));
document.getElementById("paper").addEventListener("click", () => handleClick("paper"));
document.getElementById("scissors").addEventListener("click", () => handleClick("scissors"));
const playerIMG = document.getElementById("playerImage");
const computerIMG = document.getElementById("computerImage");

const win = document.querySelector("#win");
const lose = document.querySelector("#lose");

