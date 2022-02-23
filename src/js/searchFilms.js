import renderMarkup from './film_card';
import ApiTMDB from './services/apiTMDB';
import Pagination from './services/pagination';
import Storage from './services/storage';

const submitForm = document.querySelector('.header-form');
const gallery = document.querySelector('.gallery');
const ERROR_MESSAGE = 'Search is not successful. Enter the correct movie name.';
const searchApi = new ApiTMDB();
const storage = new Storage(Storage.KEYS.MOVIES);

const pagination = new Pagination({
  callback: paginationCallback,
});
const paginationCallback = page => {
  searchApi.page = page;
  searchApi.searchMovies().then(handleSuccess);
};
const handleSuccess = ({ results, total_pages: totalPages }) => {
  gallery.innerHTML = '';
  renderMarkup(results);
  storage.save(results);
  pagination.totalPages = totalPages;
};
const searchFilms = e => {
  gallery.innerHTML = '';
  const query = e.currentTarget.elements.search.value.trim();
  if (!query) {
    return;
  }
  searchApi.query = query;
  searchApi
    .searchMovies()
    .then(data => {
      handleSuccess(data);
      pagination.showPagination();
    })
    .catch(() => ERROR_MESSAGE);
};

submitForm.addEventListener('submit', searchFilms);
