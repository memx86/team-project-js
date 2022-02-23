import Storage from './services/storage';
import notFoundImg from '../images/film_card/poster-img.jpg';
import notFoundImgRetina from '../images/film_card/poster-img@2x.jpg';
const movieListRef = document.querySelector('.gallery');

const genres = new Storage(Storage.KEYS.GENRES);
const arr = genres.get();

const makeMoviesMarkup = movies =>
  movies
    .map(({ title, release_date, poster_path, genre_ids, vote_average }) => {
      const genresNames = genre_ids.map(id => {
        const { name } = arr.find(item => item.id === id);
        return name;
      });
      const year = new Date(release_date).getFullYear();
      const poster2x = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : notFoundImgRetina;
      const poster = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : notFoundImg;
      return `
      <li class="card-item">
<div class = "movie-card">
<picture>
	<source
	srcset="
	${poster} 1x,
  ${poster2x} 2x,
  " 
 />
<img class="movie-img"
src="${poster}"
alt="${title}"
width="280"
height="398"
/>
</picture>
<h5 class="movie-title">${title}</h5>
<div class="container_movie-info">
<p class="movie-info">${genresNames.join(', ')} |  </p>
<p class="movie-info"> ${year} </p>
<p class="movie-rating">${vote_average ? vote_average : 'N/A'}</p>
</div>
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
