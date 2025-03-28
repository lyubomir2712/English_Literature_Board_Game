// textReader.js
document.addEventListener('DOMContentLoaded', function() {
    const speech = window.speechSynthesis;
    let currentUtterance = null;
    let answerQueue = [];
    let isReadingAnswers = false;

    function speakText(text, delay = 0) {
        if (speech) {
            setTimeout(() => {
                speech.cancel();
                currentUtterance = new SpeechSynthesisUtterance(text);
                currentUtterance.rate = 0.9;
                currentUtterance.pitch = 1;
                speech.speak(currentUtterance);
            }, delay);
        }
    }

    function readAnswersWithDelay(answers) {
        if (isReadingAnswers) return;
        isReadingAnswers = true;

        speakText("Here are the possible answers:", 0);

        answers.forEach((answer, index) => {
            speakText(answer, 1500 + (index * 1500));
        });

        currentUtterance.onend = function() {
            isReadingAnswers = false;
        };
    }

    // Generate question button hover
    const generateBtn = document.getElementById('question-picker');
    if (generateBtn) {
        generateBtn.addEventListener('mouseenter', () => {
            speakText("Click this button to generate a question");
        });
        generateBtn.addEventListener('mouseleave', () => speech.cancel());

        // Add click handler to announce modal appearance
        generateBtn.addEventListener('click', () => {
            speakText("A modal with the question has popped up");
        });
    }

    // Modal elements
    const modal = document.getElementById('staticBackdrop');
    if (modal) {
        // Removed automatic question reading when modal appears

        // Modal title hover
        const modalTitle = document.getElementById('exampleModalLabel');
        if (modalTitle) {
            modalTitle.addEventListener('mouseenter', function() {
                speakText("Current books: " + this.textContent);
            });
            modalTitle.addEventListener('mouseleave', () => speech.cancel());
        }

        // Question text hover (now the only way to hear the question)
        const modalQuestion = document.querySelector('.modal-question');
        if (modalQuestion) {
            modalQuestion.addEventListener('mouseenter', function() {
                speakText("Question: " + this.textContent);
            });
            modalQuestion.addEventListener('mouseleave', () => speech.cancel());
        }

        // Close button (X) hover
        const closeButton = document.querySelector('.btn-close');
        if (closeButton) {
            closeButton.addEventListener('mouseenter', function() {
                speakText("This is a button to exit the modal");
            });
            closeButton.addEventListener('mouseleave', () => speech.cancel());
        }

        // Submit button hover
        const submitBtn = document.querySelector('.btn-primary');
        if (submitBtn) {
            submitBtn.addEventListener('mouseenter', function() {
                speakText("Click this button to submit your answer");
            });
            submitBtn.addEventListener('mouseleave', () => speech.cancel());
        }

        // Answer input hover
        const answerInput = document.getElementById('question');
        if (answerInput) {
            answerInput.addEventListener('mouseenter', function() {
                speakText("Click here in this input and enter your answer");
            });
            answerInput.addEventListener('mouseleave', () => speech.cancel());
        }

        // Read answer after submission
        if (submitBtn) {
            submitBtn.addEventListener('click', function() {
                setTimeout(() => {
                    const answer = document.getElementById('question').value;
                    if (answer.trim()) {
                        speakText("You answered: " + answer, 500);
                    }
                }, 100);
            });
        }
    }

    // Keyboard control
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && speech) {
            speech.cancel();
            answerQueue = [];
            isReadingAnswers = false;
        }
    });

    // Cleanup when modal closes
    if (modal) {
        modal.addEventListener('hidden.bs.modal', function() {
            speech.cancel();
            answerQueue = [];
            isReadingAnswers = false;
        });
    }
});