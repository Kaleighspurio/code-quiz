// the displayHighScores function gets the scores from local storage and JSON.parse's them.  Then it stores the high scores onto a table
const displayHighScores = () => {
    const showHighScore = JSON.parse(localStorage.getItem("scores"));
    console.log(showHighScore);
    const tableBodyElement = $("#score-body");
    let tableRowElement;
    if (showHighScore === null){
        $("#score-body").text(" ")
    } else {
        showHighScore.forEach(function(score){
            tableRowElement = $("<tr>");
            const nameTd = $("<td>").text(score.name);
            const scoreTd = $("<td>").text(score.score);
            tableRowElement.append(nameTd);
            tableRowElement.append(scoreTd);
            tableBodyElement.append(tableRowElement);
        })
    }
}

displayHighScores();

// When the clear highscores button is clicked, the local storage is cleared and the displayHighScores function is run, to display the empty scores table.
$(".clear-scores").on("click", () => {
    localStorage.clear();
    displayHighScores();
});