import React, { useState } from "react";
import { AdminLayout } from "@components/layout";
import { connect } from "react-redux";
import { fetchTagsApi } from "@api/tag/tag-list";
import Icon from "@components/icon";
import { openModal } from "@actions/modal";
import Pagination from "./components/pagination";
import queryString from "query-string";
import { SearchField } from "@components/search";
import { Spinner } from "@components/spinner";
import TagTable from "./components/tag-table";
import { useAddQuery } from "@utils/add-query";
import { usePaginatedQuery } from "react-query";

const TagList = ({ location, openModal }) => {
  const [searchValue, setSearchValue] = useState("");
  const query = useAddQuery();

  let queryParam = queryString.parse(location.search);
  let pageNumber = queryParam.page;
  let searchTerm = queryParam.search;

  const { status, resolvedData, error } = usePaginatedQuery(
    ["tagList", pageNumber, searchTerm],
    fetchTagsApi
  );

  if (status === "loading" || status === "error") return <Spinner />;

  return (
    <AdminLayout>
      <div className="flex items-center justify-between space-x-4">
        <div className="max-w-md flex-1">
          <SearchField
            placeholder="Search tags by title"
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
            onClick={() => openModal("ADD_TAG", {})}
            className="group flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <span className="-ml-1 pr-1">
              <Icon
                icon="plus"
                className="h-5 w-5 text-gray-200 group-hover:text-white transition ease-in-out duration-150"
              />
            </span>
            Add tag
          </button>
        </div>
      </div>
      <TagTable tags={resolvedData.data.tags} />
      <Pagination pageInfo={resolvedData.data.pageInfo} />
    </AdminLayout>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modalType, modalProps) => dispatch(openModal(modalType, modalProps))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TagList);
