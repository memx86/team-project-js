import { renderMarkup } from './templates/film_card';
import { api, pagination, moviesStorage } from './services';

const submitForm = document.querySelector('.header-form');
const gallery = document.querySelector('.gallery');
const ERROR_MESSAGE = 'Search is not successful. Enter the correct movie name.';

const paginationCallback = page => {
  api.page = page;
  api.searchMovies().then(handleSuccess);
};

const handleSuccess = ({ results, total_pages: totalPages }) => {
  gallery.innerHTML = '';
  renderMarkup(results);
  moviesStorage.save(results);
  pagination.callback = paginationCallback;
  pagination.page = api.page;
  pagination.totalPages = totalPages;
};
const searchFilms = async e => {
  e.preventDefault();
  gallery.innerHTML = '';
  const query = e.target.elements.search.value.trim();
  if (!query) {
    return;
  }
  api.query = query;
  try {
    const data = await api.searchMovies();
    handleSuccess(data);
    pagination.showPagination();
    e.target.reset();
  } catch (error) {
    console.error(error);
  }
};
const search = () => {
  submitForm.addEventListener('submit', searchFilms);
};
export default search;
