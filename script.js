var timeEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionEl = document.getElementById("question-container");
var answerEl = document.getElementById("answerEl");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var finalCont = document.getElementById("finalContainer");
var startQuiz = document.getElementById("start");
var finalScore = document.getElementById("finalScore");
var inputBox = document.getElementById("inputBox");
var scoreButton = document.getElementById("scoreButton");

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

var lastQuestion = quizQuestions.length - 1;
let index = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
scoreButton.addEventListener("click", saveScore);
choiceA.addEventListener("click", (event) => checkAnswer(event));
choiceB.addEventListener("click", (event) => checkAnswer(event));
choiceC.addEventListener("click", (event) => checkAnswer(event));
choiceD.addEventListener("click", (event) => checkAnswer(event));

function saveScore() {
  var list = JSON.parse(localStorage.getItem("scores")) || [];

  var data = {
    name: inputBox.value,
    score: secondsLeft,
  };

  list.push(data);

  localStorage.setItem("scores", JSON.stringify(list));
}

function nextQuestion() {
  // console.log("go to next question!!!");

  if (index < lastQuestion) {
    index++;
    renderQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  console.log("End of Quiz");
  startQuiz.style.display = "none";
  finalCont.style.display = "block";
  finalScore.textContent = secondsLeft;
  clearInterval(timerInterval);
  timeEl.textContent = "Timer: " + secondsLeft + " seconds left";
}

var secondsLeft = 10;
var timerInterval;

function startGame() {
  console.log("Started");
  startButton.style.display = "none";
  nextButton.style.visibility = "visible";
  questionEl.style.visibility = "visible";
  answerEl.style.visibility = "visible";

  function countdown() {
    timerInterval = setInterval(function () {
      if (secondsLeft > 0) {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft + " seconds left";
      } else {
        endQuiz();
      }
    }, 1000);
  }

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
}

// checks wether the answer is correct or not.
function checkAnswer(event) {
  console.log("This is  the correct answer: ", quizQuestions[0].correct);
  console.log(event.target.textContent);
  let usersChoice = event.target.textContent;

  if (usersChoice === quizQuestions[0].correct) {
    console.log("CORRECT");
  } else {
    console.log("INCORRECT");
    wrongAnswer();
  }
}

function wrongAnswer() {
  secondsLeft -= 10;
}
