const jokeElem = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');

generateJoke();

// Using Promises
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then((res) => res.json())
//         .then(data => {
//             jokeElem.innerHTML = data.joke;
//             btn.disabled = false;
//         });
// }

// Using async/ await
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const response = await fetch('https://icanhazdadjoke.com/', config);
    const data = await response.json();
    jokeElem.innerHTML = data.joke;
    btn.disabled = false;
}

btn.addEventListener('click', () => {
    btn.disabled = true;
    generateJoke();
});