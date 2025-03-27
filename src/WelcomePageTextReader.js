// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Speech synthesis function
    function speakText(text) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = text;
        utterance.rate = 0.9;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    }

    // Game title and description
    const gameName = document.querySelector('.heading__name');
    const gameDescription = document.querySelector('.heading__description');
    const creatorsPara = document.querySelector('.para__info'); // New selector for creators paragraph

    gameName.addEventListener('mouseenter', () => speakText("Board Game"));
    gameDescription.addEventListener('mouseenter', () => speakText("A game that gives you the chance to explore the world of the English literature"));
    creatorsPara.addEventListener('mouseenter', () => speakText("The game is developed and designed by Lyubomir Georgiev")); // New hover effect

    // Navigation items
    const navItems = [
        {
            selector: '.header__info-language',
            text: 'Language is English'
        },
        {
            selector: '.header__contact-add:nth-child(1)',
            text: 'This is a button to contact the creators, the number is +359 251 672 190'
        },
        {
            selector: '.header__contact-add:nth-child(2)',
            text: 'This is button to see creators location which is in Sofia, Bulgaria'
        },
        {
            selector: '.header__contact-add:nth-child(3)',
            text: 'This is a button to contact the creators via email'
        }
    ];

    // Add hover events for navigation items
    navItems.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element) {
            element.addEventListener('mouseenter', () => speakText(item.text));
            element.addEventListener('mouseleave', () => window.speechSynthesis.cancel());
        }
    });

    // Social media icons
    const socialIcons = document.querySelectorAll('.header__social-icons a');
    socialIcons.forEach(icon => {
        const platform = icon.querySelector('i').className.match(/fa-(facebook|instagram|twitter|youtube)/)[1];
        icon.addEventListener('mouseenter', () => speakText(`Link to our ${platform} page`));
        icon.addEventListener('mouseleave', () => window.speechSynthesis.cancel());
    });

    // Buttons
    const buttons = [
        {
            selector: '.btns__one',
            text: 'This is a button which leads to a tutorial video of the game'
        },
        {
            selector: '.btns__two',
            text: 'This is a button to play the game'
        },
        {
            selector: '.btn a',
            text: 'Back to Welcome Page button'
        }
    ];

    buttons.forEach(btn => {
        const element = document.querySelector(btn.selector);
        if (element) {
            element.addEventListener('mouseenter', () => speakText(btn.text));
            element.addEventListener('mouseleave', () => window.speechSynthesis.cancel());
        }
    });

    // Add mouseleave for creators paragraph
    creatorsPara.addEventListener('mouseleave', () => window.speechSynthesis.cancel());

    // Keyboard control
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.speechSynthesis.cancel();
        }
    });
});