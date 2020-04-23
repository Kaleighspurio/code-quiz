// to make different questions appear I can set attribute from display:none to display:content... I think

var startButton = document.querySelector(".start-button");
var instructions = document.querySelector(".instructions-panel");
var questionOne = document.querySelector(".question-one");
var timer = document.querySelector(".time-remaining");
var answerFeedback = document.querySelector(".right-or-wrong");



var questionArray = [
    {
        question: "How many staircases does Hogwarts School of Witchcraft and Wizardry have?",
        a: "203", 
        b: "142", 
        c: "156",
        d: "78",
        correct: 1
    },
    {
        question: "Where is the slytherin common room located?",
        a: "The dungeons", 
        b: "under the stairs in the broomcloset", 
        c: "Next to the kitchens", 
        d: "Behind the portrait of the fat lady",
        correct : 0
    },
    {
        question: "Who is the Gryffindor house ghost?",
        a: "the Bloody Baron", 
        b: "Peeves", 
        c: "The grey lady", 
        d: "Nearly Headless Nick",
        correct: 3
    },
    {
        question: "What does the Sorcerer's Stone do?",
        a: "Turns the person holding it into an animal", 
        b: "Produces the elixer of life", 
        c: "Makes the holder invisible", 
        d: "Shows the holder what he most desires",
        correct: 1
    },
    {
        question: "Who is Fluffy?",
        a: "Fluffy is the pet name Mrs. Dursley has for her son, Dudley", 
        b: "Hagrid's Dragon", 
        c: "Ron's rat", 
        d: "A three headed dog",
        correct: 3
    },
    {
        question: "How did Moaning Myrtle die?",
        a: "A mountain troll", 
        b: "The Whomping Willow", 
        c: "The Basilisk", 
        d: "The Killing Curse",
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


startButton.addEventListener("click", function(){
    // start the timer
    var secondsLeft = 60
    function setTime() {
        var timeInterval = setInterval(function(){
            secondsLeft--;
            timer.textContent = secondsLeft;

            if (secondsLeft === 0) {
                clearInterval(timeInterval);
                // alert("game over");
                // make a function that sends a message...
            }
        }, 1000);
    }
    setTime();

    // instructions disappear and the first question displayed
    instructions.setAttribute("style", "display: none;");
    questionOne.setAttribute("style", "display: content;");
    
    
    questionArray.forEach(function(question){
        $(".questions-display").text(question.question);
        $(".option1").text(question.a);
        $(".option2").text(question.b);
        $(".option3").text(question.c);
        $(".option4").text(question.d);
        var correctAnswer = question.correct;
        console.log(correctAnswer);
        $("buttons").on("click", function(){
            alert("button clicked")
        })
        $(".buttons").on("click", function(){
//             if () {
// // if what they clicked = correctAnswer, then continue to the next question...
//             } else {
//                 wrongAnswer();
//             }
        });
       
    });
});

