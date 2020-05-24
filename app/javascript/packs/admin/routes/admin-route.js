import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "@admin/views/dashboard";

const AdminRoute = () => {
  return (
    <Switch>
      <Route path="/admin/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default AdminRoute;
