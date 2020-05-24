import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "@admin/views/dashboard";
import Header from "@admin/views/header";
import Sidebar from "@admin/views/sidebar";

const AdminRoute = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header />
        <Switch>
          <Route path="/admin/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminRoute;
