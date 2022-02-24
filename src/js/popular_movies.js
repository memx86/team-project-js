import { renderMarkup } from './film_card';
import ApiTMDB from './services/apiTMDB';
import Storage from './services/storage';
import Pagination from './services/pagination';

const gallery = document.querySelector('.gallery');

const apiPopular = new ApiTMDB();
const localStorageGenres = new Storage(Storage.KEYS.GENRES);
const pagination = new Pagination({
  callback: moreMovies,
});

async function renderMovies() {
  try {
    gallery.innerHTML = ' ';
    const genres = await apiPopular.getGenres();
    localStorageGenres.save(genres);

    const movies = await apiPopular.getTrending();
    renderMarkup(movies.results, genres);

    pagination.totalPages = movies.total_pages;
    pagination.showPagination();
  } catch (error) {
    console.log(error);
  }
}

async function moreMovies() {
  try {
    gallery.innerHTML = ' ';
    apiPopular.page = pagination.page;
    const genresArr = localStorageGenres.get();

    const movies = await apiPopular.getTrending();
    renderMarkup(movies.results, genresArr);
  } catch (error) {
    console.log(error);
  }
}

renderMovies();
