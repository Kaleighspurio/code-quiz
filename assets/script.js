// to make different questions appear I can set attribute from display:none to display:content... I think

var startButton = document.querySelector(".start-button");
var instructions = document.querySelector(".instructions-panel");
var questionOne = document.querySelector(".question-one");
var timer = document.querySelector(".time-remaining");
var i = 0;

// Have an array of all questions, choices and the correct answer

var questionArray = [
    {
        question: "Who is the Gryffindor house ghost?",
        choices: ["the Bloody Baron", "Peeves", "The grey lady", "Nearly Headless Nick"],
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


// Function for incorrect guesses to deduct seconds and display "Wrong!"
function wrongAnswer() {
    // subtract time from the timer
    // This subtract 20 doesn't work!!!! FIX MEEEEE
    // var secondsLeft = document.querySelector(".time-remaining");
    // secondsLeft - 20;
    // timer.textContent = secondsLeft;
    answerFeedback.textContent = "Wrong!";
}
var secondsLeft = 60
function setTime() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            // alert("game over");
            // store the time left on the timer
            // make it take you to the highscores page- get the score from local storage
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

function displayQuestions() {
    $(".questions-display").text(questionArray[i].question);
    $("#button0").text(questionArray[i].choices[0])
    $("#button1").text(questionArray[i].choices[1])
    $("#button2").text(questionArray[i].choices[2])
    $("#button3").text(questionArray[i].choices[3])
    console.log(questionArray[i].choices);
    i++;
    if (i === 5) {
        endGame();
    }
    
}

function endGame() {
    $(".question-box").hide();
}

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
    }
    setTimeout(function(){
        $(".right-or-wrong").hide();
    }, 1000);
    displayQuestions();
}
$(".buttons").on("click", checkAnswer);


