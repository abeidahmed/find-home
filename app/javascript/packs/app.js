import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store";
import { fetchCurrentUser } from "@/api/current-user";
import PublicRoute from "@/routes/public-route";

const App = () => {
  useEffect(() => {
    if (store.getState().currentUser.token !== null) {
      store.dispatch(fetchCurrentUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={PublicRoute} />
        </Switch>
      </Router>
    </Provider>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
