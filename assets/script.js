// to make different questions appear I can set attribute from display:none to display:content... I think

var startButton = document.querySelector(".start-button");
var instructions = document.querySelector(".instructions-panel");
var questionOne = document.querySelector(".question-one");
var timer = document.querySelector(".time-remaining");

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
    console.log(secondsLeft);
    
    // make the instructions disappear and the first question display
    instructions.setAttribute("style", "display: none");
    questionOne.setAttribute("style", "display: content;");
});