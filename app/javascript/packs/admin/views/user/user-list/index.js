import React, { useEffect } from "react";
import { AdminLayout } from "@components/layout";
import { connect } from "react-redux";
import { fetchAllUsers } from "@api/user/user-list";
import FilterButton from "./components/filter-button";
import Pagination from "./components/pagination";
import queryString from "query-string";
import { SearchField } from "@components/search";
import { Spinner } from "@components/spinner";
import UserTable from "./components/user-table";

const UserList = ({ match, location, fetchUsers, loading, users }) => {
  let queryParam = queryString.parse(location.search);
  let userRoleParam = queryParam.user_role;
  let pageNumber = queryParam.page;

  useEffect(() => {
    const fetchAllUsers = () => {
      fetchUsers(queryParam);
    };
    fetchAllUsers();
  }, [fetchUsers, userRoleParam, pageNumber]);

  if (loading) return <Spinner />;

  return (
    <AdminLayout>
      <div className="flex items-center justify-between space-x-4">
        <div className="max-w-md flex-1">
          <SearchField placeholder="Search users" />
        </div>
        <div>
          <FilterButton match={match} />
        </div>
      </div>
      <UserTable users={users} />
      <Pagination match={match} location={location} />
    </AdminLayout>
  );
};

const mapStateToProps = state => {
  const { loading, users } = state.userList;
  return {
    loading,
    users
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
