import {
  ADD_CATEGORY,
  ADD_CATEGORY_ERROR,
  ADD_CATEGORY_LOADING,
  FETCH_CATEGORIES
} from "@actions/types";

const initialState = {
  categories: [],
  pageInfo: {},
  loadWhileAdd: false,
  error: []
};

export const categoryList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
        pageInfo: action.payload.pageInfo,
        loadWhileAdd: false
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [action.payload, ...state.categories]
      };
    case ADD_CATEGORY_LOADING:
      return {
        ...state,
        loadWhileAdd: action.payload
      };
    case ADD_CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload,
        loadWhileAdd: false
      };
    default:
      return state;
  }
};
