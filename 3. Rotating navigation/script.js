let openButton = document.getElementById('open');
let closeButton = document.getElementById('close');
let container = document.querySelector('.container');

openButton.addEventListener('click', () => {
    container.classList.add('show-nav');
})

closeButton.addEventListener('click', () => {
    container.classList.remove('show-nav');
})