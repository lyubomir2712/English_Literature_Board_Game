// textReader.js
document.addEventListener('DOMContentLoaded', function() {
    const speech = window.speechSynthesis;
    let currentUtterance = null;
    let answerQueue = [];
    let isReadingAnswers = false;
    let lastInputLength = 0;

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
                    speakText("This is " + label);
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
                speakText("This is " + label);
            });
            pawn1.addEventListener('mouseleave', () => speech.cancel());
        }

        if (pawn2) {
            pawn2.addEventListener('mouseenter', () => {
                const label = pawn2.getAttribute('aria-label') || 'Player 2 pawn';
                speakText("This is " + label);
            });
            pawn2.addEventListener('mouseleave', () => speech.cancel());
        }
    }

    // Function to read input characters as they're typed
    function setupInputCharacterReading() {
        const answerInput = document.getElementById('question');
        if (answerInput) {
            answerInput.addEventListener('input', function(e) {
                const currentValue = this.value;
                if (currentValue.length > lastInputLength) {
                    // Only read the new character if text was added (not deleted)
                    const newChar = currentValue.slice(-1);
                    speakText(newChar);
                }
                lastInputLength = currentValue.length;
            });

            // Also add space reading
            answerInput.addEventListener('keydown', function(e) {
                if (e.key === ' ') {
                    speakText('space');
                }
            });
        }
    }

    // Initialize hover events after a short delay to ensure all elements exist
    setTimeout(() => {
        setupCellHoverEvents();
        setupPawnHoverEvents();
        setupInputCharacterReading();
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
            lastInputLength = 0; // Reset input length tracker
        });
    }
});





// Add to existing code
let isSpeaking = false;
let speechQueue = [];

function processSpeechQueue() {
    if (speechQueue.length > 0 && !isSpeaking) {
        isSpeaking = true;
        const { text, delay } = speechQueue.shift();
        setTimeout(() => {
            speakText(text);
            isSpeaking = false;
            processSpeechQueue();
        }, delay);
    }
}

function speakWithPauses(text) {
    // Clean the question text
    const cleanText = text.replace(/<[^>]*>/g, ' ');

    // Split into question and options
    const parts = cleanText.split(/([a-z]\))/gi);
    const questionPart = parts[0].trim();
    const options = [];

    // Collect options
    for (let i = 1; i < parts.length; i += 2) {
        const optionLetter = parts[i];
        const optionText = (parts[i + 1] || '').trim();
        if (optionLetter && optionText) {
            options.push(`${optionLetter.toUpperCase()} ${optionText}`);
        }
    }

    // Clear previous queue
    speechQueue = [];

    // Add question to queue
    if (questionPart) {
        speechQueue.push({ text: questionPart, delay: 0 });
    }

    // Add options with delays
    options.forEach((option, index) => {
        speechQueue.push({
            text: option,
            delay: index === 0 ? 1000 : 500 // Longer pause after question
        });
    });

    // Start processing queue
    processSpeechQueue();
}

// Add hover event handler
modal.addEventListener('mouseenter', function() {
    if (this.textContent.trim() && !isSpeaking) {
        speakWithPauses(this.textContent);
    }
});

modal.addEventListener('mouseleave', function() {
    if (speech) {
        speech.cancel();
        isSpeaking = false;
        speechQueue = [];
    }
});

// Modified speakText function to prevent cancellation
function speakText(text) {
    if (speech) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;

        utterance.onerror = (event) => {
            console.error('Speech error:', event.error);
            isSpeaking = false;
        };

        utterance.onend = () => {
            isSpeaking = false;
            processSpeechQueue();
        };

        speech.speak(utterance);
    }
}