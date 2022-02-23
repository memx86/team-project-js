const movieListRef = document.querySelector('.gallery');

const makeMoviesMarkup = movies =>
  movies
    .map(({ title, release_date, poster_path, id, genre_ids, vote_count }) => {
      const year = new Date(release_date).getFullYear();
      return `
      <li class="card-item" data-id="${id}">
<div class = "movie-card">
<img class="movie-img"
src="https://image.tmdb.org/t/p/w500${poster_path}"
alt="${title}"
width="280"
height="398"
/>
<h5 class="movie-title">${title}</h5>
<p class="movie-info">${genre_ids.join(', ')}</p>
<p class="movie-info">${year}</p>
<p class="movie-rating">${vote_count}</p>
</div>
</li>
`;
    })
    .join('');

const renderMarkup = movies => {
  const markup = makeMoviesMarkup(movies);
  movieListRef.insertAdjacentHTML('beforeend', markup);
};

export { renderMarkup };
