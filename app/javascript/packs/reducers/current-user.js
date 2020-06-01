import { LOGOUT_USER, POST_CURRENT_USER, CURRENT_USER_LOADING } from "@actions/types";

const initialState = {
  user: {},
  token: localStorage.getItem("token"),
  loading: false
};

export const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case POST_CURRENT_USER:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        user: {},
        token: null,
        loading: false
      };
    case CURRENT_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
