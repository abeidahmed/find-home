import { FETCH_USERS, FETCH_USERS_LOADING, FETCH_USERS_ROLE } from "./types";

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

export const fetchUsersRole = role => {
  return {
    type: FETCH_USERS_ROLE,
    payload: role
  };
};
