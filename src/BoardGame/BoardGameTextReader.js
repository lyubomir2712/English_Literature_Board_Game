// textReader.js
document.addEventListener('DOMContentLoaded', function() {
    // Speech synthesis function
    function speakText(text) {
        // Cancel any ongoing speech
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance();
            utterance.text = text;
            utterance.rate = 0.9;
            utterance.pitch = 1;
            window.speechSynthesis.speak(utterance);
        }
    }

    // Generate question button hover effect (only requested feature)
    const generateBtn = document.getElementById('question-picker');
    if (generateBtn) {
        generateBtn.addEventListener('mouseenter', () => {
            speakText("Click this button to generate a question");
        });

        generateBtn.addEventListener('mouseleave', () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        });
    }

    // Keyboard control (optional)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
    });
});