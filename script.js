const questions = [
    {
        question: "Prasanta loves?",
        answers: [
            { text: "Pallavi", correct: false },
            { text: "Aishwarya", correct: false },
            { text: "Priety", correct: true },
            { text: "Itishree", correct: false }
        ]
    },
    {
        question: "Who is the founder of Microsoft?",
        answers: [
            { text: "Steve Jobs", correct: false },
            { text: "Elon Musk", correct: false },
            { text: "Bill Gates", correct: true },
            { text: "Jeff Bezos", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Helium", correct: false }
        ]
    },

    {
        question: "Sivam's' love?",
        answers: [
            { text: "Pallavi", correct: true },
            { text: "Sneha", correct: false },
            { text: "Priti", correct: false },
            { text: "Itisree", correct: false }
        ]
    },

    {
        question: "Haraprasad's' EX?",
        answers: [
            { text: "Pallavi", correct: true },
            { text: "Sneha", correct: false },
            { text: "Nandini", correct: false },
            { text: "Priti", correct: false }
        ]
    },

    {
        question: "Guru's' Attraction?",
        answers: [
            { text: "Smruti", correct: true },
            { text: "Sneha", correct: false },
            { text: "Nandini", correct: false },
            { text: "Priti", correct: false }
        ]
    },{
        question: "Aditya's' girlfriend?",
        answers: [
            { text: "Mamta", correct: true },
            { text: "Sneha", correct: false },
            { text: "Nandini", correct: false },
            { text: "Priti", correct: false }
        ]
    },

    {
        question: "Sibun's' Girlfriend?",
        answers: [
            { text: "Licky", correct: true },
            { text: "Sneha", correct: false },
            { text: "Nandini", correct: false },
            { text: "Priti", correct: false }
        ]
    }

    
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Next Question';
    nextButton.style.display = 'none';
    scoreContainer.innerHTML = '';
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.add(button.dataset.correct === 'true' ? 'correct' : 'wrong');
    });
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    scoreContainer.innerText = `Final Score: ${score}`;
    nextButton.innerText = 'Restart';
    nextButton.style.display = 'block';
    nextButton.addEventListener('click', startGame);
}

startGame();
