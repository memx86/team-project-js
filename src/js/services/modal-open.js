import ApiTMDB from './apiTMDB';
import { renderMarkup } from '../film_card';
import Storage from './storage';

// Создаем экземпляры классов
const apiTMDB = new ApiTMDB();
const storage = new Storage('MOVIES');

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
    genre_ids,
    vote_average,
    vote_count,
    original_title,
    overview,
    popularity,
  } = dataMovie;
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
                    <li class="movie__item--right">${genre_ids}
                    </li>
                </ul>
            </div>
            <div class="movie__description">
                <h3 class="movie__about uppercase">About</h3>
                <p class="movie__text">${overview}</p>
            </div>
            <div class="movie__btn buttons__container">
                    <button type="button" class="btn--modal btn--on" id="watched">add to Watched</button>
                    <button type="button" class="btn--modal btn--on" id="queue">add to queue</button>
                    <button type="button" class="btn--modal btn--on" id="trailer">trailer</button>
            </div>
        </div>
    </div>`;
}

// Функция для очищения разметки в модальном окне
function clearModal() {
  wrapperModalRef.innerHTML = '';
}

//  временный вызов функции для получения 20 карточек и их рендера
fetchMovies();

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

  const dataMovie = await apiTMDB.getMovie();

  wrapperModalRef.insertAdjacentHTML('beforeend', makeOneMovieMarkup(dataMovie));

  openModal();

  closeBtnRef.addEventListener('click', closeModal);
  backdropRef.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscDown);
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

// вешаем слушателя на общего родителя галерею
movieListRef.addEventListener('click', onModalOpenClick);
