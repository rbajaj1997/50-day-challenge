let searchContainer = document.querySelector('.search');
let button = document.querySelector('.button');
let input = document.querySelector('.input');

button.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    input.focus();
})