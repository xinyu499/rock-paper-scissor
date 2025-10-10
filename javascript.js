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
    let choice = prompt("Pick rock, paper, or scissors");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice === computerChoice){
        console.log(`It's a Tie! both picked ${humanChoice}`);
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
}

function playGame(){

    for(let i = 0; i < 5; i++){
        let cc = getComputerChoice();
        let hc = getHumanChoice();
        playRound(hc, cc);
    }
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if(humanScore > computerScore){
        console.log("You Win");
    }else if(computerScore > humanScore){
        console.log("You Lose");
    }else{
        console.log("Tied Game!");
    }
    humanScore = 0;
    computerScore = 0;
}

playGame();

