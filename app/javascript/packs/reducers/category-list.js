import { ADD_CATEGORY, ADD_CATEGORY_ERROR, FETCH_CATEGORIES } from "@actions/types";

const initialState = {
  categories: [],
  pageInfo: {},
  error: []
};

export const categoryList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
        pageInfo: action.payload.pageInfo
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [action.payload, ...state.categories]
      };
    case ADD_CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
