let randomnumber = Math.floor(Math.random() * 100) +1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.nodeValue);
    if (userGuess === randomnumber) {
        lastResult.textContent = 'Congrats you got it!!!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver()

    }else if (guessCount === 10){
        lastResult.textContent = 'Game Over';
        setGameOver()
    
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomnumber) {
            lowOrHi.textContent = 'Too Low';
        } else {
            lowOrHi.textContent = 'Too High';
        }
    }
    
    guessCount ++;
    guessField.value = '';
    guessField.focus ();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disable = true;
    guessSubmit.disable = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame)
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p')
    for( let i = o; 1 < resetParas.length; i ++){
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disable = false;
    guessSubmit.disable = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomnumber = Math.floor(Math.random() * 100) + 1;
}