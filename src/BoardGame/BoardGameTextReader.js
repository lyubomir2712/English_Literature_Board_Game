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

    // Page load announcement
    speakText("You have entered the page with the board game");

    // Function to setup hover events for all cells with aria-label
    function setupCellHoverEvents() {
        const cells = document.querySelectorAll('.cell[aria-label]');

        cells.forEach(cell => {
            cell.addEventListener('mouseenter', function() {
                const label = this.getAttribute('aria-label');
                if (label) {
                    speakText(label);
                }
            });

            cell.addEventListener('mouseleave', function() {
                speech.cancel();
            });
        });
    }

    // Add hover events for player pawns
    function setupPawnHoverEvents() {
        const pawn1 = document.querySelector('.pawn-1');
        const pawn2 = document.querySelector('.pawn-2');

        if (pawn1) {
            pawn1.addEventListener('mouseenter', () => {
                const label = pawn1.getAttribute('aria-label') || 'Player 1 pawn';
                speakText(label);
            });
            pawn1.addEventListener('mouseleave', () => speech.cancel());
        }

        if (pawn2) {
            pawn2.addEventListener('mouseenter', () => {
                const label = pawn2.getAttribute('aria-label') || 'Player 2 pawn';
                speakText(label);
            });
            pawn2.addEventListener('mouseleave', () => speech.cancel());
        }
    }

    // Initialize hover events after a short delay to ensure all elements exist
    setTimeout(() => {
        setupCellHoverEvents();
        setupPawnHoverEvents();
    }, 1000);

    // Rest of your existing code remains the same...
    // [Keep all the existing code for generateBtn, modal, keyboard control, etc.]

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

        // Close button (X) hover and click
        const closeButton = document.querySelector('.btn-close');
        if (closeButton) {
            closeButton.addEventListener('mouseenter', function() {
                speakText("This is a button to exit the modal");
            });
            closeButton.addEventListener('mouseleave', () => speech.cancel());

            // Updated click handler with new announcement
            closeButton.addEventListener('click', function() {
                setTimeout(() => {
                    speakText("You have exited the modal with the question");
                }, 300);
            });
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