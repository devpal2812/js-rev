let randonNumber = Math.round(Math.random()*100 + 1);
console.log(randonNumber); 
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess){
if(isNaN(guess))
    {
        alert('Please enter a valid number')
    }
else if(guess <1 || guess > 100)
    {
        alert('Please enter a valid number')
    }
else
    {
        prevGuess.push(guess)
        if(numGuess===11)
            {
                displayGuess(guess);
                displayMessage(`Game over. Random number was: ${randonNumber}`);
                endGame();
            }
        else
        {
            displayGuess(guess)
            checkGuess(guess)


        }
    }
}

function checkGuess(guess){
    if(guess === randonNumber)
        {
            displayMessage(`You guessed the number.`)
            endGame();
        }
    else if(guess < randonNumber)
        {
            displayMessage(`Your number is lesser than the selected number.`)
        }
    else if(guess > randonNumber)
        {
            displayMessage(`Your number is greater than the selected number.`)
        }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}   `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e){
        randonNumber = Math.round(Math.random()*100 + 1);
        console.log(randonNumber);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
        lowOrHi.innerHTML = ''
    })
}

function endGame(){
userInput.value = '';
userInput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML = `<h2 id = "newGame">Start new game</h2>`
startOver.appendChild(p)
playGame = false;
newGame(); 
}
