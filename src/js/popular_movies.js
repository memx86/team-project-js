import { renderMarkup } from './templates/film_card';
import { api, pagination } from './services';

const gallery = document.querySelector('.gallery');

async function popularMovies() {
  try {
    gallery.innerHTML = ' ';
    const { results, total_pages: totalPages } = await api.getTrending();
    renderMarkup(results);
    pagination.page = api.page;
    pagination.totalPages = totalPages;
    pagination.callback = moreMovies;
    pagination.showPagination();
  } catch (error) {
    console.log(error);
  }
}

async function moreMovies() {
  try {
    gallery.innerHTML = ' ';
    api.page = pagination.page;
    const { results } = await api.getTrending();
    renderMarkup(results);
  } catch (error) {
    console.log(error);
  }
}

export default popularMovies;
