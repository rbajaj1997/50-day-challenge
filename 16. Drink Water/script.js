const smallcups = document.querySelectorAll('.cup-small');
const percent = document.getElementById('percentage');
const liters = document.getElementById('liters');


smallcups.forEach((cup, id) => {
    cup.addEventListener('click', () => fillcups(id));
})

updateBigCup();

function fillcups(id) {
    if (id === 7 && smallcups[id].classList.contains("full")) id--;
    else if (smallcups[id].classList.contains('full') && !smallcups[id].nextElementSibling.classList.contains('full')) {
        id--;
    }

    smallcups.forEach((cup, id2) => {
        if (id2 <= id) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    updateBigCup();
}


function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallcups.length;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
}