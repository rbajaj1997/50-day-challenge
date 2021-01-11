let bg = document.querySelector('.bg');
let text = document.querySelector('.loading-text');

let load = 1;

let interval = setInterval(helper, 30);

function helper() {
    load++;
    if (load > 99) {
        clearInterval(interval);
    }
    text.innerText = `${load}%`
    text.style.opacity = 1 + scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${30 - scale(load, 0, 100, 0, 30)}px)`;
}

function scale(value1, value1_min, value1_max, value2_min, value2_max) {
    let value1_percent = value1 / (value1_max - value1_min);
    let value2 = value1_percent * (value2_max - value2_min);
    return value2;
}
