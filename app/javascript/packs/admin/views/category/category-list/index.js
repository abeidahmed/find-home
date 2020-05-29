import React, { useState, useContext } from "react";
import { AdminLayout } from "@components/layout";
import CategoryTable from "./components/category-table";
import { fetchCategoriesApi } from "@api/category/category-list";
import Icon from "@components/icon";
import { ModalProvider } from "@/app";
import Pagination from "./components/pagination";
import queryString from "query-string";
import { SearchField } from "@components/search";
import { Spinner } from "@components/spinner";
import { useAddQuery } from "@utils/add-query";
import { usePaginatedQuery } from "react-query";

const CategoryList = ({ location }) => {
  const { dispatch } = useContext(ModalProvider);

  let queryParam = queryString.parse(location.search);
  let pageNumber = queryParam.page;
  let searchTerm = queryParam.search;

  const [searchValue, setSearchValue] = useState(searchTerm);
  const [page, setPage] = useState(pageNumber);
  const query = useAddQuery();

  const { status, resolvedData, error } = usePaginatedQuery(
    ["categoryList", page, searchTerm],
    fetchCategoriesApi
  );

  if (status === "loading" || status === "error") return <Spinner />;

  return (
    <AdminLayout>
      <div className="flex items-center justify-between space-x-4">
        <div className="max-w-md flex-1">
          <SearchField
            placeholder="Search categories by title"
            show={searchValue}
            clear={() => {
              setSearchValue("");
              query("search", "");
            }}
            value={searchValue}
            onChange={e => {
              setSearchValue(e.target.value);
              query("search", e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={() =>
              dispatch({ type: "OPEN_MODAL", modalType: "ADD_CATEGORY", modalProps: {} })
            }
            className="group flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <span className="-ml-1 pr-1">
              <Icon
                icon="plus"
                className="h-5 w-5 text-gray-200 group-hover:text-white transition ease-in-out duration-150"
              />
            </span>
            Add category
          </button>
        </div>
      </div>
      <CategoryTable categories={resolvedData.data.categories} />
      <Pagination pageInfo={resolvedData.data.pageInfo} setPage={setPage} />
    </AdminLayout>
  );
};

export default CategoryList;
