import Pagination from './services/pagination';
export default function app() {
  const pagination = new Pagination({
    page: 10,
    totalPages: 19,
    callback: page => {
      console.log(`Запрос на бекенд по странице № ${page} и рендер галлереи`);
    },
  });
  pagination.showPagination();
}
