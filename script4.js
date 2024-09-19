// JavaScript to handle quiz logic

let currentLevel = '';
let questions = {
  basic: {
    question: "What is 5 + 3?",
    answer: "8"
  },
  
  intermediate: {
    question: "Solve for x: 2x + 4 = 12",
    answer: "4"
  },
  hard: {
    question: "Find the area of a triangle with base 10 cm and height 5 cm.",
    answer: "25"
  }
};

function startQuiz(level) {
  currentLevel = level;
  document.getElementById('question-section').innerHTML = `<h2>${questions[level].question}</h2>`;
  document.getElementById('answer-section').style.display = 'block';
  document.getElementById('result-message').innerText = '';
}

function submitAnswer() {
  const userAnswer = document.getElementById('user-answer').value.trim();
  const correctAnswer = questions[currentLevel].answer;
  
  if (userAnswer === correctAnswer) {
    document.getElementById('result-message').innerText = 'Correct! Well done.';
  } else {
    document.getElementById('result-message').innerText = 'Incorrect. Please try again.';
  }
}
