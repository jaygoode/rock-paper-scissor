const choices = document.querySelectorAll("button");
let choiceArray = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice = choiceArray[Math.floor(Math.random() * 3)];
// console.log(computerChoice);

choices.forEach(choice => choice.addEventListener('click', e => {
    userChoice = e.target.id
    // console.log(userChoice);
}))

