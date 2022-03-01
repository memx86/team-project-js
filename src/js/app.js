import genres from './genres';
import popularMovies from './popular_movies';
import search from './searchFilms';
import filmModal from './film-modal';
import { myLibrary } from './my_library';

export default async function app() {
  genres();
  popularMovies();
  search();
  filmModal();
  myLibrary();
}
