// Error message: "Search result not successful. Enter the correct movie name."

import renderMarkup from "./film_card";
import ApiTMDB from "./services/apiTMDB";

const submitForm = document.querySelector('.header-form');
const gallery = document.querySelector('.gallery');

const searchApi = new ApiTMDB;

const searchFilms = (e) => {
    gallery.innerHTML = '';
    const value = e.target.value.trim();
    if (!value) {
        return;
    };

    searchApi.query = value;
    const filmsPromis = searchApi.searchMovies();
    filmsPromis.then((data) => {
        renderMarkup(data);
        return;
    }).catch(() => "error");
};


submitForm.addEventListener("submit", searchFilms);





