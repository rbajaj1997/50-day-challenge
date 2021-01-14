let labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
    console.log(label.innerText);
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${50*idx}ms">${letter}</span>`)
        .join('');
});