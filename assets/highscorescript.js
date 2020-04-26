// viewScores();

// function getScoresFromLocalStorage(){
//     var highscores = localStorage.getItem("scores");
//     if (highscores){
//         return JSON.parse(highscores);
//     } else {
//         return [];
//     }
// }

// function viewScores(){
//     var highscores = getScoresFromLocalStorage();
//     console.log(highscores);
//     $("#score-list").html(highscores.name);

// }
displayHighScores();

function displayHighScores(){
    var showHighScore = JSON.parse(localStorage.getItem("scores"));
    console.log(showHighScore);
    var tableBodyElement = $("#score-body");
    var tableRowElement;
    if (showHighScore === null){
        $("#score-body").text(" ")
    } else {
        showHighScore.forEach(function(score){
            tableRowElement = $("<tr>");
            var nameTd = $("<td>").text(score.name);
            var scoreTd = $("<td>").text(score.score);
            tableRowElement.append(nameTd);
            tableRowElement.append(scoreTd);
            tableBodyElement.append(tableRowElement);
        })
    }
}


$(".clear-scores").on("click", function(){
    localStorage.clear();
    displayHighScores();
});


// console.log(tableRowElement);