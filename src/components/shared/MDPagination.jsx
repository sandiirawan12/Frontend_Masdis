import classNames from "classnames";
import { DOTS } from "./usePagination";
import { usePagination } from "./usePagination";

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
  
    if (currentPage === 0 || paginationRange?.length < 2) {
      return null;
    }
  
    const onNext = () => {
      onPageChange(currentPage + 1);
    };
  
    const onPrevious = () => {
      onPageChange(currentPage - 1);
    };
  
    let lastPage = paginationRange[paginationRange?.length - 1];
    return (
      <ul
        className={classNames('pagination-container', { [className]: className })}
      >
        <li
          className={classNames('pagination-item', {
            disabled: Number(currentPage) === 1
          })}
          onClick={onPrevious}
        >
          Sebelumnya
        </li>
        {paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }
  
          return (
            <li
              className={classNames('pagination-item', {
                selected: pageNumber === Number(currentPage)
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={classNames('pagination-item', {
            disabled: Number(currentPage) === lastPage
          })}
          onClick={onNext}
        >
            Selanjutnya
        </li>
      </ul>
    );
  };
  
  export default MDPagination;