var startButton = document.querySelector(".start-button");
var instructions = document.querySelector(".instructions-panel");
var questionOne = document.querySelector(".question-one");
var timer = document.querySelector(".time-remaining");
var i = 0;
var timeInterval;
var scores;
var nameInput;
var secondsLeft;

// Have an array of all questions, choices, and the correct answer

var questionArray = [
    {
        question: "Who is the Gryffindor house ghost?",
        choices: ["The Bloody Baron", "Peeves", "The Grey Lady", "Nearly Headless Nick"],
        correct: 3
    },
    {
        question: "What does the Sorcerer's Stone do?",
        choices: ["Turns the person holding it into an animal", "Produces the elixer of life", "Makes the holder invisible", "Shows the holder what he most desires"],
        correct: 1
    },
    {
        question: "Who is Fluffy?",
        choices: ["Fluffy is the pet name Mrs. Dursley has for her son, Dudley", "Hagrid's Dragon", "Ron's rat", "A three headed dog"],
        correct: 3
    },
    {
        question: "How did Moaning Myrtle die?",
        choices: ["A mountain troll", "The Whomping Willow", "The Basilisk", "The Killing Curse"],
        correct: 2
    }
];
// set the seconds to start at 40
secondsLeft = 40
function setTime() {
    timeInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
// when the timer reaches 0, go to the end of the game
        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}

// When the start button is clicked, start the timer
startButton.addEventListener("click", function () {
    setTime();
    // instructions disappear and the first question displayed
    instructions.setAttribute("style", "display: none;");
    questionOne.setAttribute("style", "display: content;");
    displayQuestions();

});
// display the questions from the array one at a time, and their corresponding answers populate each button on the page.  After each question is asked and answered, it moves to the next question with the i++
function displayQuestions() {
    $(".questions-display").text(questionArray[i].question);
    $("#button0").text(questionArray[i].choices[0])
    $("#button1").text(questionArray[i].choices[1])
    $("#button2").text(questionArray[i].choices[2])
    $("#button3").text(questionArray[i].choices[3])
    console.log(questionArray[i].choices);
    i++;
}
// The endGame function hides the question box, and shows the score and the name input box with a submit button
function endGame() {
    $(".question-box").hide();
    $(".name-input").show();
    $(".display-score").text(secondsLeft);
    clearInterval(timeInterval);
    $(".time-remaining").text(timeInterval);
}

// The checkAnswer function will take the data-index from the button that was clicked and compare it to the correct item in the questionArray object.  If the data-index matches the correct answer, "correct!" will appear, if not, "wrong!" will appear and 10 seconds will be deducted. 
function checkAnswer(){
    $(".right-or-wrong").show();
    var buttonClicked = event.target;
    var chosenAnswerIndex = buttonClicked.getAttribute("data-index");
    console.log(chosenAnswerIndex);
    console.log("correct answer is " + questionArray[i-1].choices);
    if (chosenAnswerIndex == questionArray[i-1].correct){
        $(".right-or-wrong").text("Correct!");
    } else {
        $(".right-or-wrong").text("Wrong!");
        if (secondsLeft > 10){
            secondsLeft = secondsLeft - 10;
        } else {
            secondsLeft = 0;
        }
    }
    // This makes the display of whether the question was right or wrong disappear after 1 second
    setTimeout(function(){
        $(".right-or-wrong").hide();
    }, 1000);
    if (i == 4) {
        endGame();
    } else {
        displayQuestions();
    }
    
}
// when an answer button is clicked, the checkAnswer function is run
$(".buttons").on("click", checkAnswer);
// When the submit button is clicked, the saveScore function is run
$(".submit-button").on("click", saveScore);


// This will take any scores already stored in local storage and will JSON.parse them
function getScoresFromLocalStorage(){
    scores = localStorage.getItem("scores");
    if (scores){
        return JSON.parse(scores);
    } else {
        return [];
    }
}

// The saveScore function will take the name from the input box and the user's score and push the new scores into the scoreObject.  Then it will JSON stringify it and store it back in local storage
function saveScore(seconds){
    nameInput = $(".input-box").val();
    console.log(nameInput);
    var scoreObject = {
        name: nameInput,
        score: secondsLeft
    }
    console.log(scoreObject);

    var scores = getScoresFromLocalStorage();
    scores.push(scoreObject);
    var scoresJSON = JSON.stringify(scores);
    localStorage.setItem("scores", scoresJSON);
}

