import ApiTMDB from './apiTMDB';
import Modal from './modal';

// подключить АйДи фильма из модалки фильма
const filmId = 22;
const searchApi = new ApiTMDB();
searchApi.id = filmId;

const modalApp = new Modal(trailer);

const backdrop = document.querySelector('[data-modal="trailer"]');
const trailerWindow = document.querySelector('.trailer');
const trailerWindowBtn = document.querySelector('#trailer');




// функция открытия модалки с трейлером
function openTrailerFunction() {
    const endpoint = `${ApiTMDB.#ENDPOINTS.GET_MOVIE}/${this.#id}/videos`;
    const resultKey = searchApi.getData(endpoint).results.key;


    trailerWindow.innerHTML = `<iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/${resultKey}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        >
    </iframe>`;
}

trailerWindowBtn.addEventListener("click", openTrailerFunction);