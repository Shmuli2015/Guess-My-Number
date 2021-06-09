'use strict';

const message = document.querySelector('.message');
const scoreMessage = document.querySelector('.score');
const bodyStyle = document.querySelector('body').style; 
const number = document.querySelector('.number');
const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again');
const guess = document.querySelector('.guess');
const highscoreDisplay = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(changeMessage){
    message.textContent = changeMessage;
}
// choose a number
checkBtn.addEventListener('click', () =>{
    console.log(secretNumber);

    //when no input
    if(!guess.value){
        displayMessage('⛔️ No Number!');
    }
    //when player win's
    else if(guess.value == secretNumber){
        displayMessage('🎉 Currect Number');
        number.textContent = secretNumber;
        bodyStyle.backgroundColor = '#60b347';
        number.style.width = '30rem';

        if(score > highscore){
            highscore = score;
            highscoreDisplay.textContent = highscore;
        }
    }
    //when input high or low or lost game
    else{
        if(score > 1){
            displayMessage(guess.value > secretNumber ? '📈 Too high': '📉 To low');
            console.log();
            score--;
            scoreMessage.textContent = score;
        }
        else{
            displayMessage('💥 You lost the game!');
            scoreMessage.textContent = '0';
        }
    }
    
})

//paly again
againBtn.addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    scoreMessage.textContent = score;
    number.textContent = '?';
    guess.value = "";
    bodyStyle.backgroundColor = '#222';
    number.style.width = '15rem';
    displayMessage('Start guessing...');
})