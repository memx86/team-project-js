/** Ожидает при вызове объект параметров:
 * 1. callback: callback-функция, которая будет вызвана при клике
 * на кнопку пагинации, в эту функцию будет передана новая страница.
 * 2. page: текущая страница, по умолчанию 1.
 * 3. totalPages: общее количество страниц, по умолчанию 1.
 * Сеттеры и геттеры для pages и totalPages
 * Пример создания экземпляра класса:
 * const pagination = new Pagination({
 *   page: 10,
 *   totalPages: 19,
 *   callback: page => {
 *     console.log(`Запрос на бекенд по странице № ${page} и рендер галлереи`);
 *   },
 * });
 */
export default class Pagination {
  static #TYPES = {
    PREV: 'prev',
    NEXT: 'next',
    PAGE: 'page',
  };
  #page;
  #totalPages;
  #listFirstPage;
  #listLastPage;
  constructor({ page = 1, totalPages = 1, callback = () => {} }) {
    this.refs = {
      prev: document.querySelector('[data-btn="prev"]'),
      next: document.querySelector('[data-btn="next"]'),
      pagination: document.querySelector('.pagination'),
      container: document.querySelector('.pagination__container'),
      dots: document.querySelectorAll('.dots'),
    };
    this.refs.pagination.addEventListener('click', this.handlePaginationClick);
    this.#totalPages = totalPages;
    this.callback = callback;
    this.getButtonsRef()[1].textContent = totalPages;
    this.goToPage(page);
  }
  handlePaginationClick = e => {
    const btn = e.target.dataset.btn;
    switch (btn) {
      case Pagination.#TYPES.PREV:
        this.goToPage(this.#page - 1);
        break;
      case Pagination.#TYPES.NEXT:
        this.goToPage(this.#page + 1);
        break;
      case Pagination.#TYPES.PAGE:
        const targetPage = this.getTargetPage(e.target);
        if (targetPage === this.#page) return;
        this.goToPage(targetPage);
        break;
      default:
        return;
    }
  };
  goToPage = targetPage => {
    if (targetPage > 1 && targetPage < this.#totalPages) {
      this.#page = targetPage;
    } else if (targetPage <= 1) {
      this.#page = 1;
    } else this.#page = this.#totalPages;
    this.#listFirstPage = this.#page - 2 > 1 ? this.#page - 2 : 1;
    this.#listLastPage = this.#page + 2 < this.#totalPages ? this.#page + 2 : this.#totalPages;
    this.callback(this.#page);
    this.handleButtonsAndDots();
    this.createList();
  };
  handleButtonsAndDots = () => {
    const buttons = [...this.getButtonsRef()];

    if (this.#listFirstPage <= 1) {
      buttons[0].classList.add('is-hidden');
    } else {
      buttons[0].classList.remove('is-hidden');
    }

    if (this.#listFirstPage < 3) {
      this.refs.dots[0].classList.add('is-hidden');
    } else this.refs.dots[0].classList.remove('is-hidden');

    if (this.#listLastPage >= this.#totalPages) {
      buttons.at(-1).classList.add('is-hidden');
    } else {
      buttons.at(-1).classList.remove('is-hidden');
    }

    if (this.#listLastPage > this.#totalPages - 1) {
      this.refs.dots[1].classList.add('is-hidden');
    } else this.refs.dots[1].classList.remove('is-hidden');

    if (this.#page === 1) {
      this.refs.prev.disabled = true;
    } else {
      this.refs.prev.disabled = false;
    }
    if (this.#page === this.#totalPages) {
      this.refs.next.disabled = true;
    } else {
      this.refs.next.disabled = false;
    }
  };
  getTargetPage = target => {
    const buttons = [...this.getButtonsRef()];
    const index = buttons.findIndex(e => e === target);
    if (index === 0) return 1;
    if (index === buttons.length - 1) return this.#totalPages;
    return index - 1 + this.#listFirstPage;
  };
  getButtonsRef = () => {
    return document.querySelectorAll('[data-btn="page"]');
  };
  createList = () => {
    this.refs.container.innerHTML = '';
    let markup = '';
    let firstPage = this.#listFirstPage < 1 ? 1 : this.#listFirstPage;
    let lastPage = this.#listLastPage > this.#totalPages ? this.#totalPages : this.#listLastPage;
    for (let i = firstPage; i <= lastPage; i += 1) {
      markup += this.createLinkMarkup(i);
    }
    this.refs.container.insertAdjacentHTML('beforeend', markup);
  };
  createLinkMarkup = num => {
    const active = num === this.#page ? 'pagination__button--active' : '';
    return `<span class="pagination__button ${active}" data-btn="page">${num}</span>`;
  };
  get page() {
    return this.#page;
  }
  set page(newPage) {
    this.#page = newPage;
  }
  get totalPages() {
    return this.#totalPages;
  }
  set totalPages(newTotalPages) {
    this.#totalPages = newTotalPages;
  }
}
