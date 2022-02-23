const popularMovieListRef = document.querySelector('.gallery');

const makePopularMoviesMarkup = (movies, genres) => {
  const genreList = (genres, arr) => {
    const makeGenreList = arr.map(el => {
      const movieGenre = genres.find(({ id, name }) => {
        if (el === id) {
          return name;
        }
      });
      return movieGenre.name;
    });
    return makeGenreList;
  };

  return movies
    .map(({ title, release_date, poster_path, genre_ids }) => {
      const year = new Date(release_date).getFullYear();
      const genre = genreList(genres, genre_ids);
      return `
      <li class="popular-card-item">
        <div class = "popular-movie-card">
            <img class="popular-movie-img movie-img"
                src="https://image.tmdb.org/t/p/w500${poster_path}"
                alt="${title}"
            />
            <h3 class="popular-movie-title movie-title">${title}</h3>
            <div class="popular-movie-card__meta">
                <p class="popular-movie-info movie-info popular-movie-info__genre">${genre.join(
                  ', ',
                )}</p>
                <p class="popular-movie-info movie-info popular-movie-info__year">${year}</p>
            </div>
            </div>
    </li>
    `;
    })
    .join('');
};

const renderMarkup = (movies, genres) => {
  const markup = makePopularMoviesMarkup(movies, genres);
  popularMovieListRef.insertAdjacentHTML('beforeend', markup);
};

export { renderMarkup };
