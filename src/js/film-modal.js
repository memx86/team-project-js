import { api } from './services';
// import { renderMarkup } from './templates/film_card';
import makeOneMovieMarkup from './templates/film-modal';

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
  api.id = cardRef.dataset.id;

  const dataMovie = await api.getMovie();

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

function onModalCard() {
  //  временный вызов функции для получения 20 карточек и их рендера
  //   fetchMovies();
  // вешаем слушателя на общего родителя галерею
  movieListRef.addEventListener('click', onModalOpenClick);
}
export default onModalCard;
