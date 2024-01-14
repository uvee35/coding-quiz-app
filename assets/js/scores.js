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

// Function to clear high scores
function clearHighScores() {
    // Clear high scores from local storage
    localStorage.removeItem("highScores");

    // Reload high scores to update the display
    loadHighScores();
}

// Event listener for the clear highscores button
document.getElementById("clear").addEventListener("click", clearHighScores);

// Load high scores when the page is loaded
loadHighScores();
