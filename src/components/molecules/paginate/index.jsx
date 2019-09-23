import React from 'react';
import ReactPaginate from 'react-paginate';
import './style.css';

export default function index() {
  const change = (data) => {
    const currentPage = data.selected;
    const offset = currentPage + 1;
    console.log(offset);
    return offset;
  }

  return (
    <div className="pagination">
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={2}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={change}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </div>
  )
}
