import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';

import './pagination.css';

const Pagination = ({ countriesForPage, allCountries, clickPag }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  const totalPages = Math.ceil(allCountries / countriesForPage);
  const pageNumbers = [];

  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div className="paginationContainer">
      <button
          className={`paginationButton ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => {
          if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
          }
        }}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => clickPag(pageNumber)}
          className={`numbers ${pageNumber === currentPage ? 'activePage' : ''}`}
          disabled={pageNumber === currentPage}
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => {
          if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1));
          }
        }}
        className={`paginationButton ${currentPage === totalPages ? 'disabled' : ''}`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
