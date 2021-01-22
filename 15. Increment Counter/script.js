const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = `0`;

    function changeValue() {
        const curr = +counter.innerText;
        const target = +counter.getAttribute('data-target');
        const increment = target / 200;

        if (curr < target) {
            counter.innerText = `${curr + increment}`;
            setTimeout(changeValue, 1);
        } else {
            counter.innerText = `${target}`;
        }
    }

    changeValue();

})