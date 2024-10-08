const questions = [
    {
        question: "What is the correct syntax to declare a variable in C??",
        answers: [
            { text: "int num;", correct: true },
            { text: "int:num;", correct: false },
            { text: "num int;", correct: false },
            { text: "declare int num;", correct: false }
        ]
    },
    {
        question: "Which of the following is the correct way to include a library in C?",
        answers: [
            { text: "#include [stdio.h]", correct: false },
            { text: "#include  stdio.h", correct: false },
            { text: "#include <stdio.h>", correct: true },
            { text: "#include (stdio.h)", correct: false }
        ]
    },
    {
        question: "Which of the following data types is used to store decimal values?",
        answers: [
            { text: "int", correct: false },
            { text: "float", correct: true },
            { text: "char", correct: false },
            { text: "double", correct: false }
        ]
    },
    {
        question: "What is the result of the following expression: 5 + 2 * 3?",
        answers: [
            { text: "11", correct: true },
            { text: "21", correct: false },
            { text: "16", correct: false },
            { text: "17", correct: false }
        ]
    },

    {
        question: "Which of the following is a loop structure in C?",
        answers: [
            { text: "while", correct: true },
            { text: "goto", correct: false },
            { text: "if", correct: false },
            { text: "switch", correct: false }
        ]
    },

    {
        question: "Which of the following operators is used to access the value of a variable using its pointer?",
        answers: [
            { text: "*", correct: true },
            { text: "&", correct: false },
            { text: "@", correct: false },
            { text: "->", correct: false }
        ]
    },

    {
        question: "What is the size of an int data type on a typical 32-bit system?",
        answers: [
            { text: "2bytes", correct: true },
            { text: "4bytes", correct: false },
            { text: "8bytes", correct: false },
            { text: "16bytes", correct: false }
        ]
    },{
        question: "Which function is used to take input from the user in C?",
        answers: [
            { text: "scanf()", correct: true },
            { text: "printf()", correct: false },
            { text: "get()", correct: false },
            { text: "input()", correct: false }
        ]
    },

    {
        question: "who is the father of c?",
        answers: [
            { text: "Denish richee", correct: true },
            { text: "abdul kalam", correct: false },
            { text: "linux torvalds", correct: false },
            { text: "bill gate", correct: false }
        ]
    },
    
    {
        question: "Which of the following is not a programming language?",
        answers: [
            { text: "Html", correct: true },
            { text: "java", correct: false },
            { text: "c++", correct: false },
            { text: "c", correct: false }
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
