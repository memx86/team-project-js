// Error message: "Search result not successful. Enter the correct movie name."

import renderMarkup from "./film_card";
import ApiTMDB from "./services/apiTMDB";
import Pagination from "./services/pagination";
import Storage from "./services/storage";

const submitForm = document.querySelector('.header-form');
const gallery = document.querySelector('.gallery');

const searchApi = new ApiTMDB();
const storage = new Storage(Storage.KEYS.MOVIES);

const pagination = new Pagination({
    callback: paginationCallback,
});

const searchFilms = (e) => {
    gallery.innerHTML = '';
    const {
    elements: { search }
    } = e.currentTarget;
    const value = search.value.trim();
    if (!value) {
        return;
    };

    searchApi.query = value;
    
    searchApi.searchMovies().then((data) => {
        renderMarkup(data.results);
        storage.save(data.results);
        pagination.totalPages = data.total_pages;
        pagination.showPagination();
        return;
    }).catch(() => "error");
};


submitForm.addEventListener("submit", searchFilms);

// pagination---------------------------------------

function paginationCallback(page) {
    searchApi.page = page;
    searchApi.searchMovies();
}