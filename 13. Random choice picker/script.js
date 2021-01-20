const textarea = document.getElementById('textarea');
const tagsEle = document.getElementById('tags');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomSelect();
    }
})


function createTags(input) {
    let arr = input
        .split(',')
        .filter(i => i.trim() !== '')
        .map(i => i.trim());

    tagsEle.innerHTML = ``;

    arr.forEach(tag => {
        const elem = document.createElement('span');
        elem.classList.add('tag');
        elem.innerText = tag;
        tagsEle.appendChild(elem);
    });
}

function randomSelect() {
    const num = 30;
    const interval = setInterval(() => {
        let tag = pickRandom();

        tag.classList.add('highlight');

        setTimeout(() => {
            tag.classList.remove('highlight');
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        let tag = pickRandom();
        tag.classList.add('highlight');
    }, 100 * num);
}

function pickRandom() {
    const tags = document.querySelectorAll('.tag');
    let tag = tags[Math.floor(Math.random() * tags.length)];
    return tag;
}