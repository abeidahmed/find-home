import { POST_CURRENT_USER } from "@actions/types";

const initialState = {
  user: [],
  token: localStorage.getItem("token")
};

export const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case POST_CURRENT_USER:
      localStorage.setItem("token", action.payload.token);
      return {
        user: action.payload.user,
        token: action.payload.token
      };
    default:
      return state;
  }
};
