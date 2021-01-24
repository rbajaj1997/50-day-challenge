const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';


const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = search.value;
    search.value = '';
    if (val && val !== '') {
        searchMovies(val);
    }
});

makeCall();

async function makeCall() {
    const results = await fetch(API_URL);
    const data = await results.json();
    setMovies(data.results);
}


async function searchMovies(term) {
    const results = await fetch(`${SEARCH_API}${term}"`);
    const data = await results.json();
    setMovies(data.results);
}

function setMovies(movies) {
    main.innerHTML = ``;
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const elem = document.createElement('div');
        elem.classList.add('movie');
        elem.innerHTML = `<img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class=${getColor(vote_average)}>${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>`;

        main.appendChild(elem);
    });
}


function getColor(vote) {
    if (vote > 8)
        return 'green';
    else if (vote > 5)
        return 'orange';
    else
        return 'red';
}