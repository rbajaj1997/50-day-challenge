const button = document.querySelector('button');

button.addEventListener('click', function (e) {
    const buttonTop = button.offsetTop;
    const buttonLeft = button.offsetLeft;
    const x = e.clientX;
    const y = e.clientY;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = `${y - buttonTop}px`;
    circle.style.left = `${x - buttonLeft}px`;
    this.appendChild(circle);

    setTimeout(() => this.removeChild(circle), 500);
})