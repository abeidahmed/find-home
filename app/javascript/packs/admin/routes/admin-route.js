import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryList from "@admin/views/category/category-list";
import Dashboard from "@admin/views/dashboard";
import Header from "@admin/views/header";
import ShowCategory from "@admin/views/category/show-category";
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
          <Route exact path={`${match.path}/categories`} component={CategoryList} />
          <Route path={`${match.path}/categories/:id`} component={ShowCategory} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminRoute;
