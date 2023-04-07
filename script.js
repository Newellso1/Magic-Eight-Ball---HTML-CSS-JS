const shakeButton = document.getElementById('shakeBall');
const result = document.getElementById('result');
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
]
let ballAnswer = ""

function shakeAnswer() {
    ballAnswer = choices[Math.floor(Math.random()*choices.length)];
    result.innerHTML = ballAnswer;
}

shakeButton.addEventListener('click', shakeAnswer);

