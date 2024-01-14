// Initialize highscores and retrieve from localStorage
let highscores = [];
try {
    highscores = JSON.parse(localStorage.getItem("highscores")) || [];
} catch (error) {
    console.error("Error reading highscores from localStorage:", error);
}

// Define displayHighscores function
function displayHighscores() {
    // Find the element where highscores will be displayed
    const highscoresList = document.getElementById("highscores");

    // Check if the highscores list element exists
    if (highscoresList) {
        // Clear existing content
        highscoresList.innerHTML = "";

        // Check if there are highscores to display
        if (highscores.length === 0) {
            const li = document.createElement("li");
            li.textContent = "No high scores yet";
            highscoresList.appendChild(li);
        } else {
            // Sort highscores in descending order if score is a number
            highscores.sort((a, b) => b.score - a.score);

            // Iterate through highscores and display each
            highscores.forEach((score, index) => {
                const li = document.createElement("li");

                // Ensure score object has name and score properties
                if (score.name && score.score !== undefined) {
                    li.textContent = `${index + 1}. ${score.name}: ${score.score}`;
                    highscoresList.appendChild(li);
                }
            });
        }
    } else {
        // Log an error if the highscores element is not found
        console.error("Element with ID 'highscores' not found.");
    }
}

// Call displayHighscores function to display highscores when script loads
document.addEventListener("DOMContentLoaded", displayHighscores);
