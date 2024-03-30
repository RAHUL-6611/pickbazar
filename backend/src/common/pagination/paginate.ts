import { APP_URL } from '../constants';
import { PaginatorInfo } from '../dto/paginator-info.dto';

export function paginate(
  totalItems: number,
  current_page = 1,
  pageSize = 10,
  count = 0,
  // maxPages = 10,
  url = '',
): PaginatorInfo {
  // calculate total pages
  const totalPages = Math.ceil(totalItems / pageSize);

  // ensure current page isn't out of range
  if (current_page < 1) {
    current_page = 1;
  } else if (current_page > totalPages) {
    current_page = totalPages;
  }

  // let startPage: number, endPage: number;
  // if (totalPages <= maxPages) {
  //   // total pages less than max so show all pages
  //   startPage = 1;
  //   endPage = totalPages;
  // } else {
  //   // total pages more than max so calculate start and end pages
  //   const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
  //   const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
  //   if (currentPage <= maxPagesBeforeCurrentPage) {
  //     // current page near the start
  //     startPage = 1;
  //     endPage = maxPages;
  //   } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
  //     // current page near the end
  //     startPage = totalPages - maxPages + 1;
  //     endPage = totalPages;
  //   } else {
  //     // current page somewhere in the middle
  //     startPage = currentPage - maxPagesBeforeCurrentPage;
  //     endPage = currentPage + maxPagesAfterCurrentPage;
  //   }
  // }

  // calculate start and end item indexes
  const startIndex = (current_page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  // create an array of pages to ng-repeat in the pager control
  // const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
  //   (i) => startPage + i,
  // );

  // return object with all pager properties required by the view
  return {
    total: totalItems,
    current_page: +current_page,
    count,
    last_page: totalPages,
    firstItem: startIndex,
    lastItem: endIndex,
    per_page: pageSize,
    first_page_url: `${APP_URL}${url}&page=1`,
    last_page_url: `${APP_URL}${url}&page=${totalPages}`,
    next_page_url:
      totalPages > current_page
        ? `${APP_URL}${url}&page=${Number(current_page) + 1}`
        : null,
    prev_page_url:
      totalPages > current_page
        ? `${APP_URL}${url}&page=${current_page}`
        : null,
  };
}
