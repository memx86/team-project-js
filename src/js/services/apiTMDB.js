export default class ApiTMDB {
  static #API_KEY = 'fadfbb72581e18342bb7490adda20bdd';
  static #BASE_URL = 'https://api.themoviedb.org/3';
  static #ENDPOINTS = {
    TRENDING: '/trending/movie/day',
    SEARCH_MOVIES: '/search/movie',
    GET_MOVIE: '/movie',
  };
  static #COMMON_PARAMS = new URLSearchParams({
    api_key: ApiTMDB.#API_KEY,
    include_adult: false,
    language: 'en-US',
  });
  #page = 1;
  #query;
  #id;

  getData = async (endpoint, params = '') => {
    const url = `${ApiTMDB.#BASE_URL}${endpoint}?${params}&${ApiTMDB.#COMMON_PARAMS}`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.statusText);
  };

  getTrending = async () => {
    const params = new URLSearchParams({
      page: this.#page,
    });
    return await this.getData(ApiTMDB.#ENDPOINTS.TRENDING, params);
  };

  searchMovies = async () => {
    const params = new URLSearchParams({
      query: this.#query,
      page: this.#page,
    });
    return await this.getData(ApiTMDB.#ENDPOINTS.SEARCH_MOVIES, params);
  };

  getMovie = async () => {
    const endpoint = `${ApiTMDB.#ENDPOINTS.GET_MOVIE}/${this.#id}`;
    return await this.getData(endpoint);
  };

  incrementPage = () => {
    this.#page += 1;
  };
  get page() {
    return this.#page;
  }
  set page(newPage) {
    this.#page = newPage;
  }
  get query() {
    return this.#query;
  }
  set query(newQuery) {
    this.#query = newQuery;
  }
  get id() {
    return this.#id;
  }
  set id(newId) {
    this.#id = newId;
  }
}
