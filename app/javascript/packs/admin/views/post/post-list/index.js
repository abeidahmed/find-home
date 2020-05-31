import React, { useState } from "react";
import { AdminLayout } from "@components/layout";
import { fetchPostsApi } from "@api/post/post-list";
import Icon from "@components/icon";
import { Link } from "react-router-dom";
import Pagination from "./components/pagination";
import PostTable from "./components/post-table";
import queryString from "query-string";
import { SearchField } from "@components/search";
import { Spinner } from "@components/spinner";
import { useAddQuery } from "@utils/add-query";
import { usePaginatedQuery } from "react-query";

const PostList = ({ match, location }) => {
  let queryParam = queryString.parse(location.search);
  let pageNumber = queryParam.page;
  let searchTerm = queryParam.search;

  const [searchValue, setSearchValue] = useState(searchTerm);
  const query = useAddQuery();

  const { status, resolvedData, error } = usePaginatedQuery(
    ["postList", pageNumber, searchTerm, 10],
    fetchPostsApi
  );

  if (status === "loading" || status === "error") return <Spinner />;

  return (
    <AdminLayout>
      <div className="flex items-center justify-between space-x-4">
        <div className="max-w-md flex-1">
          <SearchField
            placeholder="Search posts by title"
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
          <Link
            to={`${match.path}/add`}
            className="group flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <span className="-ml-1 pr-1">
              <Icon
                icon="plus"
                className="h-5 w-5 text-gray-200 group-hover:text-white transition ease-in-out duration-150"
              />
            </span>
            Add post
          </Link>
        </div>
      </div>
      <PostTable posts={resolvedData.data.posts} />
      <Pagination pageInfo={resolvedData.data.pageInfo} />
    </AdminLayout>
  );
};

export default PostList;
