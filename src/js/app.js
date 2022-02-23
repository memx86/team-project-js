import ApiTMDB from './services/apiTMDB';
import Storage from './services/storage';
import Pagination from './services/pagination';
export default async function app() {
  const api = new ApiTMDB();
  const genresStorage = new Storage(Storage.KEYS.GENRES);
  const genres = await api.getGenres();
  genresStorage.save(genres);
  const pagination = new Pagination({
    page: 10,
    totalPages: 19,
    callback: page => {
      console.log(`Запрос на бекенд по странице № ${page} и рендер галлереи`);
    },
  });
  pagination.showPagination();
}
