
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
