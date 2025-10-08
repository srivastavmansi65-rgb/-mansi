// Game variables
let score = 0;
let hearts = [];

// Function to create floating hearts for the game
function createHeart() {
    const gameArea = document.querySelector('.game-area');
    if (!gameArea) return;

    const heart = document.createElement('div');
    heart.className = 'heart-item';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 250 + 'px';
    heart.style.top = Math.random() * 250 + 'px';
    heart.addEventListener('click', () => {
        score++;
        document.getElementById('score').textContent = score;
        heart.remove();
        hearts = hearts.filter(h => h !== heart);
    });
    gameArea.appendChild(heart);
    hearts.push(heart);

    // Remove heart after 3 seconds if not clicked
    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
            hearts = hearts.filter(h => h !== heart);
        }
    }, 3000);
}

// Start game
function startGame() {
    setInterval(createHeart, 1000);
}

// Run animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add bounce animation to hearts on messages page
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.style.animation = 'bounce 1s infinite';
    });

    // Start game if on game page
    if (document.querySelector('.game-area')) {
        startGame();
    }
});
