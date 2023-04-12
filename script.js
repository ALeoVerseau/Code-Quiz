var timeEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var questionEl = document.getElementById("question-container")
var answerEl = document.getElementById("answerEl")

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

var nextButton = document.getElementById("next-btn");

let quizQuestions = [
    { 
        question: "What does LV stand for?",
        a: "Louis Vuitton",
        b: "Balenciaga",
        c: "Prada",
        d: "Miu Miu",
        correct: "Louis Vuitton",
    },    
    { 
        question: "What Brand is Italian?",
        a: "Christian Dior",
        b: "Saint Laurent",
        c: "Versace",
        d: "Chanel",
        correct: "Versace",
    },
    { 
        question: "Which is NOT a major fashion week?",
        a: "London",
        b: "Tokyo",
        c: "New York",
        d: "Milan",
        correct: "Tokyo",
    },
    { 
        question: "What brand created the 'Little Black Dress' ",
        a: "Louis Vuitton",
        b: "Burberry",
        c: "Prada",
        d: "Chanel",
        correct: "Chanel",
    },
    
];

var lastQuestion = quizQuestions.length -1;
let index = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);

    choiceA.addEventListener("click", (event) => checkAnswer(event))
    choiceB.addEventListener("click", (event) => checkAnswer(event))
    choiceC.addEventListener("click", (event) => checkAnswer(event))
    choiceD.addEventListener("click", (event) => checkAnswer(event))

function nextQuestion(){
console.log("go to next question!!!")
index++;
renderQuestion()
}

function startGame() {
    console.log("Started");
    startButton.style.display = "none";
    nextButton.style.visibility = "visible";
    questionEl.style.visibility = "visible";
    answerEl.style.visibility = "visible";

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
    renderQuestion();
    countdown();
}

function renderQuestion() {

    console.log(quizQuestions);
    // console.log(quizQuestions[0]);
    //console.log(quizQuestions[0].question);

    questionEl.textContent = quizQuestions[index].question;

    // console.log(quizQuestions[0].a);

    choiceA.textContent = quizQuestions[index].a;
    choiceB.textContent = quizQuestions[index].b;
    choiceC.textContent = quizQuestions[index].c;
    choiceD.textContent = quizQuestions[index].d;

    // let q = questionEl[quizQuestion];
    // console.log(q);

    // questionEl.innerHTML = "<p>" + q.quizQuestions + "</p>";
    // choiceA.innerHTML = q.a;
    // ChoiceB.innerHTML = q.b; 
    // ChoiceC.innerHTML = q.c;
    // ChoiceD.innerHTML = q.d;
    
};

// checks wether the answer is correct or not.
function checkAnswer(event){

    console.log("This is  the correct answer: ",quizQuestions[0].correct);
    console.log(event.target.textContent)
    let usersChoice = event.target.textContent;

    if(usersChoice === quizQuestions[0].correct){
        console.log("CORRECT")
    }else{
        console.log("INCORRECT")
        wrongAnswer();
    }

}

function wrongAnswer() {
    secondsLeft --;
}
