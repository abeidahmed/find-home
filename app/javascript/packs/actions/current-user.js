import { LOGOUT_USER, POST_CURRENT_USER, CURRENT_USER_LOADING } from "./types";

export const postCurrentUser = (user, token) => {
  return {
    type: POST_CURRENT_USER,
    payload: {
      user,
      token
    }
  };
};

export const currentUserLoading = () => {
  return {
    type: CURRENT_USER_LOADING
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};
