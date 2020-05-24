import { FETCH_USERS, FETCH_USERS_LOADING } from "./types";

export const fetchUsers = (users, pageInfo) => {
  return {
    type: FETCH_USERS,
    payload: {
      users,
      pageInfo
    }
  };
};

export const fetchUsersLoading = () => {
  return {
    type: FETCH_USERS_LOADING
  };
};
