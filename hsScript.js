// var submitInitialBtn = document.getElementById("submit-initials");
var userName = document.getElementById("user-initials");
var userScore = document.getElementById("user-score");
var userInfo = localStorage.getItem("data");
var userHighScore = localStorage.getItem("score");

function saveInitials() {
    event.preventDefault();
    var initialSubmitForm = document.getElementById("submitted=initials").value;
    localStorage.setItem("data", initialSubmitForm);
    localStorage.setItem("score", count);
    // console.log(initialSubmitForm);
    // console.log(count);
    location.href = "highscores.html";
    showInitials();
}

function showInitials() {
    // var dataToShow = localStorage.getItem("data");
    userName.innerHTML = userInfo;
    userScore.innerHTML = userHighScore;
    console.log(localStorage.getItem("data").value)
}

// submitInitialBtn.addEventListener("click", saveInitials);

// When they enter their initials, populate to the local to keep their score throughout the next games
// function submitInitial() {
//     localStorage.getItem("data", initialSubmitForm);
//     localStorage.getItem("score", count);
//     console.log(initialSubmitForm);
//     console.log(count);
// }