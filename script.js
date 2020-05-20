class Game {
    constructor(userPoints, computerPoints, userScore, computerScore, actionText){
        this.userPoints = userPoints;
        this.computerPoints = computerPoints;
        this.userScore = userScore;
        this.computerScore = computerScore;
        this.actionText = actionText;
        this.clear();
    }

    clear(){
        userPoints = 0;
        computerPoints = 0;
        // this.userScore.innerText = 0;
        // this.computerScore.innerText = 0;
        // this.actionText.innerText = 0;
    }

    RandomChoice(){
        let choices = ['rock', 'paper', 'scissors'];
        let randomNumber = Math.floor(Math.random()*3);
        return choices[randomNumber];
    }

    userPlays(userChoice){
        let computerChoice = this.RandomChoice();
        switch(userChoice+computerChoice){
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                // this.userTie();
                break;
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
                // this.userWin();
                // updateScore(user)
                userPoints++;
                console.log(userPoints);
                this.updateScore();
                break;
            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock':
                // this.userLose();
                break;
        }
    }

    // userTie(){
    //     console.log('its a tie');
    // }

    // userWin(){
    //     console.log('its a win');
    // }

    // userLose(){
    //     console.log('its a lose');
    // }

    updateScore(){
        this.userScore.innerHTML = userPoints.toString();
        this.computerScore.innerHTML = computerPoints.toString();
    }
}

let userPoints = 0;
let computerPoints = 0;
const userScore = document.querySelector('user-score');
const computerScore = document.querySelector('computer-score');
// const scoreBoard = document.querySelector('.score-board');
const actionText = document.getElementById('action-text');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const game = new Game(userScore, computerScore);

rock.addEventListener('click', button => {
    game.userPlays('rock');
})

paper.addEventListener('click', button => {
    game.userPlays('paper');
})

scissors.addEventListener('click', button => {
    game.userPlays('scissors');
})
