import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "@views/header";
import Home from "@views/home";
import Signup from "@views/signup";

const PublicRoute = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default PublicRoute;
