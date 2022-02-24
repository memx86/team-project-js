// Функция создающая разметку для одного фильма
export default function makeOneMovieMarkup(dataMovie) {
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
