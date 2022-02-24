import ApiTMDB from './apiTMDB';
import Storage from './storage';
import Pagination from './pagination';

const api = new ApiTMDB();
const genresStorage = new Storage(Storage.KEYS.GENRES);
const moviesStorage = new Storage(Storage.KEYS.MOVIES);
const queuedStorage = new Storage(Storage.KEYS.QUEUED);
const watchedStorage = new Storage(Storage.KEYS.WATCHED);
const pagination = new Pagination({});

export { default } from './modal';
export { api, genresStorage, moviesStorage, queuedStorage, watchedStorage, pagination };