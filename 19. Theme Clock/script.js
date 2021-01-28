const toggleButton = document.querySelector('.toggle');
const hourEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

toggleButton.addEventListener('click', (e) => {
    const htmlEl = document.querySelector('html');
    if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        e.target.innerText = 'Dark Mode';
    } else {
        htmlEl.classList.add('dark');
        e.target.innerText = 'Light Mode';
    }
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function ChangeTime() {
    const time = new Date();
    const hours = time.getHours();
    const mins = time.getMinutes();
    const sec = time.getSeconds();
    const date = time.getDate();
    const day = time.getDay();
    const month = time.getMonth();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12;
    hourEl.style.transform = `rotate(${180 + (displayHours / 12) * 360}deg)`;
    minutesEl.style.transform = `rotate(${180 + (mins / 60) * 360}deg)`;
    secondsEl.style.transform = `rotate(${180 + (sec / 60) * 360}deg)`;
    timeEl.innerText = `${displayHours}:${mins} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setInterval(() => {
    ChangeTime();
}, 1000);