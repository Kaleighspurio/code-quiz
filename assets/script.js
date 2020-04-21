// to make different questions appear I can set attribute from display:none to display:content... I think

var startButton = document.querySelector(".start-button");
var instructions = document.querySelector(".instructions-panel");
var questionOne = document.querySelector(".question-one");
var questionTwo = document.querySelector(".question-two");
var questionThree = document.querySelector(".question-three");
var timer = document.querySelector(".time-remaining");
var correct =  document.querySelector(".correct-answer");
var wrongOne = document.querySelector(".wrong1");
var wrongTwo = document.querySelector(".wrong2");
var wrongThree = document.querySelector(".wrong3");
var answerFeedback = document.querySelector(".right-or-wrong");
var correctTwo =  document.querySelector(".correct-answer-two");


startButton.addEventListener("click", function(){
    // start the timer
    var secondsLeft = 60
    function setTime() {
        var timeInterval = setInterval(function(){
            --secondsLeft;
            timer.textContent = secondsLeft;

            if (secondsLeft === 0) {
                clearInterval(timeInterval);
                alert("game over");
                // make a function that sends a message...
            }
        }, 1000);
    }
    setTime();

    // instructions disappear and the first question displayed
    instructions.setAttribute("style", "display: none;");
    questionOne.setAttribute("style", "display: content;");
});


// Function for incorrect guesses to deduct seconds and display "Wrong!"
function wrongAnswer() {
    // subtract time from the timer

    // This subtract 20 doesn't work!!!! FIX MEEEEE
            // var secondsLeft = document.querySelector(".time-remaining");
    // secondsLeft - 20;
    // timer.textContent = secondsLeft;
    answerFeedback.textContent = "Wrong!";
}

// PUT THE QUESTIONS IN AN ARRAY AND SET A LOOP!??? foreach?
var questionArray = [questionOne, questionTwo, questionThree];

wrongOne.addEventListener("click", function(){
    wrongAnswer();
});
wrongTwo.addEventListener("click", function(){
    wrongAnswer();
});
wrongThree.addEventListener("click", function(){
    wrongAnswer();
});
correct.addEventListener("click", function(){
    questionOne.setAttribute("style", "display: none;");
    questionTwo.setAttribute("style", "display: content;");
});


// This isn't working...
// correctTwo.addEventListener("click", function(){
//     questionOne.setAttribute("style", "display:none");
//     questionTwo.setAttribute("style", "display: none;");
//     questionThree.setAttribute("style", "display: content;");
// });