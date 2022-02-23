import ApiTMDB from './services/apiTMDB';
import Storage from './services/storage';
import { onModalCard } from './services/modal-open';
export default async function app() {
  const api = new ApiTMDB();
  const genresStorage = new Storage(Storage.KEYS.GENRES);
  const genres = await api.getGenres();
  genresStorage.save(genres);
  onModalCard();
}
