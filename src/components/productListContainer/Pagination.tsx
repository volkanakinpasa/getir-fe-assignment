import PaginationStyle from '../styles/Pagination.styled';
import ReactPaginate from 'react-paginate';

function Pagination({
  pageCount,
  handlePageClick,
}: {
  pageCount: number;
  handlePageClick: any;
}) {
  return (
    <PaginationStyle>
      <ReactPaginate
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={4}
        pageCount={pageCount}
        previousLabel="< Prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="prev"
        previousLinkClassName="page-link"
        nextClassName="next"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </PaginationStyle>
  );
}

export default Pagination;
