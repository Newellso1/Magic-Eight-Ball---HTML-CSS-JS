const shakeButton = document.getElementById('shakeBall');
const result = document.getElementById('result');
const outerBall = document.querySelector('.outerBall');
const innerBall = document.querySelector('.innerBall');
let ballAnswer = ""
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

// Function for Shaking the ball

function ballShake() {
    outerBall.classList.add('shake');
    innerBall.classList.add('shake');
    
}

shakeButton.addEventListener('click', shakeAnswer,);
shakeButton.addEventListener('click', ballShake,);
