
displayHighScores();

// the displayHighScores function gets the scores from local storage and JSON.parse's them.  Then it stores the high scores onto a table
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

// When the clear highscores button is clicked, the local storage is cleared and the displayHighScores function is run, to display the empty scores table.
$(".clear-scores").on("click", function(){
    localStorage.clear();
    displayHighScores();
});