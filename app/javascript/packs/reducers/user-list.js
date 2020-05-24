import { FETCH_USERS, FETCH_USERS_LOADING } from "@actions/types";

const initialState = {
  users: [],
  pageInfo: {},
  loading: false,
  error: []
};

export const userList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        users: action.payload.users,
        pageInfo: action.payload.pageInfo,
        loading: false,
        error: []
      };
    case FETCH_USERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
