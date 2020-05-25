import React from "react";
import { connect } from "react-redux";
import Icon from "@components/icon";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { useAddQuery } from "@utils/add-query";

const Pagination = ({ currentPage, match, hasPreviousPage, hasNextPage, totalPages }) => {
  const query = useAddQuery();

  let pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          type="button"
          onClick={query("page", currentPage - 1)}
          disabled={!hasPreviousPage}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={query("page", currentPage + 1)}
          disabled={!hasNextPage}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm leading-5 text-gray-700">
            Showing <span className="font-medium">1 </span>
            to <span className="font-medium">10 </span>
            of <span className="font-medium">97 </span>
            results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex shadow-sm">
            <button
              type="button"
              disabled={!hasPreviousPage}
              onClick={query("page", currentPage - 1)}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
              aria-label="Previous"
            >
              <Icon icon="chevron-left" className="h-5 w-5" />
            </button>
            {pageNumbers.map(pageNumber => (
              <button
                key={pageNumber}
                type="button"
                onClick={query("page", pageNumber)}
                className={`${currentPage === pageNumber &&
                  "text-indigo-900 bg-indigo-100"} -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
              >
                {pageNumber}
              </button>
            ))}
            <button
              type="button"
              disabled={!hasNextPage}
              onClick={query("page", currentPage + 1)}
              className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
              aria-label="Next"
            >
              <Icon icon="chevron-right" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { currentPage, hasPreviousPage, hasNextPage, totalPages } = state.userList.pageInfo;
  return {
    totalPages,
    currentPage,
    hasPreviousPage,
    hasNextPage
  };
};

export default connect(
  mapStateToProps,
  null
)(Pagination);
