import { FETCH_USERS, FETCH_USERS_LOADING, FETCH_USERS_ROLE } from "@actions/types";

const initialState = {
  users: [],
  pageInfo: {},
  loading: false,
  role: ""
};

export const userList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload.users,
        pageInfo: action.payload.pageInfo,
        loading: false
      };
    case FETCH_USERS_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_ROLE:
      return {
        ...state,
        role: action.payload
      };
    default:
      return state;
  }
};
