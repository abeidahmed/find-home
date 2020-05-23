import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "./routes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PublicRoute} />
      </Switch>
    </Router>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
