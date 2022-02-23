import ApiTMDB from './services/apiTMDB';
import Storage from './services/storage';
export default function app() {
  const api = new ApiTMDB();
  const genresStorage = new Storage(Storage.KEYS.GENRES);
  api.getGenres().then(genresStorage.save);
}
