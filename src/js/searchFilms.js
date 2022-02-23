// Error message: "Search result not successful. Enter the correct movie name."

import renderMarkup from "./film_card";
import ApiTMDB from "./services/apiTMDB";

const submitForm = document.querySelector('.header-form');
const gallery = document.querySelector('.gallery');

const searchApi = new ApiTMDB();

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
        return;
    }).catch(() => "error");
};


submitForm.addEventListener("submit", searchFilms);





