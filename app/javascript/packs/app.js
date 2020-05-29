import React, { useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store";
import { fetchCurrentUser } from "@/api/user/current-user";
import AdminRoute from "@admin/routes/admin-route";
import PublicRoute from "@/routes/public-route";
import ModalRoot from "@components/modal/modal-root";

const modalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case "CLOSE_MODAL":
      return {
        modalType: null,
        modalProps: {}
      };

    default:
      return state;
  }
};

const initialState = {
  modalType: null,
  modalProps: {}
};

export const ModalProvider = React.createContext(initialState);

const App = () => {
  useEffect(() => {
    if (store.getState().currentUser.token !== null) {
      store.dispatch(fetchCurrentUser());
    }
  }, []);

  const [modalState, dispatch] = useReducer(modalReducer, initialState);

  return (
    <Provider store={store}>
      <ModalProvider.Provider value={{ modalState, dispatch }}>
        <Router>
          <ModalRoot />
          <Switch>
            <Route path="/admin" component={AdminRoute} />
            <Route path="/" component={PublicRoute} />
          </Switch>
        </Router>
      </ModalProvider.Provider>
    </Provider>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
