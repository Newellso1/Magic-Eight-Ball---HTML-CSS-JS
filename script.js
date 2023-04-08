const shakeButton = document.getElementById('shakeBall');
const questionBox = document.getElementById('questionBox');
const result = document.getElementById('result');
const outerBall = document.querySelector('.outerBall');
const innerBall = document.querySelector('.innerBall');
const resetButton = document.getElementById('resetButton');
let ballAnswer = "";
let buttonPress = false;
const choices = ["It is certain",
    "Probably<br>not",
    "Without<br>a<br>doubt",
    "Most<br>Likely",
    "Yes",
    "No",
    "Very<br>doubtful",
    "My sources <br>say no",
    "Ask<br>again<br>later",
    "Don't count<br>on it",
    "For<br>certain",
    "Never",
    "Maybe",
    "Not on this<br>planet",
]


// Generate a random answer from the list of choices

function shakeAnswer() {
    ballAnswer = choices[Math.floor(Math.random()*choices.length)];
    result.innerHTML = ballAnswer;
}

// Function for shaking the ball

function ballShake() {
    outerBall.classList.add('shake');
    innerBall.classList.add('shake');
}

// Function for disabling the button

function disableButton() {
    document.getElementById('shakeBall').disabled = true;
    document.getElementById('questionBox').disabled = true;
}

// Function for enabling the button and question input

function enableButton () {
    document.getElementById('shakeBall').disabled = false;
    document.getElementById('questionBox').disabled = false;
    document.getElementById('questionBox').value = "";
}

// Functions for resetting the ball and question input

function ballReset() {
    outerBall.classList.remove('shake');
    innerBall.classList.remove('shake');
}

function answerReset () {
    result.innerHTML = "8";
}

// Adding the functions to the "Shake it" button

shakeButton.addEventListener('click', shakeAnswer,);
shakeButton.addEventListener('click', ballShake,);
shakeButton.addEventListener('click', disableButton);

// Adding functions to "Reset" button

resetButton.addEventListener('click', ballReset);
resetButton.addEventListener('click', answerReset);
resetButton.addEventListener('click', enableButton);