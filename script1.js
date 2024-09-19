const questions = [
    {
        question: "What is the correct syntax to declare a variable in java??",
        answers: [
            { text: "int num;", correct: true },
            { text: "int:num;", correct: false },
            { text: "num int;", correct: false },
            { text: "declare int num;", correct: false }
        ]
    },
    {
        question: "What is the default value of a local variable in Java??",
        answers: [
            { text: "0", correct: false },
            { text: "Null", correct: false },
            { text: "Depends upon data type", correct: true },
            { text: "by default 0", correct: false }
        ]
    },
    {
        question: "Which of the following is a valid keyword in Java?",
        answers: [
            { text: "interface", correct: false },
            { text: "derive", correct: true },
            { text: "implements", correct: false },
            { text: "inherit", correct: false }
        ]
    },
    {
        question: "What is the size of an int data type in Java?",
        answers: [
            { text: "2bytes", correct: true },
            { text: "4bytes", correct: false },
            { text: "16bytes", correct: false },
            { text: "8bytes", correct: false }
        ]
    },

    {
        question: "What is the correct way to create an object in Java?",
        answers: [
            { text: "ClassName obj = new ClassName();", correct: true },
            { text: "ClassName obj;", correct: false },
            { text: "new ClassName();", correct: false },
            { text: "ClassName obj = ClassName();", correct: false }
        ]
    },

    {
        question: "Which of these is not a valid access modifier in Java?",
        answers: [
            { text: "package", correct: true },
            { text: "private", correct: false },
            { text: "protected", correct: false },
            { text: "public", correct: false }
        ]
    },

    {
        question: "Which method is used to print text in Java?",
        answers: [
            { text: "System.out.println()", correct: true },
            { text: "printf()", correct: false },
            { text: "console.log()", correct: false },
            { text: "write", correct: false }
        ]
    },{
        question: "Which function is used to take input from the user in java?",
        answers: [
            { text: "scanner class()", correct: true },
            { text: "printf()", correct: false },
            { text: "get()", correct: false },
            { text: "input()", correct: false }
        ]
    },

    {
        question: "Which of the following is the correct syntax to inherit a class in Java?",
        answers: [
            { text: "class A extends B", correct: true },
            { text: "class A inherit B", correct: false },
            { text: "class A implements B", correct: false },
            { text: "class A abstract B", correct: false }
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
