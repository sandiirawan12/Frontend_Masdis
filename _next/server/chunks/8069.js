"use strict";
exports.id = 8069;
exports.ids = [8069];
exports.modules = {

/***/ 8069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ shared_MDPagination)
});

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/shared/usePagination.jsx

const DOTS = '...';

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({
    length
  }, (_, idx) => idx + start);
};

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}) => {
  const paginationRange = (0,external_react_.useMemo)(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize); // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS

    const totalPageNumbers = siblingCount + 5;
    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(Number(currentPage) - Number(siblingCount), 1);
    const rightSiblingIndex = Math.min(Number(currentPage) + siblingCount, totalPageCount);
    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/shared/MDPagination.jsx






const MDPagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || (paginationRange === null || paginationRange === void 0 ? void 0 : paginationRange.length) < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[(paginationRange === null || paginationRange === void 0 ? void 0 : paginationRange.length) - 1];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
    className: external_classnames_default()('pagination-container', {
      [className]: className
    }),
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      className: external_classnames_default()('pagination-item', {
        disabled: Number(currentPage) === 1
      }),
      onClick: onPrevious,
      children: "Sebelumnya"
    }), paginationRange.map(pageNumber => {
      if (pageNumber === DOTS) {
        return /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "pagination-item dots",
          children: "\u2026"
        });
      }

      return /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: external_classnames_default()('pagination-item', {
          selected: pageNumber === Number(currentPage)
        }),
        onClick: () => onPageChange(pageNumber),
        children: pageNumber
      });
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: external_classnames_default()('pagination-item', {
        disabled: Number(currentPage) === lastPage
      }),
      onClick: onNext,
      children: "Selanjutnya"
    })]
  });
};

/* harmony default export */ const shared_MDPagination = (MDPagination);

/***/ })

};
;