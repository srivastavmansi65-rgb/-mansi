let score = 0;
const scoreDisplay = document.getElementById('score');
const loveNote = document.querySelector('.love-note');

document.querySelectorAll('.cracker').forEach(cracker => {
    cracker.addEventListener('click', () => {
        if (!cracker.classList.contains('burst')) {
            cracker.classList.add('burst');
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            setTimeout(() => {
                cracker.classList.remove('burst');
            }, 500);
        }
        if(score === 5) {
            revealLoveNote();
        }
    });
});

// Simple animation for lights
setInterval(() => {
    document.querySelectorAll('.light').forEach(light => {
        light.style.animationDelay = Math.random() * 2 + 's';
    });
}, 2000);

function revealLoveNote() {
    loveNote.classList.add('reveal');
}

// Love notes page script
const hearts = document.querySelectorAll('.heart');
const notePopup = document.getElementById('note-popup');
const popupText = document.getElementById('popup-text');
const closePopup = document.getElementById('close-popup');

if (hearts.length > 0) {
    hearts.forEach(heart => {
        heart.addEventListener('click', () => {
            const note = heart.getAttribute('data-note');
            popupText.textContent = note;
            notePopup.classList.add('show');
        });
    });

    closePopup.addEventListener('click', () => {
        notePopup.classList.remove('show');
    });

    notePopup.addEventListener('click', (e) => {
        if (e.target === notePopup) {
            notePopup.classList.remove('show');
        }
    });
}
