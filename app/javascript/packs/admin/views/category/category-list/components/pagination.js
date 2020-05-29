import React from "react";
import { AdminPagination } from "@components/pagination";

const Pagination = ({
  setPage,
  pageInfo: {
    currentPage,
    hasPreviousPage,
    hasNextPage,
    totalPages,
    totalItems,
    startIndex,
    endIndex
  }
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
      setPage={setPage}
    />
  );
};

export default Pagination;
