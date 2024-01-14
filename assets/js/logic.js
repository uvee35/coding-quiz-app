
//Quiz Setup
let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 60; //quiz duration
const timerElement = document.getElementById('time');
const startButton = document.getElementById('start');
const questionElement = document.getElementById('question-title');
const choicesElement = document.getElementById('choices');
const endScreenElement = document.getElementById('end-screen');
const finalScoreElement = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const submitButton = document.getElementById('submit');
let timerInterval; 

// Function to start the quiz
function startQuiz() {
    document.getElementById('start-screen').classList.add('hide');
    questionElement.parentElement.classList.remove('hide');
    timeRemaining = 60;
    score = 0;
    currentQuestionIndex = 0;

    startTimer();
    showQuestion();
}

// Function to display the current question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.title;
    choicesElement.innerHTML = '';

    // Create buttons for each choice
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => selectAnswer(choice));
        choicesElement.appendChild(button);
    });
}

// Function to handle answer selection
function selectAnswer(choice) {
    const feedbackElement = document.getElementById('feedback');

    if (questions[currentQuestionIndex].answer === choice) {
        score++;
        feedbackElement.textContent = "Correct!";
    } else {
        timeRemaining -= 10; // Penalty for wrong answer
        feedbackElement.textContent = "Wrong!";
    }

    // Show feedback for a short time then go to the next question
    feedbackElement.classList.remove('hide');
    setTimeout(() => {
        feedbackElement.classList.add('hide');

        currentQuestionIndex++;
        if (currentQuestionIndex === questions.length) {
            endQuiz();
        } else {
            showQuestion();
        }
    }, 1000); // Display feedback for 1 second
}

// Function to start and manage the quiz timer
function startTimer() {
    timerElement.textContent = timeRemaining;
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timerInterval);
    questionElement.parentElement.classList.add('hide');
    endScreenElement.classList.remove('hide');
    finalScoreElement.textContent = score;
}

function saveHighScore() {
    const initials = initialsInput.value.trim();

    if (initials !== '') {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        const newScore = { score, initials };
        highScores.push(newScore);
        highScores.sort((a, b) => b.score - a.score); 
        localStorage.setItem('highScores', JSON.stringify(highScores));

        // Clear the input field after saving
        initialsInput.value = '';
    } else {
        // Prompt the user if the initials field is empty
        alert("Please enter your initials!");
    }
    

    // Redirect to the high scores page
    window.location.href = 'highscores.html'; 
    
}

submitButton.addEventListener('click', saveHighScore);

// Event listeners
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', saveHighScore);


