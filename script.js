let userPoints = 0;
let computerPoints = 0;
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
// const userHand = document.getElementById('user-hand');
// const computerHand = document.getElementById('computer-hand');
const actionText = document.getElementById('action-text');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

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
            document.getElementById('user-hand').src=`./assets/${userChoice}-hand.png`
            userTie();
            break;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            userWin(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
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

rock.addEventListener('click', button => {
    userPlays('rock');
})

paper.addEventListener('click', button => {
    userPlays('paper');
})

scissors.addEventListener('click', button => {
    userPlays('scissors');
})
