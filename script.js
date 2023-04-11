var timeEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var questionEl = document.getElementById("question-container")
var answerContainer = document.getElementById("answerEl")
var ChoiceA = document.getElementById("A");
var ChoiceB = document.getElementById("B");
var ChoiceC = document.getElementById("C");
var ChoiceD = document.getElementById("D");
var nextButton = document.getElementById("next-btn");

let quizQuestions = [
    { 
        question: "What does LV stand for?",
        a: "Louis Vuitton",
        b: "Balenciaga",
        c: "Prada",
        d: "Miu Miu",
        correct: "a",
    },    
    { 
        question: "What Brand is Italian?",
        a: "Christian Dior",
        b: "Saint Laurent",
        c: "Versace",
        d: "Chanel",
        correct: "c",
    },
    { 
        question: "Which is NOT a major fashion week?",
        a: "London",
        b: "Tokyo",
        c: "New York",
        d: "Milan",
        correct: "b",
    },
    { 
        question: "What brand created the 'Little Black Dress' ",
        a: "Louis Vuitton",
        b: "Burberry",
        c: "Prada",
        d: "Chanel",
        correct: "d",
    },
    
];

var lastQuestion = quizQuestions.length -1;
let runningQuestion = 0;

function renderQuestion() {
    let q = questionEl[runningQuestion];

    questionEl.innerHTML = "<p>" + q.quizQuestions + "</p>";
    choiceA.innerHTML = q.a;
    ChoiceB.innerHTML = q.b; 
    ChoiceC.innerHTML = q.c;
    ChoiceD.innerHTML = q.d;
    
    renderQuestion();
};

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("Started");
    startButton.style.display = "none";
    nextButton.style.visibility = "visible";
    questionEl.style.visibility = "visible";
    answerContainer.style.visibility = "visible";

    var secondsLeft = 60;

    function countdown() {
     var timerInterval = setInterval(function() {
        if(secondsLeft > 0) {
        secondsLeft--;
        timeEl.textContent = "Timer: " +secondsLeft+ " seconds left";

        } else { 
            clearInterval(timerInterval);
        }
    }, 1000);
    };

    countdown();
}

function wrongAnswer() {
    secondsLeft --;
}

function checkAnswer(answer) {
    if(answer == quizQuestions[runningQuestion].correct) {'';

    } else {
        wrongAnswer();
    }
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }    
}