// Initialize highscores and retrieve from localStorage
let highscores = [];
try {
    highscores = JSON.parse(localStorage.getItem("highscores")) || [];
} catch (error) {
    console.error("Error reading highscores from localStorage:", error);
}

// Define displayHighscores function
function displayHighscores() {
    // Function code...in process 
}
