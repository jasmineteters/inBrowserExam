// define all the elements
var startBtn = document.getElementById("startBtn");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var button1 = document.getElementById("ans1");
var button2 = document.getElementById("ans2");
var button3 = document.getElementById("ans3");
var button4 = document.getElementById("ans4");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("time-gauge");
var scoreDiv = document.getElementById("high-score-container");
var score = 0
var count = 60



// Here are the questions for the quiz in the form of an array
let questions = [{
    questions: "Who is making the Web Standards?",
    choice1: "Mozilla",
    choice2: "Microsoft",
    choice3: "Apple",
    choice4: "World Wide Web Consortium",
    correct: "4",
}, {
    questions: "What does HTML stand for?",
    choice1: "Hyper Text Markup Language",
    choice2: "Hyperlinks and Text Markup Language",
    choice3: "Home Tool Markup Language",
    choice4: "How The Monsters Learn",
    correct: "1",
}, {
    questions: "Who is making the Web Standards?",
    choice1: "Mozilla",
    choice2: "Microsoft",
    choice3: "Apple",
    choice4: "World Wide Web Consortium",
    correct: "4",
}, {
    questions: "What does CSS stand for?",
    choice1: "Colorful Style Sheets",
    choice2: "Cascading Style Sheets",
    choice3: "Creative Style Sheets",
    choice4: "Computer Style Sheets",
    correct: "2",
}, {
    questions: "What is the correct HTML for referring to an external style sheet?",
    choice1: "<stylesheet>mystyle.css</stylesheet>",
    choice2: '<style src="mystyle.css">',
    choice3: '<link rel="stylesheet" type-"text/css" href="mystyle.css"',
    choice4: 'See "mystylesheet.css"',
    correct: "3",
}, {
    questions: "Where in an HTML document is the correct place to refer to an external style sheet?",
    choice1: "If they are in the same folder, you don't need to link it",
    choice2: "At the end of the document",
    choice3: "In the <head> section",
    choice4: "In the <body> section",
    correct: "3",
}]

// Variables for indexing the questions 
// let lastQuestionIndex = questions.length - 1;
// let runningQuestionIndex = 0;

// Start the timer on the screen when the start button is pressed
// function startTimer()

// Start button triggers the populating of questions
// function startGame() {



// Start button event listener
startBtn.addEventListener("click", function () {
    timer = setInterval(function () {
        timeGauge.innerHTML = "Time: " + count--;
        if (count == 1) clearInterval(timer);
    }, 1000);
})









// When they get the question right, advance to the next question



// When they get the question wrong, subtract 5 seconds, advance to the next question



// Once all of the questions are answered, take to the score-container



// When they enter their initials, populate to the local to keep their score throughout the next games



// Button to start the game again