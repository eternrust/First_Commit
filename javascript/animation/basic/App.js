const box = document.querySelector('.state');

document.querySelector('.start').addEventListener('click', function() {
    // trigger animation
    // prefixes would be needed ...
    box.style.animationPlayState = 'running';
});

document.querySelector('.pause').addEventListener('click', function() {
    // pause animation
    // prefixes would be needed ...
    box.style.animationPlayState = 'paused';
});