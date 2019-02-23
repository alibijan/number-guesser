/*
GAME FUNCTION:
- Player must guess a number between min-num and max-num
- Player gets a certain # of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lost
- Let player choose to play again
*/


// VARS
let randomNumber;
let guesses;
let count = 0;
let min = 1;
let max = 10;

const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num'); 
const message = document.querySelector('.message');

const guessInput = document.getElementById('guess-input');
const submit = document.getElementById('guess-btn');


// set min and max values
minNum.innerHTML = min;
maxNum.innerHTML = max;


// event handler
submit.addEventListener('click', submitFunction);


// submit number function
function submitFunction() {
    // keep track of how many times a user clicks the submit button
    count += 1;

    if( guessInput.value === '' ) {
        guessInput.value = '0';
    }

    // set fail messages
    if( count == 1 ) {
        guesses = `${guessInput.value} is not correct, 2 guesses left`;
    } else if ( count == 2 ) {
        guesses = `${guessInput.value} is not correct, 1 guess left`;
    } else if ( count == 3 ) {
        guesses = `Game Over! You lost! The correct number was ${randomNumber}`;
        // set end-of-round edits
        // todo: make this a function
        submit.setAttribute('value', 'Play again');
        guessInput.setAttribute('disabled', '');
    }

    if( count <= 3 ) {
        if( guessInput.value == randomNumber ) {
            // CONGRATS!
            message.innerHTML = `${guessInput.value} is correct, YOU WIN!`;

            // set win colors
            message.style.color = 'green';
            guessInput.style.borderColor = 'green';

            // set end-of-round edits
            // todo: make this a function
            submit.setAttribute('value', 'Play again');
            guessInput.setAttribute('disabled', '');

            // reset count
            count = 4;
        } else {
            // set fail colors
            message.style.color = 'red';
            guessInput.style.borderColor = 'red';
            // set fail message
            message.innerHTML = guesses;
        }   
    } else {
        reset();
    }

    // reset input value each time you press the submit button
    guessInput.value = '';
    // todo: focus on guessInput after submit click (and page load probably)
}

function randomNumberFunction() {
    randomNumber = Math.floor(Math.random() * max) + 1;
    return randomNumber;
}

function reset() {
    // reset everything back to the beginning
    count = 0;

    submit.setAttribute('value', 'Submit');
    guessInput.removeAttribute('disabled');

    message.innerHTML = '';
    message.style.color = '#bbb';
    guessInput.style.borderColor = '#bbb';

    randomNumberFunction();
    console.log(randomNumberFunction());
}


// console.log(minNum);
// console.log(maxNum);
// console.log(guessInput);
// console.log(submit);
// console.log(randomNumber);
