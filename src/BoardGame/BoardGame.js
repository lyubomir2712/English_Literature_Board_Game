let cells = document.querySelectorAll('.cell');
let questions = [];
const speech = window.speechSynthesis || window.webkitSpeechSynthesis; // Browser compatibility

// Enhanced speak function
function speakText(text) {
    if (speech) {
        speech.cancel(); // Cancel any ongoing speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;

        // Ensure speech is available
        if (speech.speaking) {
            speech.cancel();
        }

        // Handle browsers that may block speech without user interaction
        utterance.onerror = (event) => {
            console.error('Speech error:', event.error);
        };

        speech.speak(utterance);
    } else {
        console.warn('Speech synthesis not supported');
    }
}

async function loadQuestions() {
    try {
        const response = await fetch('./questions.json');
        questions = await response.json();
        console.log("Questions loaded:", questions.length);
    } catch (error) {
        console.error("Error loading questions:", error);
    }
}

let modal = document.querySelector('.modal-question');
let currentQuestion = null;

function generateQuestion() {
    let random = 0;
    if (questions.length > 1) {
        random = Math.floor(Math.random() * questions.length);
        currentQuestion = random;
        console.log(questions[currentQuestion].answer);
    }
    modal.innerHTML = questions[random].body;
}

function createPawn(number) {
    let obj = document.createElement('i');
    obj.setAttribute("id", number);
    obj.classList.add("fas");
    obj.classList.add("fa-chess-pawn");
    obj.classList.add(`pawn-${number}`);
    return obj;
}

let pawn1 = {
    id: 1,
    element: createPawn(1),
    currentPos: 0
};

let pawn2 = {
    id: 2,
    element: createPawn(2),
    currentPos: 0
};

function putPawns(pawns) {
    pawns.forEach(pawn => {
        cells[pawn.currentPos].appendChild(pawn.element);
    });
}

function movePawnForward(pawn) {
    if (pawn !== null) {
        pawn.element.remove();
        pawn.currentPos++;
        document.querySelector(`#cell-${pawn.currentPos}`).appendChild(pawn.element);

        // Speak movement - added slight delay to ensure speech works
        setTimeout(() => {
            speakText(`Player ${pawn.id} answered correctly and moves forward`);
        }, 300);
    }
}

// Setup
let pawnsToPlay = [pawn1, pawn2];
let pawnToMove = 0;

window.onload = () => {
    loadQuestions();
    putPawns(pawnsToPlay);

    // Initialize speech synthesis - some browsers require this
    if (speech) {
        speech.onvoiceschanged = () => {
            console.log('Speech synthesis ready');
        };
    }
};

let submit_button = document.querySelector('.btn-primary');
let button = document.querySelector('#question-picker');

button.addEventListener('click', function() {
    if (questions.length >= 1) {
        generateQuestion();
    }
});

submit_button.addEventListener('click', function() {
    let input = document.querySelector('#question').value.trim();
    let currentPawn = pawnsToPlay[pawnToMove];

    if (input && currentQuestion !== null) {
        if (input === questions[currentQuestion].answer) {
            movePawnForward(currentPawn);
        } else {
            setTimeout(() => {
                speakText(`Player ${currentPawn.id} answered wrong`);
            }, 300);
        }

        // Set next pawn to move
        pawnToMove = (pawnToMove + 1) % pawnsToPlay.length;

        // Remove used question
        questions.splice(currentQuestion, 1);

        // Clear form
        document.querySelector(".modal-question").innerHTML = "";
        document.querySelector("#question").value = "";

        // Check for winner
        let finish = document.querySelector(".finish__cell").children;
        if (finish.length > 0) {
            const winnerId = finish[0].id;
            setTimeout(() => {
                speakText(`Player ${winnerId} has won the game!`);
            }, 500);
            window.alert(`PAWN ${winnerId} has WON!`);
        }

        // Disable button if no more questions
        if (questions.length === 0) {
            button.disabled = true;
        }
    }
});