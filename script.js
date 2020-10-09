// define all the elements
var startBtn = document.getElementById("startBtn");
var question = document.getElementById("question");
var button1 = document.getElementById("ans1");
var button2 = document.getElementById("ans2");
var button3 = document.getElementById("ans3");
var button4 = document.getElementById("ans4");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("time-gauge");
var scoreDiv = document.getElementById("score-container");
var introDiv = document.getElementById("intro-div");
var questionCard = document.getElementById("question-card");
var score = 0
var count = 59



// Here are the questions for the quiz in the form of an array
let questions = [{
    q: "Who is making the Web Standards?",
    choice1: "Mozilla",
    choice2: "Microsoft",
    choice3: "Apple",
    choice4: "World Wide Web Consortium",
    correct: "4",
}, {
    q: "What does HTML stand for?",
    choice1: "Hyper Text Markup Language",
    choice2: "Hyperlinks and Text Markup Language",
    choice3: "Home Tool Markup Language",
    choice4: "How The Monsters Learn",
    correct: "1",
}, {
    q: "Who is making the Web Standards?",
    choice1: "Mozilla",
    choice2: "Microsoft",
    choice3: "Apple",
    choice4: "World Wide Web Consortium",
    correct: "4",
}, {
    q: "What does CSS stand for?",
    choice1: "Colorful Style Sheets",
    choice2: "Cascading Style Sheets",
    choice3: "Creative Style Sheets",
    choice4: "Computer Style Sheets",
    correct: "2",
}, {
    q: "What is the correct HTML for referring to an external style sheet?",
    choice1: "<stylesheet>mystyle.css</stylesheet>",
    choice2: '<style src="mystyle.css">',
    choice3: '<link rel="stylesheet" type-"text/css" href="mystyle.css"',
    choice4: 'See "mystylesheet.css"',
    correct: "3",
}, {
    q: "Where in an HTML document is the correct place to refer to an external style sheet?",
    choice1: "If they are in the same folder, you don't need to link it",
    choice2: "At the end of the document",
    choice3: "In the <head> section",
    choice4: "In the <body> section",
    correct: "3",
}]

// Variables for indexing the questions submit button increments questionIndex + 1
let qIndex = questions.length - 1;
let runningQuestionIndex = 0;






// Start the timer on the screen when the start button is pressed
startBtn.addEventListener("click", function () {
    timer = setInterval(function () {
        timeGauge.innerHTML = "Time: " + count--;
        if (count == 1) clearInterval(timer);
    }, 1000);
    introDiv.style.display = "none";
    questionCard.style.display = "block";
    timeGauge.style.display = "block";
})

// Start button triggers the populating of questions
startBtn.onclick = function () {
    question.textContent = questions[qIndex].q;
    button1.textContent = questions[qIndex].choice1;
    button2.textContent = questions[qIndex].choice2;
    button3.textContent = questions[qIndex].choice3;
    button4.textContent = questions[qIndex].choice4;
}









// When they get the question right, advance to the next question add 10 points
// function correctAnswer() {

// }


// When they get the question wrong, count = count - 5 subtract 5 seconds, advance to the next question
// function wrongAnswer() {

// }


// Once all of the questions are answered, take to the score-container
// function answersComplete() {

// }


// When they enter their initials, populate to the local to keep their score throughout the next games
// function submitInitials() {

// }


// Button to start the game again