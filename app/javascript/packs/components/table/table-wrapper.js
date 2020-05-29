import React from "react";

export const TableWrapper = ({ children }) => {
  return (
    <div className="my-8 shadow overflow-hidden sm:rounded-lg">
      <div className="align-middle inline-block w-full overflow-x-auto border-b border-gray-200">
        <table className="min-w-full">{children}</table>
      </div>
    </div>
  );
};
