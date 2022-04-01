let playerSelection = "";
let computerSelection = compRandChoice();
let playerScore = 0
let computerScore = 0

/*****HTML ELEMENT SELECTORS******/
const chooseRock = document.querySelector('.rock');
const choosePaper = document.querySelector('.paper');
const chooseScissors = document.querySelector('.scissors');
const chooseRestart = document.querySelector('.restart');
const chooseScore = document.querySelector('.score');

let chooseRock.addEventListener('click', (playerSelection) => {playerSelection == 'rock'});
let choosePaper.addEventListener('click', (playerSelection) => {playerSelection == 'paper'});
chooseScissors.addEventListener('click', (playerSelection) => {playerSelection == 'scissors'});
chooseRock.addEventListener('click', () => {
    playerSelection="";
    computerSelection="";
    playerScore = 0;
    computerScore = 0;
});


//*****COMPUTER RANDOM CHOICE GENERATOR ******/
function compRandChoice() {
    let computerNum = Math.floor(Math.random()* 3);
    let computerSelection = "";
    switch (computerNum) {
        case 0: 
        return computerSelection = "rock";
        case 1: 
        return computerSelection = "paper";
        case 2: 
        return computerSelection = "scissors";
    }
};


function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") || 
        (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")
        ){
            playerscore = ++playerScore
            return "you win!"
        }
        else if (
            (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") ||
            (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") || 
            (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors")
            ){
               computerscore = ++computerScore
                return "you lose!"
            } else {
                return "tie!"
            }
        }
        

    /*************LOOP GAME UNTIL GAME WINNER***************/
        function game() {
            for(let i=0; i<6; i++);
            playRound(playerSelection, computerSelection);
            if(playerScore==5){
                return `WINNER! ${playerScore}`
            } else if(computerScore ==5){
                return `LOSER! ${playerScore}`
    }
    
};
console.log(playRound(playerSelection, computerSelection));
console.log(game());

console.log(playerScore);
console.log(computerScore);
