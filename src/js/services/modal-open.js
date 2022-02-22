import ApiTMDB from './apiTMDB';

// Создаем экземпляры классов
const apiTMDB = new ApiTMDB();

// Функция для тестировки запроса по получению 20 фильмов
async function fetchMovies() {
    const data = await apiTMDB.getTrending();
    console.log(data);
    return data;
}


// Функция создающая разметку для одного фильма
function makeOneMovieMarkup(data) {
    const markupMovie = data.map(({ title, poster_path, genre_ids, vote_average, vote_count, original_title, overview, popularity}) => {
        returne `<div class="modal">
    <button type="button" data-modal-close="movie-one">
        <svg class="modal__icon--close" id="" width="14" height="14">
            <use href="../images/sprite.svg#icon-close"></use>
        </svg>
    </button>
    <div class="modal__content">
        <div class="poster__wrapper">
            <img class="poster__img" alt="${title}" src="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" />
        </div>
        <div class="movie">
            <h2 class="movie__title uppercase">${title}</h2>
            <div class="movie__statistic">
                <ul class="movie__list--left">
                    <li class="movie__item--left">Vote &#47 Votes
                    </li>
                    <li class="movie__item--left">Popularity
                    </li>
                    <li class="movie__item--left">Original Title
                    </li>
                    <li class="movie__item--left">Genre
                    </li>
                </ul>
                <ul class="movie__list--right">
                    <li class="movie__item--right">
                        <span class="movie__average">${vote_average}</span>
                        <span>&#47</span>
                        <span class="movie__count">${vote_count}</span></p>
                    </li>
                    <li class="movie__item--right">${popularity}
                    </li>
                    <li class="movie__item--right uppercase">${original_title}
                    </li>
                    <li class="movie__item--right">${genre_ids}
                    </li>
                </ul>
            </div>
            <div class="movie__description">
                <h3 class="movie__about uppercase">About</h3>
                <p class="movie__text">${overview}</p>
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

// Функция, которая рендерит разметку в модальном окне
function renderMovieModal() {
    modalOneMovie.refs.modal.insertAdjacentHTML('beforeend', makeOneMovieMarkup(data));
    
}

// Функция для очищения разметки в модальном окне
function clearModal() {
    modalOneMovie.refs.modal.innerHTML = '';
}

// Функция для получения id фильма выбранного пользователем в галерее фильмов и открытия модального окна
function openMovieInModal(event) {
    event.preventDefault();
    apiTMDB.getTrending().then(data => {
        const { results } = data; 
        
    })
    
    // if (event.target=== event.currentTarget){
    //     return
    // };
    // modalOneMovie.onModalOpenBtnClick();
    apiTMDB.id = results[0].id;
    apiTMDB.getMovie().then(data => renderMovieModal(data)).catch(handleError);
}

window.addEventListener('click', openMovieInModal)

// Функция для сообщения пользователю об ошибке
const handleError=()=>{
    console.log(1111);
}





export { makeOneMovieMarkup };


// Функция для модального окна
//     export default class Modal {
//   constructor(name) {
//     this.refs = {
//       modal: document.querySelector(`[data-modal="${name}"]`),
//         closeBtn: document.querySelector(`[data-modal-close="${name}"]`),
       
//       };
//       const  items= document.querySelectorAll(`li`),
      
//     this.refs.openLi.addEventListener('click', this.onModalOpenLiClick);
//   }
//   onModalOpenLiClick = () => {
//     this.openModal();
//     this.refs.closeBtn.addEventListener('click', this.closeModal);
//     this.refs.modal.addEventListener('click', this.onBackdropClick);
//     document.addEventListener('keydown', this.onEscDown);
//   };
//   openModal = () => {
//     this.refs.modal.classList.remove('is-hidden');
//     document.body.classList.add('modal-open');
//   };
//   closeModal = () => {
//     this.refs.modal.classList.add('is-hidden');
//     document.body.classList.remove('modal-open');
//     this.refs.closeBtn.removeEventListener('click', this.closeModal);
//     this.refs.modal.removeEventListener('click', this.onBackdropClick);
//     document.removeEventListener('keydown', this.onEscDown);
//   };
//   onBackdropClick = e => {
//     if (e.target !== this.refs.modal) return;
//     this.closeModal();
//   };
//   onEscDown = e => {
//     if (e.code !== 'Escape') return;
//     this.closeModal();
//   };
// }


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