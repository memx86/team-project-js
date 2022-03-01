import { api, watchedStorage, queuedStorage } from './services';
import makeOneMovieMarkup from './templates/film-modal';
import { MARKER, renderWatched, renderQueue } from './my_library';

const BTNS = {
  QUEUE: 'queue',
  WATCHED: 'watched',
  TRAILER: 'trailer',
  ADD: 'Add to',
  REMOVE: 'Remove from',
};
// получаем ссылку на бэкдроп
const backdropRef = document.querySelector(`[data-modal="movie-one"]`);
// получаем ссылку на модалку
const modalRef = document.querySelector(`.modal`);
// получаем ссылку на галерею в которую рендерятся карточки фильмов
const movieListRef = document.querySelector('.gallery');
// получаем ссылку на кнопку закрытия модалки
const closeBtnRef = document.querySelector(`[data-modal-close="movie-one"]`);
const wrapperModalRef = document.querySelector('.wrapper-modal');

let dataMovie = {};
let watched = false;
let queued = false;

// Функция для тестировки запроса по получению 20 фильмов
// async function fetchMovies() {
//   try {
//     const data = await api.getTrending();
//     const { results } = data;
//     renderMarkup(results);
//   } catch (error) {
//     console.log(error);
//     handleError();
//   }
// }

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
  const id = Number(cardRef.dataset.id);
  watched = watchedStorage.checkMovie(id);
  queued = queuedStorage.checkMovie(id);

  api.id = id;
  dataMovie = await api.getMovie();

  wrapperModalRef.insertAdjacentHTML(
    'beforeend',
    makeOneMovieMarkup({ ...dataMovie, watched, queued }),
  );

  openModal();

  closeBtnRef.addEventListener('click', closeModal);
  backdropRef.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscDown);
  wrapperModalRef.querySelector('.buttons__container').addEventListener('click', onModalButton);
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
  wrapperModalRef.querySelector('.buttons__container').removeEventListener('click', onModalButton);
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
function onModalButton(e) {
  const btn = e.target.dataset.btn;
  if (!btn) return;
  switch (btn) {
    case BTNS.WATCHED:
      if (watched) {
        watchedStorage.deleteMovie(dataMovie.id);
      } else {
        watchedStorage.saveMovie(dataMovie);
      }
      watched = !watched;
      changeBtnTextWatched(e.target);
      if (movieListRef.classList.contains(MARKER.WATCHED)) {
        renderWatched();
      }
      return;
    case BTNS.QUEUE:
      if (queued) {
        queuedStorage.deleteMovie(dataMovie.id);
      } else {
        queuedStorage.saveMovie(dataMovie);
      }
      queued = !queued;
      changeBtnTextQueue(e.target);
      if (movieListRef.classList.contains(MARKER.QUEUE)) {
        renderQueue();
      }
      return;
    case BTNS.TRAILER:
      return;
    default:
      return;
  }
}

function changeBtnTextWatched(btn) {
  btn.textContent = `${watched ? BTNS.REMOVE : BTNS.ADD} ${BTNS.WATCHED}`;
}

function changeBtnTextQueue(btn) {
  btn.textContent = `${queued ? BTNS.REMOVE : BTNS.ADD} ${BTNS.QUEUE}`;
}

function onModalCard() {
  //  временный вызов функции для получения 20 карточек и их рендера
  //   fetchMovies();
  // вешаем слушателя на общего родителя галерею
  movieListRef.addEventListener('click', onModalOpenClick);
}
export default onModalCard;
