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
var submitInitialBtn = document.getElementById("submit-initials");
var nums = document.getElementById("nums");
var uInit = document.getElementById("user-initials");
var userInitScore = document.getElementById("new-score");
var userInfo = localStorage.getItem("data");
var userHighScore = localStorage.getItem("score");
var highScoresPage = document.getElementById("highscores-page");
var initialSubmitForm = document.getElementById("submitted-initials");


var score = 0
var count = 59
var users = []



// var newUser = {
//     initialSubmitForm,
//     count
// };

// Here are the questions for the quiz in the form of an array
let questions = [{
    q: "Who is making the Web Standards?",
    choice1: "Mozilla",
    choice2: "Microsoft",
    choice3: "Apple",
    choice4: "World Wide Web Consortium",
    correct: "World Wide Web Consortium",
}, {
    q: "What does HTML stand for?",
    choice1: "Hyper Text Markup Language",
    choice2: "Hyperlinks and Text Markup Language",
    choice3: "Home Tool Markup Language",
    choice4: "How The Monsters Learn",
    correct: "Hyper Text Markup Language",
}, {
    q: "Who is making the Web Standards?",
    choice1: "Mozilla",
    choice2: "Microsoft",
    choice3: "Apple",
    choice4: "World Wide Web Consortium",
    correct: "World Wide Web Consortium",
}, {
    q: "What does CSS stand for?",
    choice1: "Colorful Style Sheets",
    choice2: "Cascading Style Sheets",
    choice3: "Creative Style Sheets",
    choice4: "Computer Style Sheets",
    correct: "Cascading Style Sheets",
}, {
    q: "What is the correct HTML for referring to an external style sheet?",
    choice1: "<stylesheet>mystyle.css</stylesheet>",
    choice2: '<style src="mystyle.css">',
    choice3: '<link rel="stylesheet" type-"text/css" href="mystyle.css"',
    choice4: 'See "mystylesheet.css"',
    correct: '<link rel="stylesheet" type-"text/css" href="mystyle.css"',
}, {
    q: "Where in an HTML document is the correct place to refer to an external style sheet?",
    choice1: "If they are in the same folder, you don't need to link it",
    choice2: "At the end of the document",
    choice3: "In the <head> section",
    choice4: "In the <body> section",
    correct: "In the <head> section",
}]

// Variables for indexing the questions submit button increments questionIndex + 1
let qIndex = 0;







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

// Once all of the questions are answered, take to the score-container
function answersComplete() {
    scoreDiv.style.display = "block";
    questionCard.style.display = "none";
}

// adding the next quesiton in the array object
function nextQuestion() {

    question.textContent = questions[qIndex].q;
    button1.textContent = questions[qIndex].choice1;
    button2.textContent = questions[qIndex].choice2;
    button3.textContent = questions[qIndex].choice3;
    button4.textContent = questions[qIndex].choice4;
}

// When they get the question right, advance to the next question When they get the question wrong, count = count - 5 subtract 5 seconds, advance to the next question
function correctAnswer(userInput) {
    if (userInput === questions[qIndex].correct) {
        console.log(userInput);
        console.log(questions[qIndex].correct);
    } else {
        count = count - 5;
        console.log(userInput);
        console.log(questions[qIndex].correct);
    }
    qIndex++
    nextQuestion();
}

// Start button triggers the populating of questions
startBtn.addEventListener("click", nextQuestion)


// All buttons for answers
button1.addEventListener("click", function () {


    if (qIndex == 5) {
        answersComplete();
    } else {
        // console.log(this.textContent);
        correctAnswer(this.textContent);

    }

})

button2.addEventListener("click", function () {


    if (qIndex == 5) {
        answersComplete();
    } else {
        // console.log(this.textContent);
        correctAnswer(this.textContent);

    }

})

button3.addEventListener("click", function () {


    if (qIndex == 5) {
        answersComplete();
    } else {
        // console.log(this.textContent);
        correctAnswer(this.textContent);

    }

})

button4.addEventListener("click", function () {


    if (qIndex == 5) {
        answersComplete();
    } else {
        // console.log(this.textContent);
        correctAnswer(this.textContent);

    }

})









//Function to save the users initials and add them to local storage


function showInitials() {
    console.log(users);
    JSON.parse(localStorage.getItem("users"));
    var node = document.createElement("div");
    // var textNode = document.textContent = (userInitScore);
    node.textContent = "hi"
    // node.appendChild(textNode);
    // document.getElementById("highscores-page").appendChild(node);

}

function saveInitials(event) {
    event.preventDefault();
    localStorage.setItem("initials", initialSubmitForm.value);
    localStorage.setItem("score", count);
    scoreDiv.style.display = "none";
    highScoresPage.style.display = "block";
    users.push(initialSubmitForm.value, count)
    localStorage.setItem("users", JSON.stringify(users));
    showInitials();
}



submitInitialBtn.addEventListener("click", saveInitials);






function submitInitial() {

    localStorage.getItem("initials", initialSubmitForm.value);
    localStorage.getItem("score", count);
}
// function showInitials() {
//     // var dataToShow = localStorage.getItem("data");
// userName.textContent = newUser.initials;
// userScore.textContent = newUser.currentScore;
// }

// submitInitialBtn.addEventListener("click", saveInitials);

// When they enter their initials, populate to the local to keep their score throughout the next games
// function submitInitial() {
//     localStorage.getItem("data", initialSubmitForm);
//     localStorage.getItem("score", count);
//     console.log(initialSubmitForm);
//     console.log(count);
// }