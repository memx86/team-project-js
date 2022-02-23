import ApiTMDB from './apiTMDB';
import { renderMarkup } from '../film_card';
import Storage from './storage';

// Создаем экземпляры классов
const apiTMDB = new ApiTMDB();
const storage = new Storage(Storage.KEYS.GENRES);
const arr = storage.get();
const watched = new Storage(Storage.KEYS.WATCHED);
const queque = new Storage(Storage.KEYS.QUEUED);

// Вводим переменную для ссылок на кнопки из динамической разметки
let refs = {
  btnWatchedRef: null,
  btnQueueRef: null,
  btnTrailerRef: null,
};

let dataMovie = {};

// получаем ссылку на бэкдроп
const backdropRef = document.querySelector(`[data-modal="movie-one"]`);
// получаем ссылку на модалку
const modalRef = document.querySelector(`.modal`);
// получаем ссылку на галерею в которую рендерятся карточки фильмов
const movieListRef = document.querySelector('.gallery');
// получаем ссылку на кнопку закрытия модалки
const closeBtnRef = document.querySelector(`[data-modal-close="movie-one"]`);
const wrapperModalRef = document.querySelector('.wrapper-modal');

// Функция для тестировки запроса по получению 20 фильмов
async function fetchMovies(event) {
  try {
    const data = await apiTMDB.getTrending();
    const { results } = data;
    renderMarkup(results);
  } catch (error) {
    console.log(error);
    handleError();
  }
}

// Функция создающая разметку для одного фильма
function makeOneMovieMarkup(dataMovie) {
  const {
    title,
    poster_path,
    genres,
    vote_average,
    vote_count,
    original_title,
    overview,
    popularity,
  } = dataMovie;
  // для получения жанров фильма
  const arrNames = [];
  const genresNames = genres.map(genre => {
    arrNames.push(genre.name);
    return arrNames;
  });
  return `<div class="modal__content">
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
                        <span class="movie__count">${vote_count}</span>
                    </li>
                    <li class="movie__item--right">${popularity}
                    </li>
                    <li class="movie__item--right uppercase">${original_title}
                    </li>
                    <li class="movie__item--right">${arrNames.join(', ')}
                    </li>
                </ul>
            </div>
            <div class="movie__description">
                <h3 class="movie__about uppercase">About</h3>
                <p class="movie__text">${overview}</p>
            </div>
            <div class="movie__btn buttons__container">
                    <button type="button" class="btn--modal  btn--on" id="watched">add to Watched</button>
                    <button type="button" class="btn--modal  btn--on" id="queue">add to queue</button>
                    <button type="button" class="btn--modal  btn--on" id="trailer">trailer</button>
            </div>
        </div>
    </div>`;
}

// Функция для очищения разметки в модальном окне
function clearModal() {
  wrapperModalRef.innerHTML = '';
}

// Функция для сообщения пользователю об ошибке
const handleError = () => {
  console.log(1111);
};

// Функция для модального окна
async function onModalOpenClick(event) {
  const cardRef = event.target.closest('.card-item');
  if (event.target === event.currentTarget || !cardRef) {
    return;
  }
  apiTMDB.id = cardRef.dataset.id;

  dataMovie = await apiTMDB.getMovie();
  wrapperModalRef.insertAdjacentHTML('beforeend', makeOneMovieMarkup(dataMovie));

  onTakeRefs();

  if (checkInStorageWatched(apiTMDB.id)) {
    refs.btnWatchedRef.classList.remove('btn--on');
    refs.btnWatchedRef.classList.add('btn--off');
    refs.btnWatchedRef.textContent = 'Remuve to watched';
  }
  if (checkInStorageQueque(apiTMDB.id)) {
    refs.btnQueueRef.textContent = 'Remuve to queque';
    refs.btnQueueRef.classList.remove('btn--on');
    refs.btnQueueRef.classList.add('btn--off');
  }

  openModal();

  closeBtnRef.addEventListener('click', closeModal);
  backdropRef.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscDown);
  return dataMovie;
}

function openModal() {
  backdropRef.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
}

function closeModal() {
  backdropRef.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  closeBtnRef.removeEventListener('click', onBtnClick);
  backdropRef.removeEventListener('click', onBackdropClick);
  document.removeEventListener('keydown', onEscDown);
  clearModal();
}
function onBackdropClick(e) {
  if (e.target !== backdropRef) return;
  closeModal();
}
function onEscDown(e) {
  if (e.code !== 'Escape') return;
  closeModal();
}
function onBtnClick(e) {
  if (e.code !== closeBtnRef) return;
  closeModal();
}

function onTakeRefs() {
  refs = {
    btnWatchedRef: document.querySelector('#watched'),
    btnQueueRef: document.querySelector('#queue'),
    btnTrailerRef: document.querySelector('#trailer'),
  };

  return refs;
}

function checkInStorageWatched(id) {
  return watched.checkMovie(id);
}

function checkInStorageQueque(id) {
  return queque.checkMovie(id);
}

function onSaveMuvieWatched(movie) {
  watched.saveMovie(movie);
  refs.btnWatchedRef.textContent = 'Remuve to watched';
  refs.btnWatchedRef.classList.remove('btn--on');
  refs.btnWatchedRef.classList.add('btn--off');
}

function onSaveMuvieQueque(movie) {
  watched.saveMovie(movie);
  refs.btnQueueRef.textContent = 'Remuve to queque';
  refs.btnQueueRef.classList.remove('btn--on');
  refs.btnQueueRef.classList.add('btn--off');
}

function onDeleteMuvieWatched(movie) {
  watched.deleteMovie(movie);
  refs.btnWatchedRef.textContent = 'Add to Watched';
  refs.btnWatchedRef.classList.remove('btn--off');
  refs.btnWatchedRef.classList.add('btn--on');
}

function onDeleteMuvieQueque(movie) {
  watched.deleteMovie(movie);
  refs.btnQueueRef.textContent = 'Add to queque';
  refs.btnQueueRef.classList.remove('btn--off');
  refs.btnQueueRef.classList.add('btn--on');
}

function onModalCard() {
  //  временный вызов функции для получения 20 карточек и их рендера
  fetchMovies();
  // вешаем слушателя на общего родителя галерею
  movieListRef.addEventListener('click', onModalOpenClick);
}

export { onModalCard };
