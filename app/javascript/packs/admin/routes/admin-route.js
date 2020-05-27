import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryList from "@admin/views/category/category-list";
import Dashboard from "@admin/views/dashboard";
import Header from "@admin/views/header";
import Sidebar from "@admin/views/sidebar";
import UserList from "@admin/views/user/user-list";

const AdminRoute = ({ match }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header />
        <Switch>
          <Route path={`${match.path}/dashboard`} component={Dashboard} />
          <Route path={`${match.path}/users`} component={UserList} />
          <Route path={`${match.path}/categories`} component={CategoryList} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminRoute;
