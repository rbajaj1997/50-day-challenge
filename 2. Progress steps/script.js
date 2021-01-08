let progressBar = document.getElementById('progress');
let circles = document.querySelectorAll('.circle');
let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');
let currentState = 1;

nextButton.addEventListener('click', () => {
    currentState++;
    currentState = Math.min(circles.length, currentState);
    changes();
});

prevButton.addEventListener('click', () => {
    currentState--;
    currentState = Math.max(1, currentState);
    changes();
});

function changes() {
    circles.forEach((circle, idx) => {
        if (idx < currentState) {
            circle.classList.add('active');
        }

        if (idx >= currentState) {
            circle.classList.remove('active');
        }
    });

    // Add appropriate css classes
    let activeClasses = document.querySelectorAll('.active').length - 1;
    let barPercent = (activeClasses / (circles.length - 1)) * 100 + '%';
    progressBar.style.width = barPercent;

    // Disable Button Logic
    if (currentState === 1) {
        prevButton.disabled = true;
    } else if (currentState === circles.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}
