const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increase = document.getElementById('increase');
const value = document.getElementById('value');
const decrease = document.getElementById('decrease');
const colorEl = document.getElementById('color');
const clear = document.getElementById('clear');

let size = 10;
let color = 'black'
let isPressed = false;
let initialX = 0;
let initialY = 0;

canvas.addEventListener('mousedown', (e) => {
    initialX = e.layerX;
    initialY = e.layerY;
    isPressed = true;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        drawCircle(e.layerX, e.layerY);
        drawLine(initialX, initialY, e.layerX, e.layerY);
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, size, 0, Math.PI * 2, 0);
    ctx.fill();
}

function drawLine(x, y, x1, y1) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();

    initialX = x1;
    initialY = y1;
}

clear.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));


increase.addEventListener('click', () => {
    if (size < 30) {
        size += 5;
        value.innerText = size;
    }
})

decrease.addEventListener('click', () => {
    if (size > 5) {
        size -= 5;
        value.innerText = size;
    }
})

colorEl.addEventListener('change', (e) => {
    color = colorEl.value;
})