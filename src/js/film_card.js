const movieListRef = document.querySelector('.gallery');

const makeMoviesMarkup = movies =>
  movies
    .map(({ title, release_date, poster_path, genre_ids }) => {
      const year = new Date(release_date).getFullYear();
      return `
      <li class="card-item">
<div class = "movie-card">
<img class="movie-img"
src="https://image.tmdb.org/t/p/w500${poster_path}"
alt="${title}"
width="280"
height="440"
/>
<h5 class="movie-title">${title}</h5>
<p class="movie-info">${genre_ids.join(', ')}</p>
<p class="movie-info">${year}</p>
</div>
</li>
`;
    })
    .join('');

const renderMarkup = movies => {
  const markup = makeMoviesMarkup(movies);
  movieListRef.incertAdjacentHTML('beforeend', markup);
};

export { renderMarkup };
