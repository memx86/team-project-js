let page = 13;
let listFirstPage = 10;
let totalPages = 20;
const TYPES = {
  PREV: 'prev',
  NEXT: 'next',
  PAGE: 'page',
};
const refs = {
  prev: document.querySelector('[data-btn="prev"]'),
  next: document.querySelector('[data-btn="next"]'),
  pagination: document.querySelector('.pagination'),
  container: document.querySelector('.paginatio__container'),
};
export default function pagination() {
  refs.pagination.addEventListener('click', handlePaginationClick);
}
function handlePaginationClick(e) {
  const btn = e.target.dataset.btn;
  switch (btn) {
    case TYPES.PREV:
      goToPage(page - 1);
      break;
    case TYPES.NEXT:
      goToPage(page + 1);
      break;
    case TYPES.PAGE:
      const targetPage = getTargetPage(e.target);
      if (targetPage === page) return;
      goToPage(targetPage);
      break;
    default:
      return;
  }
}
function goToPage(targetPage) {
  console.log('Go to', targetPage);
}

function getTargetPage(target) {
  const buttons = [...getButtonsRef()];
  const index = buttons.findIndex(e => e === target);
  if (index === 0) return 1;
  if (index === buttons.length - 1) return totalPages;
  return index - 1 + listFirstPage;
}
function getButtonsRef() {
  return document.querySelectorAll('[data-btn="page"]');
}
function createList(first, last) {
  refs.container.innerHTML = '';
  let markup = '';
  for (let i = first; i < last; i += 1) {
    markup += createLinkMarkup(i);
  }
  refs.container.insertAdjacentHTML('beforeend', markup);
}
function createLinkMarkup(num) {
  return `<span class="pagination__button" data-btn="page">${num}</span>`;
}
