let userPoints = 0;
let computerPoints = 0;
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const hands = document.querySelectorAll('.hands');
const userHand = document.getElementById('user-hand');
const computerHand = document.getElementById('computer-hand');
const actionText = document.getElementById('action-text');
const choices = document.querySelectorAll('[data-choice]')

function RandomChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertWord(choice){
    if(choice === 'rock') return 'Rock';
    if (choice === 'paper') return 'Paper';
    return 'Scissors';
}

function userPlays(userChoice){
    let computerChoice = RandomChoice();
    switch(userChoice+computerChoice){
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            userHand.src=`./assets/${userChoice}-hand.png`
            computerHand.src=`./assets/${computerChoice}-hand.png`
            userTie();
            break;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            userHand.src=`./assets/${userChoice}-hand.png`
            computerHand.src=`./assets/${computerChoice}-hand.png`
            userWin(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            userHand.src=`./assets/${userChoice}-hand.png`
            computerHand.src=`./assets/${computerChoice}-hand.png`
            userLose(userChoice, computerChoice);
            break;
    }
}

function userTie(){
    actionText.innerHTML = `It's a tie.`
}

function userWin(userChoice, computerChoice){
    userPoints++;
    this.updateScore();
    actionText.innerHTML = `${convertWord(userChoice)} Beats ${convertWord(computerChoice)}. You Win!`
}

function userLose(userChoice, computerChoice){
    computerPoints++;
    this.updateScore();
    actionText.innerHTML = `${convertWord(computerChoice)} Beats ${convertWord(userChoice)}. You Lose...`
}

function updateScore(){
    userScore.innerHTML = userPoints;
    computerScore.innerHTML = computerPoints;
}

choices.forEach(button =>{
    button.addEventListener('click', () => {
        hands.forEach(hand => {
            userHand.src=`./assets/rock-hand.png`;
            computerHand.src=`./assets/rock-hand.png`;
            hand.style.animation = 'shakeUser 1.75s ease';
            choices.forEach(button => {button.classList.add('no-click');})

            setTimeout(() => {
                hand.addEventListener('animationend', function (){
                    this.style.animation = '';
                })
                choices.forEach(button => {button.classList.remove('no-click');})
                userPlays(button.id);
            }, 1750)
        })
    })
})