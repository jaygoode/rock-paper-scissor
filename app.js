const choices = document.querySelectorAll("button");
const resultDisplay = document.querySelector('#result');
const scoreDisplay = document.querySelector('#score');
const restartButton = document.querySelector('#restart');

let choiceArray = ['rock', 'paper', 'scissors'];
let result = '';
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

choices.forEach(choice => choice.addEventListener('click', e => {
    computerChoice = choiceArray[Math.floor(Math.random() * 3)];
    
    userChoice = e.target.id
    game(userChoice,computerChoice)
    restart()
    resultDisplay.innerHTML = result
    scoreDisplay.innerHTML = `user: ${userScore} computer: ${computerScore}`
    console.log(computerScore)
}));


function game (userChoice, computerChoice) {
    console.log(userChoice);
    console.log(computerChoice);
    if((userChoice == 'rock' && computerChoice == 'scissors') || (userChoice == 'paper' && computerChoice == 'rock') || (userChoice == 'scissors' && computerChoice == 'paper')) {
        result = "you WIN this round!"
        userScore++
    }
    if((userChoice == 'scissors' && computerChoice == 'rock')|| (userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice === 'scissors')) {
        result = "you LOSE this round!"
        computerScore++
    }
    else if (userChoice == computerChoice){
        result = "this round is a TIE!"
    }
}


function restart() {
if(userChoice == 'restart') { 
    result="RESULT:"
    userChoice=""
    computerChoice=""
    userScore=0;
    computerScore=0;
}
}