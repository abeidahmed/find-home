import React, { useState } from "react";
import { AdminLayout } from "@components/layout";
import { fetchUsersApi } from "@api/user/user-list";
import FilterButton from "./components/filter-button";
import Pagination from "./components/pagination";
import queryString from "query-string";
import { SearchField } from "@components/search";
import { Spinner } from "@components/spinner";
import UserTable from "./components/user-table";
import { useAddQuery } from "@utils/add-query";
import { usePaginatedQuery } from "react-query";

const UserList = ({ location }) => {
  let queryParam = queryString.parse(location.search);
  let userRole = queryParam.user_role;
  let pageNumber = queryParam.page;
  let searchTerm = queryParam.search;

  const [searchValue, setSearchValue] = useState(searchTerm);
  const query = useAddQuery();

  const { status, resolvedData, error } = usePaginatedQuery(
    ["userList", pageNumber, searchTerm, userRole, 10],
    fetchUsersApi
  );

  if (status === "loading" || status === "error") return <Spinner />;

  return (
    <AdminLayout>
      <div className="flex items-center justify-between space-x-4">
        <div className="max-w-md flex-1">
          <SearchField
            placeholder="Search users by name, email"
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
          <FilterButton />
        </div>
      </div>
      <UserTable users={resolvedData.data.users} />
      <Pagination pageInfo={resolvedData.data.pageInfo} />
    </AdminLayout>
  );
};

export default UserList;
