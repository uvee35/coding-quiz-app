// Function to load high scores from local storage
function loadHighScores() {
    // Retrieve high scores from local storage
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Get the highscores list element
    const highScoresList = document.getElementById("highscores");

    // Clear existing high scores in the list
    highScoresList.innerHTML = '';

    // Add each high score to the list
    highScores.forEach(score => {
        const scoreItem = document.createElement('li');
        scoreItem.textContent = `${score.initials}: ${score.score}`;
        highScoresList.appendChild(scoreItem);
    });
}
