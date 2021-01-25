const images = document.querySelectorAll('.slide');
const leftArr = document.querySelector('.left-arrow');
const rightArr = document.querySelector('.right-arrow');
let active = 0;

leftArr.addEventListener('click', () => {
    if (active === 0)
        active = images.length - 1;
    else
        active--;
    updateImg();
    putImgToBody();
});

rightArr.addEventListener('click', () => {
    if (active === images.length - 1)
        active = 0;
    else
        active++;
    updateImg();
    putImgToBody();
});

function putImgToBody() {
    document.body.style.backgroundImage = images[active].style.backgroundImage;
}

function updateImg() {
    images.forEach((img) => img.classList.remove('active'));

    images[active].classList.add('active');
}

putImgToBody();