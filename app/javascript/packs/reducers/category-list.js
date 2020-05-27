import { FETCH_CATEGORIES } from "@actions/types";

const initialState = {
  categories: [],
  pageInfo: {}
};

export const categoryList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
        pageInfo: action.payload.pageInfo
      };
    default:
      return state;
  }
};
