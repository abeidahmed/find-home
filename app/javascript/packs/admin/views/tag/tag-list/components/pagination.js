import React from "react";
import { connect } from "react-redux";
import { AdminPagination } from "@components/pagination";

const Pagination = ({
  currentPage,
  hasPreviousPage,
  hasNextPage,
  totalPages,
  totalItems,
  startIndex,
  endIndex
}) => {
  return (
    <AdminPagination
      currentPage={currentPage}
      hasPreviousPage={hasPreviousPage}
      hasNextPage={hasNextPage}
      totalPages={totalPages}
      totalItems={totalItems}
      startIndex={startIndex}
      endIndex={endIndex}
    />
  );
};

const mapStateToProps = state => {
  const {
    currentPage,
    hasPreviousPage,
    hasNextPage,
    totalPages,
    totalItems,
    startIndex,
    endIndex
  } = state.tagList.pageInfo;
  return {
    currentPage,
    hasPreviousPage,
    hasNextPage,
    totalPages,
    totalItems,
    startIndex,
    endIndex
  };
};

export default connect(
  mapStateToProps,
  null
)(Pagination);
