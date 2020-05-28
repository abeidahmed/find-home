import React, { useEffect, useState } from "react";
import { AdminLayout } from "@components/layout";
import { connect } from "react-redux";
import { fetchAllUsers } from "@api/user/user-list";
import FilterButton from "./components/filter-button";
import Pagination from "./components/pagination";
import queryString from "query-string";
import { SearchField } from "@components/search";
import UserTable from "./components/user-table";
import { useAddQuery } from "@utils/add-query";

const UserList = ({ location, fetchUsers, modalType, users }) => {
  const [searchValue, setSearchValue] = useState("");
  const query = useAddQuery();

  let queryParam = queryString.parse(location.search);
  let userRoleParam = queryParam.user_role;
  let pageNumber = queryParam.page;
  let searchTerm = queryParam.search;

  useEffect(() => {
    const fetchAllUsers = () => {
      fetchUsers(queryParam);
    };
    fetchAllUsers();
  }, [fetchUsers, userRoleParam, pageNumber, searchTerm, modalType]);

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
      <UserTable users={users} />
      <Pagination />
    </AdminLayout>
  );
};

const mapStateToProps = state => {
  const { users } = state.userList;
  return {
    users,
    modalType: state.modal.modalType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: param => dispatch(fetchAllUsers(param))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
