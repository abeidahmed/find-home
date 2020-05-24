import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "@admin/views/dashboard";
import Header from "@admin/views/header";
import Sidebar from "@admin/views/sidebar";
import UserList from "@admin/views/user/user-list";

const AdminRoute = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header />
        <Switch>
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route path="/admin/users" component={UserList} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminRoute;
