import Modal from './modal';
import ApiTMDB from './apiTMDB';

const modalOneMuvie = new Modal("movie-one");
const apiTMDB = new ApiTMDB();

function makeOneMuvieMarkup(data) {
    const markupMuvie = data.map(({ title, poster_path, genre_ids, vote_average, vote_count, original_title, overview, popularity}) => {
        returne `<div class="modal">
        <button data-modal-close="movie-one">
        <svg id="" width="14" height="14"></svg>
        </button>
        <div class="modal__content">
    <div class="poster__wrapper">
        <img class="poster__img" alt="${title}" src="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" />
    </div>
    <div class="description__wrapper">
        <h2 class="movie__title">${title}</h2>
        <div class="movie__statistic">
        <ul class="movie__list">
            <li class="movie__item">
                <p class="movie__item--left">Vote &#47 Votes</p>
                <p class="movie__item--right">
                <span class="average">${vote_average}</span>
                <span>&#47</span>
                <span class="count">${vote_count}</span></p>
            </li>
            <li class="movie__item">
                <p class="movie__item--left">Popularity</p>
                <p class="movie__item--right">${popularity}</p>
            /li>
            </li>

            <li class="movie__item">
            <p class="movie__item--left">Original Title</p>
            <p class="movie__item--right">${original_title}</p>
            /li>
            </li>

            <li class="movie__item">
            <p class="movie__item--left">Genre</p>
            <p class="movie__item--right">${genre_ids}</p>
            </li>
        </ul>
        </div>
        <div class="movie__content">
        <h3 class="content__title">About</h3>
        <p class="content__text">${overview}</p>
        </div>
        <ul class="movie__btn">
        <li>
            <button type="button" class="" id="watched">add to Watched</button>
        </li>
        <li>
            <button type="button" class="" id="queue">add to queue</button>
        </li>
        <li>
            <button type="button" class="" id="trailer">trailer</button>
        </li>
        </ul>
    </div>
</div>
</div>`
    }).join('')
}


function renderMuvieModal() {
    modalOneMuvie.refs.modal.insertAdjacentHTML('beforeend', makeOneMuvieMarkup(data))
    
}

renderMuvieModal()
console.log(1111);


export { makeOneMuvieMarkup };


// "id": 632727,
// "title": "Texas Chainsaw Massacre",
// "overview": "In this sequel, influencers looking to breathe new life into a Texas ghost town encounter Leatherface, an infamous killer who wears a mask of human skin.",
// "release_date": "2022-02-18",
// "adult": false,
// "backdrop_path": "/aTSA5zMWlVFTYBIZxTCMbLkfOtb.jpg",
// "vote_count": 291,
// "genre_ids": [
// 27
// ],
// "vote_average": 5.3,
// "original_language": "en",
// "original_title": "Texas Chainsaw Massacre",
// "poster_path": "/meRIRfADEGVo65xgPO6eZvJ0CRG.jpg",
// "video": false,
// "popularity": 316.107,
// "media_type": "movie"


// {
// "adult": false,
// "backdrop_path": "/aTSA5zMWlVFTYBIZxTCMbLkfOtb.jpg",
// "belongs_to_collection": {
// "id": 111751,
// "name": "Texas Chainsaw Massacre Collection",
// "poster_path": "/uA7YQaZDecsGKGuHoYFk4BtCTqJ.jpg",
// "backdrop_path": "/9V5kaGBAjzwHmqvmZuazY9SbZwi.jpg"
// },
// "budget": 20000000,
// "genres": [
// {
// "id": 27,
// "name": "Horror"
// }
// ],
// "homepage": "https://www.netflix.com/title/81483977",
// "id": 632727,
// "imdb_id": "tt11755740",
// "original_language": "en",
// "original_title": "Texas Chainsaw Massacre",
// "overview": "In this sequel, influencers looking to breathe new life into a Texas ghost town encounter Leatherface, an infamous killer who wears a mask of human skin.",
// "popularity": 316.107,
// "poster_path": "/meRIRfADEGVo65xgPO6eZvJ0CRG.jpg",
// "production_companies": [
// {
// "id": 923,
// "logo_path": "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png",
// "name": "Legendary Pictures",
// "origin_country": "US"
// },
// {
// "id": 125512,
// "logo_path": null,
// "name": "Bad Hombre Films",
// "origin_country": "US"
// },
// {
// "id": 142183,
// "logo_path": null,
// "name": "Exurbia Films",
// "origin_country": "US"
// }
// ],
// "production_countries": [
// {
// "iso_3166_1": "US",
// "name": "United States of America"
// }
// ],
// "release_date": "2022-02-18",
// "revenue": 0,
// "runtime": 81,
// "spoken_languages": [
// {
// "english_name": "English",
// "iso_639_1": "en",
// "name": "English"
// }
// ],
// "status": "Released",
// "tagline": "The face of madness returns.",
// "title": "Texas Chainsaw Massacre",
// "video": false,
// "vote_average": 5.2,
// "vote_count": 307
// }