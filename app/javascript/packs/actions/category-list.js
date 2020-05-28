import { ADD_CATEGORY_ERROR, ADD_CATEGORY_LOADING, FETCH_CATEGORIES } from "./types";

export const addCategoryError = error => {
  return {
    type: ADD_CATEGORY_ERROR,
    payload: error
  };
};

export const addCategoryLoading = bool => {
  return {
    type: ADD_CATEGORY_LOADING,
    payload: bool
  };
};

export const fetchCategories = (categories, pageInfo) => {
  return {
    type: FETCH_CATEGORIES,
    payload: {
      categories,
      pageInfo
    }
  };
};
