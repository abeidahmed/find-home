import React, { useState } from "react";
import { AdminLayout } from "@components/layout";
import CategoryHeader from "./components/category-header";
import { Link, useParams } from "react-router-dom";
import Pagination from "./components/pagination";
import PostTable from "./components/post-table";
import queryString from "query-string";
import { SearchField } from "@components/search";
import { showCategoryApi } from "@api/category/show-category";
import { Spinner } from "@components/spinner";
import { useAddQuery } from "@utils/add-query";
import { usePaginatedQuery } from "react-query";

const ShowCategory = () => {
  const params = useParams();
  let queryParam = queryString.parse(location.search);
  let pageNumber = queryParam.page;
  let searchTerm = queryParam.search;

  const [searchValue, setSearchValue] = useState(searchTerm);
  const query = useAddQuery();

  const { status, resolvedData } = usePaginatedQuery(
    ["showCategory", { id: params.id, page: pageNumber, search: searchTerm, perPage: 10 }],
    showCategoryApi
  );

  if (status === "loading" || status === "error") return <Spinner />;

  const {
    category: {
      title,
      description,
      createdAt,
      postCount,
      categoryPosts: { posts, pageInfo }
    }
  } = resolvedData.data;

  return (
    <AdminLayout>
      <div className="sm:flex sm:justify-between">
        <CategoryHeader
          id={params.id}
          title={title}
          description={description}
          postCount={postCount}
          createdAt={createdAt}
        />
      </div>
      <div className="my-10">
        <h3 className="text-gray-700">Showing posts belonging to {title} category</h3>
        <div className="mt-4">
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
        </div>
        <PostTable posts={posts} />
        <Pagination pageInfo={pageInfo} />
      </div>
    </AdminLayout>
  );
};

export default ShowCategory;
