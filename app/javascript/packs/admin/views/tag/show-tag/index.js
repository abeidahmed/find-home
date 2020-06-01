import React, { useState } from "react";
import { AdminLayout } from "@components/layout";
import Pagination from "./components/pagination";
import PostTable from "./components/post-table";
import queryString from "query-string";
import { SearchField } from "@components/search";
import { showTagApi } from "@api/tag/show-tag";
import { Spinner } from "@components/spinner";
import TagHeader from "./components/tag-header";
import { useAddQuery } from "@utils/add-query";
import { usePaginatedQuery } from "react-query";
import { useParams } from "react-router-dom";

const ShowTag = () => {
  const params = useParams();
  let queryParam = queryString.parse(location.search);
  let pageNumber = queryParam.page;
  let searchTerm = queryParam.search;

  const [searchValue, setSearchValue] = useState(searchTerm);
  const query = useAddQuery();

  const { status, resolvedData } = usePaginatedQuery(
    ["showTag", { id: params.id, page: pageNumber, search: searchTerm, perPage: 10 }],
    showTagApi
  );

  if (status === "loading" || status === "error") return <Spinner />;

  const {
    tag: {
      title,
      description,
      createdAt,
      postCountInWords,
      tagPosts: { posts, pageInfo }
    }
  } = resolvedData.data;

  return (
    <AdminLayout>
      <div className="sm:flex sm:justify-between">
        <TagHeader
          id={params.id}
          title={title}
          description={description}
          postCountInWords={postCountInWords}
          createdAt={createdAt}
        />
      </div>
      <div className="my-10">
        <h3 className="text-gray-700">Showing posts tagged to {title}</h3>
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

export default ShowTag;
