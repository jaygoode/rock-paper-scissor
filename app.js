const choices = document.querySelectorAll("button");
let choiceArray = ['rock', 'paper', 'scissors'];
let result = '';
let userChoice;
let computerChoice;

choices.forEach(choice => choice.addEventListener('click', e => {
    computerChoice = choiceArray[Math.floor(Math.random() * 3)];
    userChoice = e.target.id
    game(userChoice,computerChoice)
    console.log(result);
}));

function game (userChoice, computerChoice) {
    console.log(userChoice);
    console.log(computerChoice);
    if((userChoice == 'rock' && computerChoice == 'scissors') || (userChoice == 'paper' && computerChoice == 'rock') || (userChoice == 'scissors' && computerChoice == 'paper')) {
        result = "you WIN this round!"
    }
    if((userChoice == 'scissors' && computerChoice == 'rock')|| (userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice === 'scissors')) {
        result = "you LOSE this round!"
    }
    else if (userChoice == computerChoice){
        result = "this round is a TIE!"
    }
}